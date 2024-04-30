import React, { useEffect, useState } from 'react';

const WineTasting: React.FC = () => {
    const targetDate = new Date('2024-05-31T00:00:00');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const wineries = [
      {
        name: 'Di Legami',
        description: 'Immersa nelle morbide colline dell’agro trapanese, Di Legami custodisce una tradizione di passione e dedizione per il vino. Con circa 100 ettari a contrada Berlinghieri, questa cantina celebra la natura e il suo legame con il territorio.',
        logo: './legami.jpeg'
      },
      {
        name: 'Maenza',
        description: 'Direttamente dai vigneti di famiglia a Camporeale, Maenza è sinonimo di qualità e tipicità. La filosofia aziendale, che non ammette compromessi, garantisce che ogni bottiglia preservi l\'identità autentica delle uve locali.',
        logo: './maenza.jpeg'
      },
      {
        name: 'Liberamente Vini',
        description: "Sulle pittoresche colline di Castellammare del Golfo, la famiglia di Liberamente Vini coltiva la vite con amore e dedizione generazionale. Ogni bottiglia riflette l'impegno e la passione di chi lavora la terra con cura quotidiana, offrendo un vino che racconta di sole, terra e tradizione familiare.",
        logo: './liberamente.jpeg'
      },
      {
        name: 'Magaddino',
        description: 'Da generazioni, la famiglia Magaddino coltiva viti tra Segesta e il Castello di Inici, a Castellammare del Golfo. Con passione e dedizione, producono vini che celebrano ogni momento della giornata, raccontando una storia di famiglia e di amore per la viticoltura.',
        logo: './magaddino.jpeg'
      },
      {
        name: 'Mustazza',
        description: "Forte di una tradizione che affonda le radici nelle colline dell’agro Ericino, Mustazza esprime nel suo vino l'amore, la passione e la forza di generazioni. Questa azienda vitivinicola continua a valorizzare le proprie uve con pratiche che rispettano la natura e la storia locale.",
        logo: './mustazza.jpeg'
      },
      {
        name: 'Candido',
        description: "Situata vicino a Camporeale, Candido gestisce venti ettari di vigneti nel cuore dell'Agro di Camporeale e Monreale. Con un impegno verso la coltivazione biologica, questa famiglia produce varietà di vini rossi e bianchi, preservando l'autenticità dei profumi e dei sapori tradizionali siciliani.",
        logo: './candido.jpeg',
      },
      {
        name: 'Brugnano',
        description: "I fratelli Brugnano portano avanti una tradizione vinicola familiare da cinquant'anni con una nuova visione contemporanea. Orgogliosi delle radici, coltivano vigne nel rispetto della natura, producendo vini autentici fedeli al territorio. Con passione e dedizione, comunicano la propria unicità mantenendo alti standard di qualità e innovazione.",
        logo: './brugnano.jpeg',
      },
      {
        name: 'Essensily',
        description: "Francesco, viaggiatore del mondo con radici profonde nei vigneti e negli uliveti di famiglia, fonda Essensily. Un marchio che celebra l'essenza pura dei suoi vini e oli siciliani di alta qualità, unendo il gusto autentico della Sicilia con un tocco moderno e seducente.",
        logo: './essensily.jpeg',
      },
  ];


    return (
        <div className="bg-white">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full px-5 md:w-auto">
                     <div className="flex justify-center text-center text-blue">
                         <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-orange bg-light-100 md:py-4">
                             <div className="text-2xl font-semibold md:text-3xl">
                            <span>{String(timeLeft.days).padStart(2, '0')}</span> 
                             </div>
                             <div className="mt-3 text-xs uppercase opacity-75">
                                 Giorni
                             </div>
                         </div>
                         <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-orange bg-light-100 md:py-4">
                             <div className="text-2xl font-semibold md:text-3xl">
                               
                                 <span>{String(timeLeft.hours).padStart(2, '0')}</span> 
                                
                             </div>
                             <div className="mt-3 text-xs uppercase opacity-75 ">
                                 Ore
                             </div>
                         </div>
                         <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-orange bg-light-100 md:py-4">
                             <div className="text-2xl font-semibold md:text-3xl">
                             <span>{String(timeLeft.minutes).padStart(2, '0')}</span> 
                             </div>
                             <div className="mt-3 text-xs uppercase opacity-75 ">
                                 Minuti
                             </div>
                         </div>
                         <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-orange bg-light-100 md:py-4">
                             <div className="text-2xl font-semibold md:text-3xl">
                             <span>{String(timeLeft.seconds).padStart(2, '0')}</span> 
                             </div>
                             <div className="mt-3 text-xs uppercase opacity-75 ">
                                 Secondi
                             </div>
                         </div>
                     </div>
                 </div>
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#A4D3C0" />
                <stop offset={1} stopColor="#1E294D" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-blue  sm:text-4xl">
            Le Vie di Scopello
              <br />
              presenta la prima edizione di Tastavino!
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue">
            Due giorni in cui potrete degustare vini di cantine locali, assaggiare prodotti tipici, ballare con la nostra musica, e partecipare ad attività per grandi e piccoli.
            </p>
            <p className="mt-6 text-lg leading-8 text-blue">
            Date e orari:
            </p>
            <p className="mt-6 text-lg leading-8 text-blue">
            - 31 maggio 2024 dalle 18 a mezzanotte
            <br />
            - 1 giugno 2024 dalle 18 a mezzanotte
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <p className="mt-6 text-lg leading-8 text-blue">
            Stay tuned per conoscere tutto il programma e per prenotare online il vostro ticket.
            </p>
            </div>
          </div>
          
          <div className="relative mt-16 sm:h-80 lg:mt-8">
            <img
              className="w-full object-contain rounded-md bg-white/5 ring-1 ring-white/10"
              src="./baglio.jpeg"
              alt="App screenshot"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
        <div className="px-4 py-12 mx-auto max-w-7xl">
                <h2 className="text-3xl font-bold text-center text-blue">Esplora le Cantine</h2>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {wineries.map((winery, index) => (
                        <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <img className="w-full aspect-[4/3] object-cover object-center" src={`${winery.logo}`} alt={winery.name} />
                            </div>
                            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                <div className="flex-1">
                                    <p className="text-xl font-semibold text-blue">{winery.name}</p>
                                    <p className="mt-3 text-base text-blue">{winery.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </div>
    </div>
        );
}

export default WineTasting;