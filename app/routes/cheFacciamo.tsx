import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function CheFacciamo() {
  const [flipped, setFlipped] = useState(Array(4).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="mx-auto px-5 min-h-screen py-2 lg:px-6 lg:pt-12 flex bg-white flex-col items-center text-blue justify-center">
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="text-4xl font-bold mb-5">Cosa Facciamo</h1>
        <div className="flex flex-wrap justify-center">
          {[1, 2, 3, 4].map((card, index) => (
            <div key={index} className="w-80 h-96 m-4 perspective">
              <div
                className={`relative w-full h-full transform-style preserve-3d transition-transform duration-700 ${
                  flipped[index] ? 'rotate-y-180' : ''
                }`}
              >
                <div className="absolute w-full h-full backface-hidden">
                  <div className={`w-full h-full p-6 rounded-lg shadow-lg flex flex-col items-center justify-center bg-whatWeDo${card}`}>
                    <h2 className="text-xl font-bold mb-4">
                      {index === 0 && 'La nostra missione è quella di...'}
                      {index === 1 && 'Le attività che promuoviamo sono...'}
                      {index === 2 && 'Organizziamo attività di...'}
                      {index === 3 && 'Organizziamo attività culturali...'}
                    </h2>
                    <button
                      onClick={() => handleFlip(index)}
                      className="text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-blue transition duration-300"
                    >
                      Scopri di più
                    </button>
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden transform rotate-y-180">
                  <div className="w-full h-full p-6 rounded-lg shadow-lg flex flex-col items-center justify-center bg-white">
                    <p className="text-gray-800 mb-4">
                      {index === 0 &&
                        'Fare sviluppare un turismo sostenibile, slegato dalle logiche dell’overtourism e del turismo stagionale di massa, che sfrutta fino all’osso le risorse di un territorio rendendolo invivibile per chi ci abita.'}
                      {index === 1 &&
                        'Sempre pensate e costruite non solo per i turisti, ma anche per i locali, per favorire l’incontro e la conoscenza tra culture diverse, per offrire attività a chi viaggia in Sicilia fuori stagione e ai residenti del luogo.'}
                      {index === 2 &&
                        'Scoperta del territorio, delle sue bellezze naturali e culturali, della sua storia e delle sue tradizioni, attività di promozione delle realtà locali, degli usi e costumi, del cibo, tutto grazie alla collaborazione con piccole imprese locali.'}
                      {index === 3 &&
                        'Rassegne, festival, per offrire una vacanza di qualità a chi viene in viaggio qui. Sempre con un occhio al contesto in cui ci troviamo, con un’attenzione massima alla cura e al rispetto del nostro ambiente.'}
                    </p>
                    <button
                      onClick={() => handleFlip(index)}
                      className="text-black border border-black py-2 px-4 rounded hover:bg-black hover:text-black transition duration-300"
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
