import { Link } from '@remix-run/react';
import React, { useEffect, useState } from 'react';

const Tastavino: React.FC = () => {
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
      {
        name: 'Pizzitola',
        description: "La storia della famiglia fonda le sue radici in contrada Zuccari, nel territorio di Monreale. Da quattro generazioni si prendono cura dei loro vigneti, oggi guidati da Giuseppe, giovane enologo, hanno deciso di intraprendere un percorso di valorizzazione delle varietà autoctone siciliane con l’obiettivo di produrre dei vini di territorio.",
        logo: './pizzitola.jpg',
      },
      {
        name: 'Asta',
        description: "L'azienda si trova in Sicilia nel territorio di Partinico, a soli 2 km dal mare, sorge su una collina da cui si ammira il Golfo di Castellammare, da San Vito Lo Capo a Punta Raisi. Producono vini naturali, totalmente artigianali, prodotti in modo sostenibile che limitano fortemente gli interventi dell’uomo nel processo di lavorazione.",
        logo: './asta.jpeg',
      },
  ];


    return (
    <div className="bg-white text-gray-900 min-h-screen">
    <div className="container mx-auto px-4 py-2">
        <div className="text-center mb-8">
            <img src="./eventphoto.jpeg" alt="Event Logo" className="mx-auto h-36 mb-4" />
            <h1 className="text-4xl font-bold text-blue">Le Vie di Scopello presenta la prima edizione di Tastavino!</h1>
            <p className="text-xl my-4 text-blue">
                Due giorni in cui potrete degustare vini di cantine locali, assaggiare prodotti tipici,
                ballare con la nostra musica, e partecipare ad attività per grandi e piccoli.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 justify-items-center">
               
                    <div className="bg-blue-800 text-white rounded-lg py-3 px-6 shadow-md">
                        <div className="text-2xl font-bold text-blue">{timeLeft.days}</div>
                        <div className="text-sm uppercase text-blue">giorni</div>
                    </div>
                    <div className="bg-blue-800 text-white rounded-lg py-3 px-6 shadow-md">
                        <div className="text-2xl font-bold text-blue">{timeLeft.hours}</div>
                        <div className="text-sm uppercase text-blue">ore</div>
                    </div>
                    <div className="bg-blue-800 text-white rounded-lg py-3 px-6 shadow-md">
                        <div className="text-2xl font-bold text-blue">{timeLeft.minutes}</div>
                        <div className="text-sm uppercase text-blue">minuti</div>
                    </div>
                    <div className="bg-blue-800 text-white rounded-lg py-3 px-6 shadow-md">
                        <div className="text-2xl font-bold text-blue">{timeLeft.seconds}</div>
                        <div className="text-sm uppercase text-blue">secondi</div>
                    </div>
            </div>
            <p className="text-lg font-semibold text-blue pb-5">Date e orari:</p>
            <p className="text-lg text-blue pb-2">- 31 maggio 2024 dalle 18 a mezzanotte</p>
            <p className="text-lg text-blue pb-7">- 1 giugno 2024 dalle 18 a mezzanotte</p>
            <Link to="/tickets" className="text-blue px-6 py-3 rounded-full text-xl font-semibold bg-celeste transition-colors block text-center w-full md:w-auto md:inline-block">
              Acquista il tuo biglietto
            </Link>
        </div>
        <div className="py-10">
            <h2 className="text-3xl text-center font-bold mb-8 text-blue">Esplora le cantine</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wineries.map((winery, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full aspect-[4/3] object-cover object-center" src={winery.logo} alt={winery.name} />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold text-blue">{winery.name}</h3>
                            <p className="text-blue mt-2">{winery.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>
        );
}

export default Tastavino;