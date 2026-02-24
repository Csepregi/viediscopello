import React from 'react';

type ProgramProps = {
  activeDay: number;
};

export default function ProgramSchedule({ activeDay }: ProgramProps) {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Schedule Items */}
      <div className="space-y-8">
        {activeDay === 1 ? (
          <>
            {/* Day 1 Events */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="flex items-start p-6">
                <div className="flex-none">
                  <div className="text-orange font-bold text-xl bg-orange/10 px-3 py-1 rounded-md">16:30</div>
                </div>
                <div className="ml-8 border-l-4 border-orange pl-6">
                  <h4 className="text-xl font-bold text-blue">Masterclass: Nero d'Avola, il grande rosso siciliano</h4>
                  <p className="text-blue mt-2">Un viaggio alla scoperta del vitigno simbolo dell'isola, tra intensità ed identità territoriale.</p>
                  <div className="flex items-center mt-2 bg-gray-100 px-3 py-1 rounded-md inline-block">
                    <span className="mr-2 text-blue">👤</span>
                    <p className="font-medium text-blue">Piero Rotolo, giornalista enogastronomico</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="flex items-start p-6">
                <div className="flex-none">
                  <div className="text-orange font-bold text-xl bg-orange/10 px-3 py-1 rounded-md">16:30</div>
                </div>
                <div className="ml-8 border-l-4 border-orange pl-6">
                  <h4 className="text-xl font-bold text-blue">Masterclass sull'olio, l'oro verde della Sicilia</h4>
                  <p className="text-blue mt-2">Una degustazione guidata degli oli extravergine d'oliva per scoprire cosa ci raccontano sulla terra in cui nascono.</p>
                  <div className="flex items-center mt-2 bg-gray-100 px-3 py-1 rounded-md inline-block">
                    <span className="mr-2 text-blue">👤</span>
                    <p className="font-medium text-blue">Dott. Michele Riccobono, Responsabile Organismo di Controllo e Certificazione Oli, IRVO</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="flex items-start p-6">
                <div className="flex-none">
                  <div className="text-orange font-bold text-xl bg-orange/10 px-3 py-1 rounded-md">18:15</div>
                </div>
                <div className="ml-8 border-l-4 border-orange pl-6">
                  <h4 className="text-xl font-bold text-blue">Masterclass: Catarratto, l'anima bianca della Sicilia occidentale</h4>
                  <p className="text-blue mt-2">Degustazione guidata dedicata al Catarratto, anima bianca della Sicilia occidentale, per scoprirne tipicità, versatilità e interpretazioni.</p>
                  <div className="flex items-center mt-2 bg-gray-100 px-3 py-1 rounded-md inline-block">
                    <span className="mr-2 text-blue">👤</span>
                    <p className="font-medium text-blue">Giacomo Alberto Manzo, Enologo, IRVO</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="flex items-start p-6">
                <div className="flex-none">
                  <div className="text-orange font-bold text-xl bg-orange/10 px-3 py-1 rounded-md">19:00</div>
                </div>
                <div className="ml-8 border-l-4 border-orange pl-6">
                  <h4 className="text-xl font-bold text-blue">Inizio Degustazione</h4>
                  <p className="text-blue mt-2">Apertura degli stand di degustazione con tutte le cantine partecipanti.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="flex items-start p-6">
                <div className="flex-none">
                  <div className="text-orange font-bold text-xl bg-orange/10 px-3 py-1 rounded-md">21:30</div>
                </div>
                <div className="ml-8 border-l-4 border-orange pl-6">
                  <h4 className="text-xl font-bold text-blue">Musica dal vivo</h4>
                   <p className="text-blue mt-2">"Claudio Terzo e Ferdinando Moncada", duo acustico</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Day 2 Events */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="flex items-start p-6">
                <div className="flex-none">
                  <div className="text-orange font-bold text-xl bg-orange/10 px-3 py-1 rounded-md">16:30</div>
                </div>
                <div className="ml-8 border-l-4 border-orange pl-6">
                  <h4 className="text-xl font-bold text-blue">Masterclass: Carricante, l'eleganza vulcanica dell'Etna</h4>
                  <p className="text-blue mt-2">Un racconto in verticale del Carricante, tra mineralità, tensione e identità etnea.</p>
                  <div className="flex items-center mt-2 bg-gray-100 px-3 py-1 rounded-md inline-block">
                    <span className="mr-2 text-blue">👤</span>
                    <p className="font-medium text-blue">Giacomo Alberto Manzo, Enologo, IRVO</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="flex items-start p-6">
                <div className="flex-none">
                  <div className="text-orange font-bold text-xl bg-orange/10 px-3 py-1 rounded-md">18:15</div>
                </div>
                <div className="ml-8 border-l-4 border-orange pl-6">
                  <h4 className="text-xl font-bold text-blue">Masterclass: I vini della fascia del sole</h4>
                  <p className="text-blue mt-2">Degustazione alla scoperta del Marsala, dove il calore, la luce e i venti marini modellano vini unici nel loro genere.</p>
                  <div className="flex items-center mt-2 bg-gray-100 px-3 py-1 rounded-md inline-block">
                    <span className="mr-2 text-blue">👤</span>
                    <p className="font-medium text-blue">Giacomo Alberto Manzo, Enologo, IRVO</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="flex items-start p-6">
                <div className="flex-none">
                  <div className="text-orange font-bold text-xl bg-orange/10 px-3 py-1 rounded-md">19:00</div>
                </div>
                <div className="ml-8 border-l-4 border-orange pl-6">
                  <h4 className="text-xl font-bold text-blue">Inizio Degustazione</h4>
                  <p className="text-blue mt-2">Apertura degli stand di degustazione con tutte le cantine partecipanti.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="flex items-start p-6">
                <div className="flex-none">
                  <div className="text-orange font-bold text-xl bg-orange/10 px-3 py-1 rounded-md">20:30</div>
                </div>
                <div className="ml-8 border-l-4 border-orange pl-6">
                  <h4 className="text-xl font-bold text-blue">Musica dal vivo</h4>
                  <p className="text-blue mt-2">"Sulle orme di Django", swing orchestra</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
