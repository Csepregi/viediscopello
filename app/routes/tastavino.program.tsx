import { Link } from "@remix-run/react";
import React, { useState } from "react";

export default function Program() {
  const [selectedDay, setSelectedDay] = useState("venerdi");

  const handleButtonClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <section>
      <div className="bg-white text-blue py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Programma Tastavino</p>
            <p className="text-sm md:text-base italic text-blue mb-4">
          n.b. Durante la degustazione si terrà anche un laboratorio d’intreccio della palma nana per cui sarà possibile prenotarsi a breve
            </p>
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => handleButtonClick("venerdi")}
                className={`bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-blue rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-brown ${
                  selectedDay === "venerdi" ? "bg-celeste text-blue" : ""
                }`}
              >
                Venerdi
              </button>
              <button
                onClick={() => handleButtonClick("sabato")}
                className={`bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-blue rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-brown ${
                  selectedDay === "sabato" ? "bg-celeste text-blue" : ""
                }`}
              >
                Sabato
              </button>
            </div>
            {/* <div className="flex">
            <Link to="/payticket" className="text-blue px-6 py-3 rounded-full text-xl font-semibold bg-orange transition-colors block text-center w-full md:w-auto md:inline-block">
              Acquista il tuo biglietto
            </Link>
            </div> */}
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              {selectedDay === "venerdi" && (
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="absolute h-full border border-orange rounded-md right-1/2"></div>
                  <div className="absolute h-full border border-orange rounded-md left-1/2"></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-orange">ore 9.30 </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">E-bike tour</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Guida: Leonardo Vasile
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Partenza: baglio di Scopello
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Dislivello massimo: 400 metri
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Facilità: media
                      </p>
                      <p className="text-sm md:text-base italic leading-snug text-gray-700">
                      E’ necessaria la prenotazione
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-orange">ore 17.00 </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Hiking al tramonto</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Guida: Leonardo Vasile
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Partenza: baglio di Scopello
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Dislivello massimo: 400 metri
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Facilità: media
                      </p>
                      <p className="text-sm italic md:text-base leading-snug text-gray-700">
                      E’ necessaria la prenotazione
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-orange">ore 16.45 </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Yoga dinamico a Scopello</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                       Istruttrice: Alice Palermo
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Durata: 1 ora circa 
                      </p>
                      <p className="text-sm italic md:text-base leading-snug text-gray-700">
                      E’ necessaria la prenotazione a questo <Link className="underline text-blue hover:text-celeste"  to="https://docs.google.com/forms/d/1SFm2utQUN8OaOWcNtbVXNjzsJ3xs89dpXrsdJ5nKHiw" target="_blank">link</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-orange">ore 18.00</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Laboratorio di lettura creativa per bambini (età 3+)</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Condotto da: Haramundi
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Turni: 18.00-19.00 e 19.00-20.00
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Età: 3-5 anni e dai 6 anni in su
                      </p>
                      <p className="text-sm italic md:text-base leading-snug text-gray-700">
                      E’ necessaria la prenotazione a questo <Link className="underline text-blue hover:text-celeste"  to='https://docs.google.com/forms/d/1nGfFhKIlptBT-ilgjdo4nDjzrDy1Ckbo5RugH1BxjPE' target="_blank">link</Link>
                      </p>
                    </div>
                  </div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-orange">ore 18.00</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Masterclass: “impariamo a degustare il vino”</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                        Condotto da: Piero Rotolo, esperto di vino e giornalista enogastronomico
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Durata: 1 ora
                      </p>
                      <p className="text-sm italic md:text-base leading-snug text-gray-700">
                      E’ necessaria la prenotazione e l'acquisto dei biglietti
                      </p>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-orange">ore 18.00</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Inizio degustazione</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      dj set di Cumbia a cura di Vito Raspanti
                      </p>
                    </div>
                  </div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-orange">ore 20.00</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Live band e contradanza</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      con Totò Fundarò e Daniele Collura
                      </p>
                    </div>
                </div>
              )}
              {selectedDay === "sabato" && (
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="absolute h-full border border-yellow-300 rounded-md right-1/2"></div>
                  <div className="absolute h-full border border-yellow-300 rounded-md left-1/2"></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-orange">ore 10.00</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Yoga del risveglio a Scopello</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Istruttrice: Alice Palermo
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Durata: 1 ora circa
                      </p>
                      <p className="text-sm italic md:text-base leading-snug text-gray-700">
                      E’ necessaria la prenotazione a questo <Link className="underline text-blue hover:text-celeste"  to="https://docs.google.com/forms/d/1SFm2utQUN8OaOWcNtbVXNjzsJ3xs89dpXrsdJ5nKHiw" target="_blank">link</Link>
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-orange">ore 18.00</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Laboratorio di lettura creativa per bambini (età 3+)</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Condotto da: Haramundi
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Turni: 18.00-19.00 e 19.00-20.00
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Età: 3-5 anni e dai 6 anni in su
                      </p>
                      <p className="text-sm italic md:text-base leading-snug text-gray-700">
                      E’ necessaria la prenotazione a questo <Link className="underline text-blue hover:text-celeste" to='https://docs.google.com/forms/d/1nGfFhKIlptBT-ilgjdo4nDjzrDy1Ckbo5RugH1BxjPE' target="_blank">link</Link>
                      </p>
                    </div>
                  </div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-orange">ore 18.00</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Masterclass: “impariamo a degustare il vino”</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                        Condotto da: Piero Rotolo, esperto di vino e giornalista enogastronomico
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      Durata: 1 ora
                      </p>
                      <p className="text-sm italic md:text-base leading-snug text-gray-700">
                      E’ necessaria la prenotazione e l'acquisto dei biglietti
                      </p>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-orange">ore 18.00</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Inizio degustazione</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      dj set di Cumbia a cura di Vito Raspanti
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-orange">ore 19.30</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">“Il tocco - gioco diVino”</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                      un racconto scritto e narrato da Daniele Billitteri
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-orange">ore 21.00</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Live band con i Babel Tower</h4>
                    </div>
                  </div>
                </div>
              )}
               <div className="flex justify-center mt-3">
                  <img
                    className="mx-auto"
                    alt="program"
                    src="./../tasta.png"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
