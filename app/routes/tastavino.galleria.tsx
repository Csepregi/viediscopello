import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { defer, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { FaCamera } from 'react-icons/fa';

type LoaderData = {
  imageUrls: string[];
};

export const loader = async () => {
  // In development, use local placeholder images
  if (process.env.NODE_ENV === 'development') {
    // Create an array of placeholder image URLs from public folder
    const placeholderImages = [
      '/eventphoto.jpeg',
      '/borgo.jpeg',
      '/scop.jpg',
      '/marescopello.jpg',
      '/scop3.jpg',
      '/marescopello1.jpg',
      '/tastavino2.jpg',
      '/logoscopello.png',
      '/matrioske.jpg'
    ];
    
    // Create a larger set by repeating the images
    const repeatedImages = Array.from({ length: 4 }, () => placeholderImages).flat();
    
    return defer({ imageUrls: repeatedImages });
  }
  
  // In production, use the real S3/CloudFront images
  const s3 = new S3Client({ region: 'eu-central-1' });
  const command = new ListObjectsV2Command({
    Bucket: 'viediscopello'
  });
  const data = await s3.send(command);

  const imageUrls = data.Contents?.map(item => 
    `https://d3fcvp7s4vbn7p.cloudfront.net/${item.Key}`
  ) || [];

  return defer({ imageUrls });
};

export default function Gallery() {
  const { imageUrls } = useLoaderData<LoaderData>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const toggleView = (url: string | null) => {
    setSelectedImage(url);
  };
  
  return (
    <div className="p-4 bg-white">
      <div className="text-center text-lg text-blue flex justify-center items-center mb-4">
        <FaCamera className="mr-2" />
        Foto di Andrea Marchese
        {process.env.NODE_ENV === 'development' && (
          <span className="ml-2 text-sm text-orange">(Development Mode: Using Placeholder Images)</span>
        )}
      </div>
      
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
        {imageUrls.map((url, index) => (
          <div key={`image-${index}`} className="mb-4 break-inside-avoid">
            <img 
              className="rounded-md cursor-pointer w-full" 
              src={url} 
              alt={`Image ${index + 1}`} 
              onClick={() => toggleView(url)} 
            />
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={() => toggleView(null)}>
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="object-contain rounded-md"
              style={{ width: '100vw', height: '100vh' }}
            />
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                toggleView(null);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
