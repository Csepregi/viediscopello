import React, { useState } from 'react';

type Winery = {
  name: string;
  description: string;
  logo: string;
};

export const wineries: Winery[] = [
  {
    name: 'Liberamente Vini',
    description: 'Ogni bottiglia è un racconto di famiglia, sole e radici.',
    logo: '/liberamente.jpeg'
  },
  {
    name: 'Brugnano',
    description: 'Vini contemporanei tra passione di famiglia e identità siciliana.',
    logo: '/brugnano.jpeg'
  },
  {
    name: 'Casa Grazia',
    description: 'Dalle sponde del Lago Biviere, una viticoltura che racconta la bellezza del paesaggio.',
    logo: '/casa_grazia.jpg'
  },
  {
    name: 'Di Legami',
    description: '100 ettari di natura e cuore, un solo legame: il territorio.',
    logo: '/legami.jpeg'
  },
  {
    name: 'Asta',
    description: 'Vini naturali che sanno di mare, vento e libertà.',
    logo: '/asta.jpeg' 
  },
  {
    name: 'Pizzitola',
    description: 'Quattro generazioni, un solo obiettivo: dare voce alle uve siciliane.',
    logo: '/pizzitola.jpg' 
  },
  {
    name: 'Mustazza',
    description: 'Tradizione che resiste, vino che racconta.',
    logo: '/mustazza.jpeg' 
  },
  {
    name: 'Candido',
    description: 'Biologico per vocazione, autentico per scelta.',
    logo: '/candido.jpeg' 
  },
  {
    name: 'SANT\'ANASTASIA',
    description: 'Vini nati in Abbazia, dove la natura è maestra e la sostenibilità una promessa antica.',
    logo: '/abbazia-santa-anastasia-logo.png' 
  },
  {
    name: 'LONGARICO',
    description: 'Vini naturali che parlano siciliano, puri, vibranti, figli del sole e del mare.',
    logo: '/longarico-logo.png' 
  },
  {
    name: 'Porta del Vento',
    description: 'Vini autentici, nati dal vento e dalla terra di Sicilia.',
    logo: '/portanelvento.png' 
  },
  {
    name: 'LEONARDA TARDI',
    description: 'Dal cuore della Valle del Belice, un vino che unisce tradizione, impegno civile e identità.',
    logo: '/leonarda-tardi-logo.jpg' 
  },
  {
    name: 'COLLE DEI GESSI',
    description: 'Vini eleganti e minerali che nascono da piccole vigne, tra argilla, calcare e gesso.',
    logo: '/colle-dei-gessi-logo.jpg' 
  },
  {
    name: 'VIGNE DI VERRE',
    description: 'Una metafora siciliana in bottiglia: identità, pervicacia e voglia di mare aperto.',
    logo: '/vigneDverre.jpg'
  },
  {
    name: 'TERRE DI BRUCA',
    description: 'Dalla vigna al calice, vini che raccontano il territorio.',
    logo: '/terre-di-bruca-logo.gif' 
  },
  {
    name: 'TERRE DI GRATIA',
    description: 'Eleganza e armonia tra vento, sole e alture: biologico autentico dalla Valle del Belice.',
    logo: '/terre-di-gratia-logo.jpeg' 
  },
  {
    name: 'Tenute Nicosia',
    description: 'Cinque generazioni di vino sull’Etna, tra innovazione e tradizione vulcanica.',
    logo: '/tenutanicosia.jpg' 
  },
  {
    name: 'Tonnino',
    description: 'Un progetto familiare che racconta l’entroterra siciliano in ogni calice.',
    logo: '/tonnino.jpg',
  },
  {
    name: 'CANTONERI',
    description: 'Un\'etichetta di famiglia cresciuta sulle pendici dell\'Etna, dove le varietà si fondono in vini unici.',
    logo: '/cantoneri-logo.png' 
  },
  {
    name: 'CANTINA DEL MALANDRINO',
    description: 'Sui terrazzamenti lavici dell\'Etna ionica, un mondo di biodiversità ritrovato e custodito.',
    logo: '/cantina-del-malandrino-logo.jpg' 
  },
  {
    name: 'ALCANTARA',
    description: 'Un\'eredità millenaria che prende forma nei vitigni dell\'Etna: tra fuoco, storia e carattere.',
    logo: '/alcantara-logo.png' 
  },
  {
    name: 'MAGADDINO',
    description: 'Passione familiare, profumi unici del territorio trapanese.',
    logo: '/magaddino.jpeg' 
  },
  {
    name: 'MARINO ABATE',
    description: 'Passione di famiglia, scelta biologica, amore per la propria terra.',
    logo: '/MarinoAbate.jpg' 
  }
];

export default function WineryCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Find indices for the specific wineries
  const cantonetiIndex = wineries.findIndex(w => w.name === 'CANTONERI');
  const nicosiaIndex = wineries.findIndex(w => w.name === 'Tenute Nicosia');
  const malandrinoIndex = wineries.findIndex(w => w.name === 'CANTINA DEL MALANDRINO');
  const tonninoIndex = wineries.findIndex(w => w.name === 'Tonnino');
  const vigneDVereIndex = wineries.findIndex(w => w.name === 'VIGNE DI VERRE')

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {wineries.map((winery, index) => (
        <div 
          key={index} 
          className="relative group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={winery.logo} 
              alt={`${winery.name} background`} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue/90 to-blue/40 group-hover:from-blue/95 group-hover:to-blue/60 transition-all duration-300"></div>
          </div>
          
          {/* Masterclass Badge - Only for specific wineries */}
          {(index === cantonetiIndex || index === nicosiaIndex || index === malandrinoIndex) && (
            <div className="absolute top-4 right-4 z-20 bg-orange text-white text-xs font-bold px-3 py-1.5 rounded-full transform rotate-3 shadow-lg">
              <div className="relative">
                <span className="relative z-10">Solo in masterclass</span>
                <span className="absolute inset-0 bg-white opacity-20 rounded-full blur-[1px]"></span>
              </div>
            </div>
          )}
          
          {/* Content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[280px]">
            {/* Logo in circle */}
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <img 
                src={index === tonninoIndex ? '/tonnino2.jpg' : index ===  vigneDVereIndex ? '/vigne-di-verre-logo.jpg'  : winery.logo} 
                alt={`${winery.name} logo`} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Text content */}
            <div className="mt-auto">
              <h4 className="font-bold text-xl text-white mb-3 tracking-wide">{winery.name}</h4>
              <p className="text-white/90 leading-relaxed">
                {hoveredIndex === index 
                  ? winery.description 
                  : winery.description.length > 60 
                    ? `${winery.description.substring(0, 60)}...` 
                    : winery.description
                }
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
