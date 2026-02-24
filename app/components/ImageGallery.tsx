import { useState } from "react";
import { FaCamera, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ImageGalleryProps {
  images: string[];
  title?: string;
  photographer?: string;
  isLoading?: boolean;
  layout?: 'masonry' | 'horizontal';
  galleryId?: string;
}

export default function ImageGallery({
  images,
  title = "Galleria Foto",
  photographer,
  isLoading = false,
  layout = 'masonry',
  galleryId
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Generate unique gallery ID if not provided
  const uniqueGalleryId = galleryId || `gallery-${Math.random().toString(36).substring(2, 11)}`;


  
  const openLightbox = (url: string, index: number) => {
    setSelectedImage(url);
    setSelectedIndex(index);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      const newIndex = selectedIndex > 0 ? selectedIndex - 1 : images.length - 1;
      setSelectedIndex(newIndex);
      setSelectedImage(images[newIndex]);
    } else {
      const newIndex = selectedIndex < images.length - 1 ? selectedIndex + 1 : 0;
      setSelectedIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue mx-auto mb-4"></div>
          <p className="text-blue">Caricamento foto...</p>
        </div>
      </div>
    );
  }

  if (!images || images.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center text-blue">
          <FaCamera className="mx-auto text-4xl mb-4 opacity-50" />
          <p>Nessuna foto disponibile</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Gallery Header */}
      <div className="bg-blue text-white p-4">
        <div className="flex items-center justify-center">
          <FaCamera className="mr-2" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        {photographer && (
          <p className="text-center text-sm mt-1 opacity-90">Foto di {photographer}</p>
        )}
      </div>
      
      {/* Gallery Content */}
      <div className="p-4">
        {layout === 'horizontal' ? (
          /* Horizontal Scrollable Gallery */
          <div className="relative">
            {/* Mobile scroll hint */}
            <div className="md:hidden text-center mb-3">
              <p className="text-sm text-blue/70 italic">
                👈 Scorri per vedere tutte le foto 👉
              </p>
            </div>
            {/* Scroll Buttons - Desktop */}
            <button
              className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 border border-blue/20"
              onClick={() => {
                const container = document.getElementById(uniqueGalleryId);
                if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
              }}
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            <button
              className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 border border-blue/20"
              onClick={() => {
                const container = document.getElementById(uniqueGalleryId);
                if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
              }}
            >
              <FaChevronRight className="w-4 h-4" />
            </button>

            {/* Horizontal Gallery Container */}
            <div
              id={uniqueGalleryId}
              className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide px-2 md:px-8"
            >
              {images.map((url, index) => (
                <div
                  key={`image-${index}`}
                  className="flex-shrink-0 snap-center"
                >
                  <img
                    className="h-56 sm:h-64 md:h-80 w-auto rounded-lg cursor-pointer hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-xl md:hover:scale-105 object-cover"
                    src={url}
                    alt={`${title} ${index + 1}`}
                    onClick={() => openLightbox(url, index)}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="flex justify-center mt-4 md:hidden">
              <div className="flex space-x-1">
                {images.slice(0, Math.min(images.length, 10)).map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-blue/30"
                  />
                ))}
                {images.length > 10 && (
                  <span className="text-xs text-blue/60 ml-2">+{images.length - 10}</span>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Masonry Gallery */
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((url, index) => (
              <div key={`image-${index}`} className="mb-4 break-inside-avoid">
                <img
                  className="rounded-md cursor-pointer w-full hover:opacity-90 transition-opacity duration-200 shadow-sm hover:shadow-md"
                  src={url}
                  alt={`${title} ${index + 1}`}
                  onClick={() => openLightbox(url, index)}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50" 
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-full max-h-full p-4">
            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-200 z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-200 z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
            
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-200 z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <FaTimes className="w-6 h-6" />
            </button>
            
            {/* Image */}
            <img
              src={selectedImage}
              alt={`${title} ${selectedIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-md"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Placeholder component for galleries that are "on the way"
export function ImageGalleryPlaceholder({ 
  title = "Galleria Foto", 
  message = "Foto in arrivo..." 
}: { 
  title?: string; 
  message?: string; 
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Gallery Header */}
      <div className="bg-blue text-white p-4">
        <div className="flex items-center justify-center">
          <FaCamera className="mr-2" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
      
      {/* Placeholder Content */}
      <div className="p-8 text-center">
        <div className="bg-gray-100 rounded-lg p-12 mb-4">
          <FaCamera className="mx-auto text-6xl text-gray-400 mb-4" />
          <p className="text-gray-600 text-lg">{message}</p>
        </div>
        <p className="text-sm text-gray-500">
          Le foto saranno disponibili a breve
        </p>
      </div>
    </div>
  );
}
