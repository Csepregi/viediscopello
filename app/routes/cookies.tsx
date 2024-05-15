import React from 'react';

function Cookies() {
  return (
    <div className="bg-white text-blue py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Cookies Policy</h1>
        <p className="text-justify text-gray-700 mb-4">
          La presente Cookies Policy spiega cosa sono i cookie e come li utilizziamo sul nostro sito web viediscopello.it. Ti consigliamo di leggere attentamente questa policy per comprendere come utilizziamo i cookie e quali sono le tue opzioni riguardo al loro utilizzo.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Cosa sono i cookie?</h2>
        <p className="text-justify text-gray-700 mb-4">
          I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. I cookie possono essere temporanei (cookie di sessione) o permanenti (cookie persistenti). Possono essere utilizzati per vari scopi, tra cui il riconoscimento del dispositivo dell'utente, il tracciamento delle attività di navigazione e il miglioramento dell'esperienza dell'utente.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Come utilizziamo i cookie?</h2>
        <p className="text-justify text-gray-700 mb-4">
          Utilizziamo i cookie per diversi scopi sul sito web di Le Vie di Scopello, tra cui:
          <ul className="list-disc list-inside">
            <li>assicurare il corretto funzionamento del sito web;</li>
            <li>analizzare l'utilizzo del sito web e raccogliere informazioni statistiche per migliorare i nostri servizi;</li>
          </ul>
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Tipi di cookie che utilizziamo</h2>
        <p className="text-justify text-gray-700 mb-4">
          <ul className="list-disc list-inside">
            <li>Cookie essenziali: questi cookie sono necessari per il corretto funzionamento del sito web e non possono essere disabilitati;</li>
            <li>Cookie di analisi: utilizziamo questi cookie per raccogliere informazioni sull'utilizzo del sito web e per generare statistiche anonime sulle attività degli utenti.</li>
          </ul>
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Opzioni di controllo dei cookie</h2>
        <p className="text-justify text-gray-700 mb-4">
          Puoi controllare e/o eliminare i cookie secondo le tue preferenze. Al primo accesso al nostro sito web, ti mostreremo un popup con una spiegazione dei cookie. Appena clicchi su “Accetto”, dai il permesso a noi di usare le categorie di cookie come descritto in questa dichiarazione. Puoi disabilitare i cookie attraverso il tuo browser, ma tieni presente che la disabilitazione dei cookie potrebbe influire sulle funzionalità del sito web e su alcune parti che potrebbero non funzionare correttamente.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Modifiche alla Cookies Policy</h2>
        <p className="text-justify text-gray-700 mb-4">
          Ci riserviamo il diritto di aggiornare o modificare questa Cookies Policy in qualsiasi momento. Ti consigliamo di controllare periodicamente questa pagina per verificare eventuali modifiche.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contatti</h2>
        <p className="text-justify text-gray-700 mb-4">
          Per qualsiasi domanda o richiesta riguardante la nostra Cookies Policy, non esitare a contattarci all'indirizzo email viediscopello@gmail.com.
        </p>
      </div>
    </div>
  );
}

export default Cookies;
