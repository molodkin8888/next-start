'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import { fetchInstance } from '@/api/config';
import { useEffect, useState } from 'react';

interface Photos {
  id: number;
  url: string;
}

const Photos: NextPage = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetchInstance('/photos'); // Example API endpoint
      const data = await response.json();
      setPhotos(data);
    };

    fetchComments();
  }, []);

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-4">Photos</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div className="bg-white rounded-lg shadow-md" key={photo.id}>
            <Image
              alt={`Image ${photo.id}`}
              className="rounded-t-lg"
              height={200}
              src={photo.url}
              width={200}
            />
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">Image {photo.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
