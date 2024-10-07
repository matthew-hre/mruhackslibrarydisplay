/* eslint-disable @next/next/no-img-element */
"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import config from "@/photowall.config";

export function PhotoWall() {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const photoWallRefreshRate = config.photowall.refreshRate || 30 * 60 * 1000;
  const photoWallRotationRate = config.photowall.rotationRate || 10000;

  const fetchPhotos = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("/api/photos");
      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setError("Failed to fetch photos");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, photoWallRefreshRate); // Fetch every 30 minutes
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col flex-[3] rounded-lg overflow-hidden relative">
        <div className="w-full h-12 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent px-8 pt-4 pb-12 z-10">
          <h2 className="text-2xl font-bold text-white">Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col flex-[3] rounded-lg overflow-hidden relative">
        <div className="w-full h-12 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent px-8 pt-4 pb-12 z-10">
          <h2 className="text-2xl font-bold text-white">{error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-[3] rounded-lg overflow-hidden h-full relative">
      <div className="w-full h-12 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent px-8 pt-4 pb-12 z-10">
        <h2 className="text-2xl font-bold text-white">
          The MRUHacks Live Photo Wall
        </h2>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: photoWallRotationRate,
          }),
        ]}
        className="h-full"
        id="photo-wall"
      >
        <CarouselContent className="h-full">
          {images?.map((src, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={src}
                alt="A photo from MRUHacks"
              ></img>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
