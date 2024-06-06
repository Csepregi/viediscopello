import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { defer, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { FaCamera } from 'react-icons/fa'; // Import the icon from react-icons

type LoaderData = {
  imageUrls: string[];
};

export const loader = async () => {
  const s3 = new S3Client({ region: 'eu-central-1' });
  const command = new ListObjectsV2Command({
    Bucket: 'viediscopello'
  });
  const data = await s3.send(command);

  const imageUrls = await data.Contents?.map(item => `https://d3fcvp7s4vbn7p.cloudfront.net/${item.Key}`) || [];

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
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
         {imageUrls.map((url, index) => (
            <>
            <img className="rounded-md cursor-pointer"  key={`Image ${url + index + 1}`} src={url} alt={`Image ${index + 1}`} onClick={() => toggleView(url)} />
            </>
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
                onClick={() => toggleView(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
  );
}
