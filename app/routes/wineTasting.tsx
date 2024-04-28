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
      </div>
    </div>
        );
}

export default WineTasting;