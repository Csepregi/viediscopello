import React from "react";
import { useNavigate } from "react-router";

export default function TerminiECondizioni() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/payticket');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-blue p-4">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <button
         // onClick={handleBackClick}
          className="absolute top-4 left-4 text-blue-500 hover:text-blue-700"
          aria-label="Go back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7 7-7"
            />
          </svg>
        </button>

        <h2 className="text-center text-blue-500 font-bold mb-4">Termini e condizioni d'uso per l'acquisto dei biglietti per l’evento Tastavino</h2>
        <p className="text-blue-500 mb-4">
          Prima di procedere all'acquisto dei biglietti, ti preghiamo di leggere attentamente i seguenti Termini e Condizioni d'Uso ("Termini").
        </p>
        <h3 className="text-blue-500 font-semibold">1. Acquisto dei biglietti</h3>
        <p className="text-blue-500 mb-2">
          Disponibilità dei biglietti: l'acquisto dei biglietti per la degustazione di vini è soggetto a disponibilità e può essere soggetto a limitazioni di capacità. Ti consigliamo di prenotare i biglietti in anticipo per garantire la disponibilità;
        </p>
        <p className="text-blue-500 mb-4">
          Prezzo dei biglietti: il prezzo dei biglietti è indicato in euro e include tutte le tasse applicabili. Tutti i pagamenti sono effettuati tramite piattaforme di pagamento sicure.
        </p>
        <h3 className="text-blue-500 font-semibold">2. Condizioni di utilizzo dei biglietti</h3>
        <p className="text-blue-500 mb-2">
          Utilizzo dei biglietti: I biglietti sono validi solo per l'ingresso alla degustazione di vini specificata nella descrizione del biglietto. I biglietti non sono rimborsabili e non sono trasferibili a terzi;
        </p>
        <p className="text-blue-500 mb-4">
          Modifiche agli orari o alle date: ci riserviamo il diritto di apportare modifiche agli orari o alle date della degustazione di vini in caso di circostanze impreviste. In caso di modifiche, faremo del nostro meglio per informarti tempestivamente tramite i dettagli di contatto forniti al momento dell'acquisto dei biglietti.
        </p>
        <h3 className="text-blue-500 font-semibold">3. Annullamenti e rimborsi</h3>
        <p className="text-blue-500 mb-2">
          Annullamenti da parte dell'organizzatore: nel caso in cui la degustazione di vini debba essere annullata per cause di forza maggiore, ti verrà offerta la possibilità di ricevere un rimborso completo o di utilizzare il valore del biglietto per un evento futuro;
        </p>
        <p className="text-blue-500 mb-4">
          Annullamenti da parte dell'acquirente: I biglietti non sono rimborsabili in caso di annullamento da parte dell'acquirente.
        </p>
        <h3 className="text-blue-500 font-semibold">4. Responsabilità</h3>
        <p className="text-blue-500 mb-4">
          “Le Vie di Scopello” non é responsabile per eventuali danni, perdite o infortuni derivanti dall'uso dei biglietti o dalla partecipazione all’evento.
        </p>
        <h3 className="text-blue-500 font-semibold">5. Contatti</h3>
        <p className="text-blue-500">
          Per qualsiasi domanda o richiesta riguardante l'acquisto dei biglietti, non esitare a contattarci all'indirizzo email <a href="mailto:viediscopello@gmail.com" className="underline">viediscopello@gmail.com</a>.
        </p>

        <button
          onClick={handleBackClick}
          className="absolute bottom-1  right-4 text-blue-500 hover:text-blue-700"
          aria-label="Go back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
