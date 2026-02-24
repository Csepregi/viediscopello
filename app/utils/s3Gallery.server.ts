import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

export async function fetchS3Images(bucketName: string): Promise<string[]> {
  try {
    // In development, use placeholder images
    if (process.env.NODE_ENV === 'development') {
      const placeholderImages = [
        '/tastavino-132.jpg',
        '/tastavino-117.jpg',
        '/tastavino-112.jpg',
        '/tastavino-77.jpg',
        '/tastavino-68.jpg',
        '/tastavino-66.jpg',
        '/tastavino-57.jpg',
        '/eventphoto.jpeg',
        '/borgo.jpeg',
        '/scop.jpg',
        '/marescopello.jpg',
        '/scop3.jpg',
        '/marescopello1.jpg',
        '/tastavino2.jpg'
      ];

      // Simulate some loading time
      await new Promise(resolve => setTimeout(resolve, 500));

      return placeholderImages;
    }

    // In production, use the real S3 images
    const s3 = new S3Client({ region: 'eu-central-1' });
    const command = new ListObjectsV2Command({
      Bucket: bucketName
    });

    const data = await s3.send(command);

    // Filter for image files only
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const imageUrls = data.Contents?.filter(item => {
      const key = item.Key?.toLowerCase() || '';
      return imageExtensions.some(ext => key.endsWith(ext));
    }).map(item => {
      // Use direct S3 URLs for new buckets since CloudFront only serves viediscopello bucket
      const encodedKey = encodeURIComponent(item.Key || '');

      let url;
      if (bucketName === 'viediscopello') {
        // Use CloudFront for the original bucket
        url = `https://d3fcvp7s4vbn7p.cloudfront.net/${encodedKey}`;
      } else {
        // Use direct S3 URLs for new buckets
        url = `https://${bucketName}.s3.eu-central-1.amazonaws.com/${encodedKey}`;
      }

      return url;
    }) || [];

    return imageUrls;
  } catch (error) {
    console.error(`Error fetching images from S3 bucket ${bucketName}:`, error);

    // Return empty array on error so the page doesn't break
    return [];
  }
}



export async function fetchTastavinoIIGalleryImages(): Promise<string[]> {
  return fetchS3Images('viediscopello2ndtalks');
}

export async function fetchTastavinoIIMontageImages(): Promise<string[]> {
  return fetchS3Images('tastavino-2-montage');
}

export async function fetchTastavinoIINightImages(): Promise<string[]> {
  // In development, provide some placeholder night images
  if (process.env.NODE_ENV === 'development') {
    const nightPlaceholderImages = [
      '/tastavino-132.jpg',
      '/tastavino-117.jpg',
      '/borgo.jpeg',
      '/eventphoto.jpeg',
      '/marescopello1.jpg',
      '/tastavino2.jpg'
    ];

    // Simulate some loading time
    await new Promise(resolve => setTimeout(resolve, 300));

    return nightPlaceholderImages;
  }

  return fetchS3Images('tastavino-2-night');
}
