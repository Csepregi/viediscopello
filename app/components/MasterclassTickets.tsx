import React, { useState } from 'react';
import { Link } from "react-router";

type Ticket = {
  id: string;
  title: string;
  price: number;
  date: string;
  time: string;
  description: string;
  instructor: string;
  type: 'masterclass' | 'combo' | 'degustazione' | 'fullWeekend';
  paymentLink: string; // Direct Stripe payment link
};

// Update ticket data to include direct Stripe payment links
const tickets: Ticket[] = [
  {
    id: 'catarratto',
    title: "Masterclass: Catarratto, l'anima bianca della Sicilia occidentale",
    price: 20,
    date: "domenica 1 giugno",
    time: "ore 18.15",
    description: "Degustazione guidata dedicata al Catarratto, anima bianca della Sicilia occidentale, per scoprirne tipicità, versatilità e interpretazioni",
    instructor: "Giacomo Alberto Manzo, Enologo, IRVO",
    type: 'masterclass',
    paymentLink: "https://buy.stripe.com/28o6s66PYb4qc9y6or"
  },
  {
    id: 'olio',
    title: "Masterclass sull'olio, l'oro verde della Sicilia",
    price: 15,
    date: "domenica 1 giugno",
    time: "ore 16.30",
    description: "Una degustazione guidata degli oli extravergine d'oliva per scoprire cosa ci raccontano sulla terra in cui nascono",
    instructor: "dott. Michele Riccobono, Responsabile Organismo di Controllo e Certificazione Oli, IRVO",
    type: 'masterclass',
    paymentLink: "https://buy.stripe.com/eVa5o22zI8Wi7Ti005" 
  },
  {
    id: 'carricante',
    title: "Masterclass: Carricante, l'eleganza vulcanica dell'Etna",
    price: 20,
    date: "lunedì 2 giugno",
    time: "ore 16.30",
    description: "Un racconto in verticale del Carricante, tra mineralità, tensione e identità etnea",
    instructor: "Giacomo Alberto Manzo, Enologo, IRVO",
    type: 'masterclass',
    paymentLink: "https://buy.stripe.com/28o03I4HQ1tQ7Ti4go" 
  },
  {
    id: 'vini-fascia-sole',
    title: "Masterclass: I vini della fascia del sole",
    price: 20,
    date: "lunedì 2 giugno",
    time: "ore 18.15",
    description: "Degustazione alla scoperta dei vini dolci e fortificati di Marsala, dove il calore, la luce e i venti marini modellano vini unici nel loro genere",
    instructor: "Giacomo Alberto Manzo, Enologo, IRVO",
    type: 'masterclass',
    paymentLink: "https://buy.stripe.com/bIYcQub6ea0m2yY14b" 
  },
  {
    id: 'nero-d-avola',
    title: "Masterclass: Nero d'Avola, il grande rosso siciliano",
    price: 20,
    date: "domenica 1 giugno",
    time: "ore 16.30",
    description: "Un viaggio alla scoperta del vitigno simbolo dell'isola, tra intensità ed identità territoriale.",
    instructor: "Piero Rotolo, giornalista enogastronomico",
    type: 'masterclass',
    paymentLink: "https://buy.stripe.com/6oU8wQ6ZH4bO5MnaO47Re09" 
  },
  {
    id: 'combo-olio',
    title: "Degustazione + Masterclass sull'olio",
    price: 27,
    date: "domenica 1 giugno",
    time: "ore 16.30",
    description: "Ingresso alla degustazione dalle ore 19 + Partecipazione alla Masterclass sull'olio (domenica 1 giugno, ore 16.30)",
    instructor: "",
    type: 'combo',
    paymentLink: "https://buy.stripe.com/6oE2bQgqyc8u5La6ou" 
  },
  {
    id: 'combo-vino',
    title: "Degustazione + Masterclass sul vino",
    price: 32,
    date: "",
    time: "",
    description: "Ingresso alla degustazione dalle ore 19 + Partecipazione a una delle Masterclass sul vino a scelta (indicare la preferenza allo step successivo)",
    instructor: "",
    type: 'combo',
    paymentLink: "https://buy.stripe.com/dR617M0rA7SeflKcMQ" 
  },
  {
    id: 'degustazione',
    title: "Ingresso Degustazione",
    price: 17,
    time: "ore 19",
    date: "domenica 1 giugno",
    description: "+3 euro di cauzione per il calice di degustazione, da pagare all'ingresso in contanti",
    instructor: "",
    type: 'degustazione',
    paymentLink: "https://buy.stripe.com/00w8wQ6ZH6jW4Ij09q7Re0b" 
  },
  {
    id: 'fullWeekend',
    title: "Weekend Completo: 4 Masterclass, 2 giorni di degustazioni",
    price: 90,
    date: "1-2 giugno",
    time: "vari orari",
    description: "Pacchetto completo che include 4 Masterclass (con possibilità di scegliere tra Olio o Nero d'Avola per domenica alle 16.30) e accesso alle degustazioni per entrambi i giorni dell'evento",
    instructor: "Vari esperti, incluso Giacomo Alberto Manzo, Enologo IRVO",
    type: 'fullWeekend',
    paymentLink: "https://buy.stripe.com/7sY4gA97PcIkfmX1du7Re0a"
  },
];

export default function MasterclassTickets() {
  const [activeDay, setActiveDay] = useState<number>(1); // 1 for Sunday, 2 for Monday
  
  // Sort masterclass tickets by time (convert "ore XX.XX" to minutes for sorting)
  const getTimeInMinutes = (timeString: string) => {
    const match = timeString.match(/ore (\d+)\.(\d+)/);
    if (match) {
      const hours = parseInt(match[1]);
      const minutes = parseInt(match[2]);
      return hours * 60 + minutes;
    }
    return 0; // Default if format doesn't match
  };
  
  // Filter and sort masterclass tickets by day and time
  const sundayMasterclasses = tickets
    .filter(ticket => ticket.type === 'masterclass' && ticket.date.includes('domenica'))
    .sort((a, b) => getTimeInMinutes(a.time) - getTimeInMinutes(b.time));
  
  const mondayMasterclasses = tickets
    .filter(ticket => ticket.type === 'masterclass' && ticket.date.includes('lunedì'))
    .sort((a, b) => getTimeInMinutes(a.time) - getTimeInMinutes(b.time));
  
  return (
    <div className="space-y-12">
      {/* Masterclass Section */}
      <div className="relative">
        <h3 className="text-2xl font-bold text-blue mb-6">Masterclass</h3>
        <div className="absolute top-0 right-0">
          <span className="inline-block bg-orange/10 text-orange text-xs font-medium px-2 py-1 rounded-full">
            Esperienza Premium
          </span>
        </div>
      </div>
      
      {/* Day Tabs */}
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-8">
        <div className="flex">
          <button 
            className={`flex-1 py-3 px-4 text-center font-medium ${activeDay === 1 ? 'bg-blue text-white' : 'text-blue'}`}
            onClick={() => setActiveDay(1)}
          >
            Domenica 1 Giugno
          </button>
          <button 
            className={`flex-1 py-3 px-4 text-center font-medium ${activeDay === 2 ? 'bg-blue text-white' : 'text-blue'}`}
            onClick={() => setActiveDay(2)}
          >
            Lunedì 2 Giugno
          </button>
        </div>
      </div>
      
      {/* Masterclass tickets for the selected day */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {activeDay === 1 
          ? sundayMasterclasses.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)
          : mondayMasterclasses.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)
        }
      </div>
      
      {/* Full Weekend Package - Now Second Section with highlight */}
      <div className="relative py-2 px-4 -mx-4 bg-gradient-to-r from-blue/5 to-orange/5 rounded-lg mb-8">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange text-white text-xs font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap">
          OFFERTA MIGLIORE
        </div>
        <h3 className="text-2xl font-bold text-blue mb-6 mt-4 text-center">Pacchetto Weekend Completo</h3>
        <p className="text-center text-blue/80 text-sm mb-6">Accesso a tutte le masterclass per <span className="font-bold">entrambi i giorni</span> dell'evento</p>
        <div className="max-w-3xl mx-auto">
          {tickets.filter(ticket => ticket.type === 'fullWeekend').map((ticket) => (
            <FullWeekendTicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
      
      {/* Combo Section */}
      <div className="relative">
        <h3 className="text-2xl font-bold text-blue mb-6">Biglietto Combo</h3>
        <p className="text-blue/80 text-sm mb-6">Accesso a una masterclass + degustazione per <span className="font-bold">un giorno</span> dell'evento</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {tickets.filter(ticket => ticket.type === 'combo').map((ticket) => (
            <ComboTicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
      
      {/* Degustazione Section - Now Last */}
      <h3 className="text-2xl font-bold text-blue mb-6">Solo Degustazione</h3>
      <div className="max-w-md mx-auto">
        {tickets.filter(ticket => ticket.type === 'degustazione').map((ticket) => (
          <DegustationTicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

function TicketCard({ ticket }: { ticket: Ticket }) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded);
  };
  
  // Determine which icon to show based on ticket ID
  const isOilMasterclass = ticket.id.includes('olio');
  const isSoldOut = ticket.id === 'catarratto' || ticket.id === 'olio' || ticket.id === 'combo-olio';
  
  return (
    <div className="relative rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Background image with blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/masterclassTicket.JPG" 
          alt="Masterclass background" 
          className="w-full h-full object-cover object-center"
          style={{ filter: 'blur(3px)', transform: 'scale(1.05)' }}
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex">
          {/* Left side with icon instead of date */}
          <div className="w-24 bg-orange/20 backdrop-blur-sm flex flex-col items-center justify-center p-4 border-r border-dashed border-gray-300">
            <div className="text-3xl">{isOilMasterclass ? '🫒' : '🍷'}</div>
            <div className="text-xs text-blue/70 mt-1">{ticket.date}</div>
          </div>
          
          {/* Right side with details */}
          <div className="flex-1 p-4 bg-white/50 backdrop-blur-sm">
            <h4 className="font-bold text-lg text-blue">{ticket.title}</h4>
            
            {/* Time with more prominence */}
            <div className="flex items-center mt-3 bg-orange/10 p-2 rounded-md border-l-2 border-orange">
              <svg className="w-5 h-5 mr-2 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-blue">{ticket.time}</span>
            </div>
            
            <div className="flex items-center mt-2 text-blue/80">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">Parco Rupestre di Scopello (Baglio Isonzo)</span>
            </div>
          </div>
          
          {/* Price or Sold Out */}
          {isSoldOut ? (
            <div className="w-20 flex flex-col items-center justify-center p-4 bg-blue/10">
              <div className="transform -rotate-12">
                <div className="bg-blue text-white text-xs font-bold py-1.5 px-3 rounded-full shadow-md">
                  SOLD OUT
                </div>
              </div>
            </div>
          ) : (
            <div className="w-20 flex flex-col items-center justify-center p-4 bg-gray-50">
              <div className="text-xl font-bold text-blue">€{ticket.price}</div>
              <Link 
                to={ticket.paymentLink}
                className="mt-2 text-center bg-blue text-white text-xs font-medium py-1 px-3 rounded hover:bg-blue/90 transition"
              >
                Acquista
              </Link>
            </div>
          )}
        </div>
        
        {/* Expandable section */}
        <div>
          <button 
            className="w-full px-4 py-2 flex justify-between items-center cursor-pointer bg-white/70 backdrop-blur-sm border-t border-gray-200"
            onClick={toggleExpand}
          >
            <p className="text-blue/90 text-sm font-medium">Dettagli</p>
            <span className="text-blue/80 hover:text-blue transition-colors">
              <svg 
                className={`w-5 h-5 transform transition-transform ${expanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          
          {expanded && (
            <div className="p-4 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
              <p className="text-blue/90 text-sm mb-4">{ticket.description}</p>
              
              {ticket.instructor && (
                <div className="flex items-start">
                  <span className="text-orange/80 mr-2">👤</span>
                  <p className="text-sm text-blue/80"><span className="font-medium">Conduce:</span> {ticket.instructor}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ComboTicketCard({ ticket }: { ticket: Ticket }) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded);
  };
  
  // Determine which icon to show based on ticket ID
  const isOilCombo = ticket.id.includes('olio');
  const isSoldOut = ticket.id === 'combo-olio';
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="flex">
        {/* Left side with icon */}
        <div className="w-full md:w-24 bg-blue/10 flex flex-col items-center justify-center p-4 md:border-r border-dashed border-gray-200">
          <div className="text-3xl">{isOilCombo ? '🍷+🫒' : '🍷+🍷'}</div>
          <div className="text-sm text-blue/70 mt-1 font-medium">Combo</div>
          <div className="text-xs bg-orange/20 text-orange px-3 py-1.5 rounded-full mt-2 font-bold shadow-md">
            1 GIORNO
          </div>
          {ticket.date && <div className="text-xs text-blue/70 mt-1">{ticket.date}</div>}
        </div>
        
        {/* Middle with details */}
        <div className="flex-1 p-4">
          <h4 className="font-bold text-lg text-blue">{ticket.title}</h4>
          
          {ticket.time ? (
            <div className="flex items-center mt-3 bg-blue/10 p-2 rounded-md border-l-2 border-blue">
              <svg className="w-5 h-5 mr-2 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-blue">{ticket.time}</span>
            </div>
          ) : null}
          
          <div className="flex items-center mt-2 text-blue/80">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">Parco Rupestre di Scopello (Baglio Isonzo)</span>
          </div>
        </div>
        
        {/* Price or Sold Out */}
        {isSoldOut ? (
          <div className="w-20 flex flex-col items-center justify-center p-4 bg-blue/10">
            <div className="transform -rotate-12">
              <div className="bg-blue text-white text-xs font-bold py-1.5 px-3 rounded-full shadow-md">
                SOLD OUT
              </div>
            </div>
          </div>
        ) : (
          <div className="w-20 flex flex-col items-center justify-center p-4 bg-gray-50">
            <div className="text-xl font-bold text-blue">€{ticket.price}</div>
            <Link 
              to={ticket.paymentLink}
              className="mt-2 text-center bg-blue text-white text-xs font-medium py-1 px-3 rounded hover:bg-blue/90 transition"
            >
              Acquista
            </Link>
          </div>
        )}
      </div>
      
      {/* Expandable section */}
      <div>
        <button 
          className="w-full px-4 py-2 flex justify-between items-center cursor-pointer bg-gray-50 border-t border-gray-200"
          onClick={toggleExpand}
        >
          <p className="text-blue/90 text-sm font-medium">Dettagli</p>
          <span className="text-blue/80 hover:text-blue transition-colors">
            <svg 
              className={`w-5 h-5 transform transition-transform ${expanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        
        {expanded && (
          <div className="p-4 border-t border-gray-200">
            <p className="text-blue/90 text-sm mb-4">{ticket.description}</p>
            <p className="text-sm text-blue/80 italic">+3 euro di cauzione per il calice, da pagare all'ingresso in contanti</p>
          </div>
        )}
      </div>
    </div>
  );
}

function DegustationTicketCard({ ticket }: { ticket: Ticket }) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="flex">
        {/* Left side with baglio image */}
        <div className="w-24 bg-celeste/10 flex flex-col items-center justify-center p-4 border-r border-dashed border-gray-200">
          <div className="text-3xl flex items-center">🍷<span className="text-sm font-medium ml-1 text-blue">×6</span></div>
          <div className="text-sm text-blue/70 mt-1">Degustazione</div>
        </div>
        
        {/* Right side with details */}
        <div className="flex-1 p-4">
          <h4 className="font-bold text-lg text-blue">{ticket.title}</h4>
          
          {ticket.time && (
            <div className="flex items-center mt-3 bg-celeste/10 p-2 rounded-md border-l-2 border-celeste">
              <svg className="w-5 h-5 mr-2 text-celeste" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-blue">{ticket.time}</span>
            </div>
          )}
          
          <div className="flex items-center mt-2 text-blue/80">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">Piazza Nettuno, Scopello</span>
          </div>
        </div>
        
        {/* Price */}
        <div className="w-20 flex flex-col items-center justify-center p-4 bg-gray-50">
          <div className="text-xl font-bold text-celeste">€{ticket.price}</div>
          <Link 
            to={ticket.paymentLink}
            className="mt-2 text-center bg-celeste text-white text-xs font-medium py-1 px-3 rounded hover:bg-celeste/90 transition"
          >
            Acquista
          </Link>
        </div>
      </div>
      
      {/* Expandable section */}
      <div>
        <button 
          className="w-full px-4 py-2 flex justify-between items-center cursor-pointer bg-gray-50 border-t border-gray-200"
          onClick={toggleExpand}
        >
          <p className="text-blue/90 text-sm font-medium">Dettagli</p>
          <span className="text-celeste/80 hover:text-celeste transition-colors">
            <svg 
              className={`w-5 h-5 transform transition-transform ${expanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        
        {expanded && (
          <div className="p-4 border-t border-gray-200">
            <p className="text-blue/90 text-sm mb-3">Il biglietto include:</p>
            <ul className="text-sm text-blue/80 space-y-2 mb-3">
              <li className="flex items-start">
                <span className="text-celeste mr-2">•</span>
                <span>6 calici di vino delle cantine partecipanti</span>
              </li>
            </ul>
            <p className="text-sm text-blue/80 italic">{ticket.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function FullWeekendTicketCard({ ticket }: { ticket: Ticket }) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded);
  };
  
  return (
    <div className="bg-gradient-to-r from-blue/5 to-orange/5 rounded-lg shadow-lg overflow-hidden border border-gray-200 relative">
      <div className="flex flex-col md:flex-row">
        {/* Left side with icon */}
        <div className="w-full md:w-32 bg-gradient-to-br from-blue/20 to-orange/20 backdrop-blur-sm flex flex-col items-center justify-center p-6 md:border-r border-dashed border-gray-300">
          <div className="text-4xl flex flex-col items-center justify-center">
            <div className="flex space-x-2 mb-2">
              <span>🍷</span>
              <span>🫒</span>
            </div>
            <div className="flex space-x-2 items-center">
              <span>🎷</span>
              <span className="text-xs bg-orange/30 text-orange px-3 py-1.5 rounded-full font-bold shadow-md">
                2 GIORNI
              </span>
            </div>
          </div>
          <div className="text-sm text-blue/70 mt-3 font-medium text-center">Weekend Completo</div>
          <div className="text-xs text-blue/70 mt-1 text-center">{ticket.date}</div>
        </div>
        
        {/* Middle with details */}
        <div className="flex-1 p-6">
          <div className="inline-block bg-blue/10 text-blue text-xs font-medium px-2 py-1 rounded-full mb-2">
            PACCHETTO ESCLUSIVO
          </div>
          <h4 className="font-bold text-xl text-blue">{ticket.title}</h4>
          
          {/* Features list */}
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-blue/80"><strong>4 Masterclass</strong> (2 per giorno)</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-blue/80"><strong>Accesso alle degustazioni</strong> per entrambi i giorni</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-blue/80">Calice di degustazione incluso (senza cauzione)</span>
            </li>
          </ul>
        </div>
        
        {/* Right side with price */}
        <div className="w-full md:w-40 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue/10 to-orange/10 backdrop-blur-sm">
          <div className="text-2xl font-bold text-blue">€{ticket.price}</div>
          <div className="text-sm text-blue/60 line-through mb-2">€110</div>
          <div className="text-xs bg-orange/20 text-orange font-medium px-2 py-1 rounded-full mb-3">
            Risparmi €20
          </div>
          <Link 
            to={ticket.paymentLink}
            className="w-full text-center bg-orange text-white font-medium py-3 px-4 rounded-lg hover:bg-orange/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:shadow-md focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2"
          >
            Acquista Ora
          </Link>
        </div>
      </div>
      
      {/* Expandable section */}
      <div>
        <button 
          className="w-full px-4 py-3 flex justify-between items-center cursor-pointer bg-gradient-to-r from-blue/5 to-orange/5 border-t border-gray-200"
          onClick={toggleExpand}
        >
          <p className="text-blue/90 text-sm font-medium">Dettagli completi</p>
          <span className="text-blue/80 hover:text-blue transition-colors">
            <svg 
              className={`w-5 h-5 transform transition-transform ${expanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        
        {expanded && (
          <div className="p-6 border-t border-gray-200 bg-white/90 backdrop-blur-sm">
            <p className="text-blue/90 text-sm mb-4">{ticket.description}</p>
            
            <div className="bg-blue/5 p-4 rounded-lg mb-4">
              <h5 className="font-medium text-blue mb-2">Programma Masterclass:</h5>
              <ul className="space-y-2 text-sm text-blue/80">
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  <span><strong>Domenica 1 giugno, ore 16.30:</strong> Masterclass sul Nero d'Avola</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  <span><strong>Domenica 1 giugno, ore 18.15:</strong> Masterclass sul Catarratto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  <span><strong>Lunedì 2 giugno, ore 16.30:</strong> Masterclass sul Carricante</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  <span><strong>Lunedì 2 giugno, ore 18.15:</strong> Masterclass sui vini della fascia del sole</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
