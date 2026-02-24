import { useState, useEffect } from "react";
import { useLoaderData } from "@remix-run/react";
import WineryCards from "~/components/WineryCards";
import ImageGallery from "~/components/ImageGallery";
import { fetchTastavinoIIGalleryImages, fetchTastavinoIIMontageImages, fetchTastavinoIINightImages } from "~/utils/s3Gallery.server";

type LoaderData = {
  galleryImages: string[];
  s3GalleryImages: string[];
  montageImages: string[];
  nightGalleryImages: string[];
};

export const loader = async () => {
  // Hero carousel images (local fallback)
  const localGalleryImages = [
    '/tastavino-132.jpg',
    '/tastavino-117.jpg',
    '/tastavino-112.jpg',
    '/tastavino-77.jpg',
    '/tastavino-68.jpg',
    '/tastavino-66.jpg',
    '/tastavino-57.jpg'
  ];

  // Fetch S3 gallery images
  const s3GalleryImages = await fetchTastavinoIIGalleryImages();

  // Fetch montage images for the hero carousel
  const montageImages = await fetchTastavinoIIMontageImages();

  // Fetch night gallery images
  const nightGalleryImages = await fetchTastavinoIINightImages();

  return {
    galleryImages: montageImages.length > 0 ? montageImages : localGalleryImages,
    s3GalleryImages,
    montageImages,
    nightGalleryImages
  };
};

export default function TastavinoII() {
  const { galleryImages, s3GalleryImages, nightGalleryImages } = useLoaderData<LoaderData>();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, ] = useState(true);



  const toggleSection = (section: string) => {
    const wasActive = activeSection === section;

    if (wasActive) {
      setActiveSection(null);
    } else {
      setActiveSection(section);

      // Smooth scroll to section
      setTimeout(() => {
        const element = document.getElementById(`section-${section}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 800);
    
    return () => clearInterval(interval);
  }, [galleryImages.length, isAutoPlaying]);


  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section with Carousel */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Carousel */}
        <div className="absolute inset-0 z-0">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Tastavino event ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-blue/40 to-blue/70"></div>
        </div>
       
      </div>

      {/* Post-Event Introduction */}
      <div className="py-8 md:py-12 bg-gradient-to-b from-celeste/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue mb-6">
              Un Evento Indimenticabile
            </h2>
            <p className="text-lg md:text-xl text-blue leading-relaxed mb-8">
              Tastavino vol. II si è concluso con grande successo! Rivivi i momenti più belli
              attraverso le nostre gallerie fotografiche e scopri le cantine che hanno reso
              speciale questa seconda edizione.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => toggleSection('gallerie')}
                className="flex items-center justify-center gap-2 bg-blue hover:bg-blue/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                📸
                <span>{activeSection === 'gallerie' ? 'Nascondi' : 'Gallerie Fotografiche'}</span>
              </button>

              <button
                onClick={() => toggleSection('cantine')}
                className="flex items-center justify-center gap-2 bg-celeste hover:bg-celeste/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                🍷
                <span>{activeSection === 'cantine' ? 'Nascondi' : 'Le Cantine Partecipanti'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Action Bar - Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-3 z-50 md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => toggleSection('gallerie')}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all duration-300 ${
              activeSection === 'gallerie'
                ? 'bg-blue/20 text-blue shadow-md'
                : 'text-blue hover:bg-blue/10 hover:shadow-sm active:bg-blue/20'
            }`}
          >
            <span className="text-xl mb-1">📸</span>
            <span className="text-xs font-medium">Gallerie</span>
          </button>

          <button
            onClick={() => toggleSection('cantine')}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all duration-300 ${
              activeSection === 'cantine'
                ? 'bg-celeste/20 text-celeste shadow-md'
                : 'text-blue hover:bg-celeste/10 hover:text-celeste hover:shadow-sm active:bg-celeste/20'
            }`}
          >
            <span className="text-xl mb-1">🍷</span>
            <span className="text-xs font-medium">Cantine</span>
          </button>
        </div>
      </div>

      {/* Add padding at the bottom to account for the fixed mobile bar */}
      <div className="h-16 md:hidden"></div>

      {/* Accordion Content Sections - Full Width */}
      {activeSection && (
        <div id={`section-${activeSection}`} className="w-full py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Gallerie Content */}
            {activeSection === 'gallerie' && (
              <div className="max-w-6xl mx-auto space-y-12">
                <h2 className="text-3xl font-bold text-blue mb-8 text-center">Gallerie Fotografiche</h2>

                {/* First Gallery - S3 Images */}
                <div>
                  <ImageGallery
                    images={s3GalleryImages}
                    title="I talk e le masterclass"
                    photographer="Andrea Marchese"
                    layout="horizontal"
                    galleryId="main-gallery"
                  />
                </div>

                {/* Second Gallery - Night Photos */}
                <div>
                  <ImageGallery
                    images={nightGalleryImages}
                    title="Degustazioni e festa serale"
                    photographer="Salvatore Buongiorno"
                    layout="horizontal"
                    galleryId="night-gallery"
                  />
                </div>
              </div>
            )}

            {/* Cantine Content */}
            {activeSection === 'cantine' && (
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-blue mb-8 text-center">Le Cantine Partecipanti</h2>
                <p className="text-lg text-blue text-center mb-8">
                  Ringraziamo tutte le cantine che hanno reso possibile Tastavino vol. II
                </p>
                <WineryCards />
              </div>
            )}
          </div>
        </div>
      )}


      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="max-w-5xl mx-auto">

          {/* Event Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="text-3xl text-orange mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2 text-blue">Quando</h3>
              <p className="text-lg text-blue">1-2 Giugno 2025</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="text-3xl text-orange mb-4">🍷</div>
              <h3 className="text-xl font-semibold mb-2 text-blue">Cantine</h3>
              <p className="text-lg text-blue">20 Cantine</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="text-3xl text-orange mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2 text-blue">Partecipanti</h3>
              <p className="text-lg text-blue">600+ Visitatori</p>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="mt-16 mb-12">
            <h3 className="text-2xl font-bold text-blue text-center mb-4">Ringraziamenti</h3>
            <p className="text-lg text-blue text-center mb-8">
              Un sentito ringraziamento a tutti coloro che hanno reso possibile Tastavino vol. II
            </p>
            
            {/* Desktop Sponsors View */}
            <div className="hidden md:flex justify-center items-center flex-wrap gap-8">
              {['comune', 'irvo2', 'regione-sicilia', 'sicilia-gastro', 'banca'].map((sponsor) => (
                <div key={sponsor} className="w-32 h-32 flex items-center justify-center p-4 bg-white rounded-lg shadow-md transform transition hover:scale-105">
                  <img 
                    src={`/sponsor-${sponsor}.png`} 
                    alt={`Sponsor ${sponsor}`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* Mobile Sponsors View - Horizontally scrollable */}
            <div className="md:hidden">
              <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide">
                {['comune', 'irvo2', 'regione-sicilia', 'sicilia-gastro', 'banca'].map((sponsor) => (
                  <div 
                    key={sponsor} 
                    className="flex-shrink-0 w-36 h-36 flex items-center justify-center p-4 bg-white rounded-lg shadow-md snap-center"
                  >
                    <img 
                      src={`/sponsor-${sponsor}.png`} 
                      alt={`Sponsor ${sponsor}`} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              
              {/* Scroll indicator for mobile */}
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {['comune', 'irvo2', 'regione-sicilia', 'sicilia-gastro', 'banca'].map((_, index) => (
                    <div 
                      key={index} 
                      className="w-2 h-2 rounded-full bg-blue/30"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-blue mt-12 bg-gray-50 rounded-lg p-8">
              Per informazioni sui prossimi eventi:
              <a href="mailto:viediscopello@gmail.com" className="text-blue hover:underline ml-1">viediscopello@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
