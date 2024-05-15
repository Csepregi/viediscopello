import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export function loader() {
  return json({
    termsTitle: "Termini e condizioni d'uso per l'acquisto dei biglietti per l’evento Tastavano",
    sections: [
      {
        title: "Acquisto dei biglietti",
        content: [
          "Disponibilità dei biglietti: l’acquisto dei biglietti per la degustazione di vini è soggetto a disponibilità e può essere soggetto a limitazioni di capacità. Ti consigliamo di prenotare i biglietti in anticipo per garantire la disponibilità;",
          "Prezzo dei biglietti: il prezzo dei biglietti è indicato in euro e include tutte le tasse applicabili. Tutti i pagamenti sono effettuati tramite piattaforme di pagamento sicure."
        ]
      },
      {
        title: "Condizioni di utilizzo dei biglietti",
        content: [
          "Utilizzo dei biglietti: I biglietti sono validi solo per l'ingresso alla degustazione di vini specificata nella descrizione del biglietto. I biglietti non sono rimborsabili e non sono trasferibili a terzi;",
          "Modifiche agli orari o alle date: ci riserviamo il diritto di apportare modifiche agli orari o alle date della degustazione di vini in caso di circostanze impreviste. In caso di modifiche, faremo del nostro meglio per informarti tempestivamente tramite i dettagli di contatto forniti al momento dell’acquisto dei biglietti."
        ]
      },
      {
        title: "Annullamenti e rimborsi",
        content: [
          "Annullamenti da parte dell’organizzatore: nel caso in cui la degustazione di vini debba essere annullata per cause di forza maggiore, ti verrà offerta la possibilità di ricevere un rimborso completo o di utilizzare il valore del biglietto per un evento futuro;",
          "Annullamenti da parte dell’acquirente: I biglietti non sono rimborsabili in caso di annullamento da parte dell’acquirente."
        ]
      },
      {
        title: "Responsabilità",
        content: [
          "“Le Vie di Scopello” non é responsabile per eventuali danni, perdite o infortuni derivanti dall’uso dei biglietti o dalla partecipazione all’evento."
        ]
      },
      {
        title: "Contatti",
        content: [
          "Per qualsiasi domanda o richiesta riguardante l’acquisto dei biglietti, non esitare a contattarci all’indirizzo email viediscopello@gmail.com."
        ]
      }
    ]
  });
}

// 3. Display terms and conditions using Tailwind CSS for styling
export default function Termini() {
  const { termsTitle, sections } = useLoaderData<typeof loader>();

  return (
    <div className="p-8 bg-white">
      <h1 className="text-2xl text-blue font-bold text-center mb-4">{termsTitle}</h1>
      {sections.map((section: any, index: any) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold text-blue">{section.title}</h2>
          {section.content.map((item: any, idx: any) => (
            <p key={idx} className="text-blue mt-2">{item}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
