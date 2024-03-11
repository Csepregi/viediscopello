export default function DoveSiamo() {
    return (
  <div className="relative isolate overflow-hidden bg-blue px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div className="absolute inset-0 -z-10 overflow-hidden">
    
  </div>
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="lg:max-w-lg">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Dove Siamo</h1>
          <p className="mt-6 text-xl leading-8 text-white">Scopello è un piccolo borgo medievale all’interno del comune di Castellammare del Golfo,
           in provincia di Trapani. Conosciuto sia per le sue spiagge di sabbia fine e dorata che per le coste rocciose, per il mare cristallino e ricco di biodiversità,
            per le tonnare storiche, i borghi antichi, le acque termali, le saline, questo tratto di costa della Sicilia occidentale comprende anche la prima riserva naturale
             istituita in Sicilia, quella dello Zingaro, che si estende proprio da Scopello al comune di San Vito Lo Capo. </p>
             <p className="mt-6 text-xl leading-8 text-white">Scopello, la cui costa un tempo costituiva l’antica città di Cetaria, una sorta di emporio commerciale di età greca, 
            prende il nome dal greco Σκόπελος (Scopelos), che significa proprio “scoglio”, un richiamo - probabilmente - alla presenza dei famosi faraglioni 
            che oggi ne sono il simbolo.</p>
        </div>
      </div>
    </div>
         
    <div className="gallery doveSiamo w-auto bg-orange p-12 lg:sticky lg:top-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-lg lg:overflow-hidden ">
         <img src="./borgo.jpeg" alt="a lovely kiss in the night" className="max-w-none"/>
         <img src="./borgo2.jpeg" alt="a women inside a car" className="max-w-none"/>
         <img src="./boat.jpg" alt="a baby" className="max-w-none"/>
         <img src="./scop1.jpg" alt="a girl in the forest" />
     </div>
  </div>
</div>
    )
  }