import React from "react";

export default function ChiSiamo() {
    return (  
      <div className="py-16 bg-blue h-auto">
        <div className="container m-auto px-6">

        <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 lg:p-0 p-7">
                <h1 className="text-4xl font-bold leading-tight mb-5 capitalize" id='scrollView'> “Le Vie di Scopello” </h1>
                <p className="text-xl"> è un’associazione di promozione sociale fondata alla fine del 2023 
                con lo scopo di promuovere eventi ed attività nel territorio di Scopello e di Castellammare del Golfo. </p>
              <p className="text-xl"> Noi siamo Chiara, Guido, Claudia, Gábor, Silvia, Debora e Lucrezia, sette giovani che amano questo luogo 
                e hanno deciso di viverci. Alcuni di noi qui ci sono nati, altri ci sono arrivati da adulti. Tutti dopo aver
                affrontato diversi percorsi di vita che per anni ci hanno tenuto lontani dalla Sicilia.</p>
                <p className="text-xl" id='scrollView'> Ma tutti, alla fine, lo
                abbiamo scelto, e così abbiamo scelto di contribuire, come possiamo, allo sviluppo della nostra casa, stando però
                attenti a preservarne non solo le risorse naturali, ma anche la storia e la cultura.</p>
              </div>
              <div className="lg:w-5/12 order-2">
                <img src="./scopChi2.jpg"
                alt="" className="rounded chisiamopicture" />
              </div>
          </div>
        </div>
      </div>
    )
}
