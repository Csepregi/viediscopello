import React from 'react';

function Privacy() {
    return (
        <div className="p-8 bg-white">
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue">Informativa sul trattamento dei dati personali</h1>
            <p className="text-justify mb-4 text-blue">
                Ai sensi dell’art. 13 del Regolamento UE 2016/679, Regolamento Generale sulla Protezione dei Dati e del D.Lgs. n.
                196/2003, Codice in materia di protezione dei dati personali
            </p>
            <p className="text-justify mb-4 text-blue">
                La tua privacy è importante per noi. Di seguito, ti forniamo informazioni su come
                raccogliamo, utilizziamo e proteggiamo le tue informazioni personali quando visiti il sito
                web di Le Vie di Scopello ASP (viediscopello.it) con sede legale in Contrada Cala Mazzo di
                Sciacca 43, 91014 Scopello, Italia (d’ora in avanti “Le Vie di Scopello” o “L’Associazione”).
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue">1. Raccolta delle informazioni</h2>
            <p className="text-justify mb-4 text-blue">
                Quando visiti il nostro sito web, potremmo raccogliere le seguenti categorie di informazioni
                personali :
            </p>
            <ul className="list-disc ml-8 mb-4 text-blue">
                <li>Informazioni fornite volontariamente: potremmo raccogliere informazioni che ci
                    fornisci volontariamente tramite moduli di contatto, registrazioni per eventi, iscrizioni
                    alla nostra newsletter o altre interazioni dirette con il nostro sito web. Queste
                    informazioni potrebbero includere:
                    <ul className="list-circle ml-6 mt-2 text-blue">
                        <li>{" - "}dati personali quali nome, cognome, indirizzo o altri dati di contatto, data di nascita;</li>
                        <li className='mb-2'>{" - "}dati connessi o derivanti dalla navigazione sul sito, come gli URL visitati, i tempi di
                            accesso, i dettagli del dispositivo utilizzato per accedere al sito web e altre
                            informazioni di navigazione.</li>
                    </ul>
                </li>
                <li>Per le finalità indicate nella presente informativa, L’Associazione non raccoglie né
                    tratta dati personali qualificati come “categorie particolari” o dati relativi a condanne penali e reati riconducibili
                    all’utente.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue">2. Utilizzo delle informazioni</h2>
            <p className="text-justify mb-4 text-blue">
                Utilizziamo le informazioni raccolte per le seguenti finalità:
            </p>
            <ul className="list-disc ml-8 mb-4 text-blue">
                <li>Per rispondere alle tue richieste e fornirti informazioni sui nostri servizi, eventi e
                    iniziative;</li>
                <li>Per inviarti comunicazioni di marketing, inclusi aggiornamenti, promozioni e
                    newsletter, su base consensuale o nel rispetto della normativa applicabile;</li>
                <li>Per migliorare il nostro sito web e i nostri servizi, analizzando i modelli di utilizzo,
                    raccogliendo informazioni statistiche e valutando l'efficacia delle nostre campagne di
                    marketing;</li>
                <li>Per proteggere i nostri diritti legali e adempiere agli obblighi di legge.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue">3. Protezione delle informazioni</h2>
            <p className="text-justify mb-4 text-blue">
                Ci impegniamo a proteggere le tue informazioni personali e ad adottare misure di
                sicurezza adeguate per prevenire accessi non autorizzati, perdite, uso improprio o
                divulgazione delle tue informazioni personali. Tuttavia, non possiamo garantire la
                sicurezza assoluta dei dati trasferiti tramite Internet.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue">4. Condivisione delle informazioni</h2>
            <p className="text-justify mb-4 text-blue">
                Non condivideremo, venderemo o affitteremo le tue informazioni personali a terze parti
                senza il tuo consenso, tranne nei casi in cui sia richiesto per rispettare la legge o
                proteggere i nostri diritti legali.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue">5. Conservazione delle informazioni</h2>
            <p className="text-justify mb-4 text-blue">
                Conserviamo le tue informazioni personali solo per il tempo necessario per adempiere alle
                finalità per le quali sono state raccolte, o per adempiere ai requisiti legali, contabili o di
                reporting.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue">6. Diritti dell'utente</h2>
            <p className="text-justify mb-4 text-blue">
                Hai il diritto di accedere, correggere, aggiornare o cancellare le tue informazioni personali
                in nostro possesso. Puoi esercitare questi diritti contattandoci utilizzando i dettagli di
                contatto forniti di seguito. Inoltre, hai il diritto di revocare il tuo consenso al trattamento
                delle tue informazioni personali in qualsiasi momento.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue">7. Modifiche all'Informativa sulla Privacy</h2>
            <p className="text-justify mb-4 text-blue">
                Ci riserviamo il diritto di aggiornare o modificare questa Informativa sulla Privacy in
                qualsiasi momento. Ti consigliamo di controllare periodicamente questa pagina per
                verificare eventuali modifiche.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue">8. Contatti</h2>
            <p className="text-justify mb-4 text-blue">
                Per qualsiasi domanda o richiesta riguardante la nostra Informativa sulla Privacy, ti
                ricordiamo che il titolare del trattamento dei dati personali è Le Vie di Scopello ASP, con
                sede legale in Contrada Cala Mazzo di Sciacca 43, 91014 Scopello, Italia. Tutte le istanze
                e richieste relative al trattamento dei dati personali che ti riguardano potranno essere
                indirizzate all'indirizzo email viediscopello@gmail.com.
            </p>
        </div>
        </div>
    );
}

export default Privacy;
