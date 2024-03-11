import DoveSiamo from "./doveSiamo";
import ChiSiamo from "./chiSiamo";
import CheFacciamo from "./cheFacciamo";
import Footer from '../components/footer'


export default function Index() {

   const handleFurtherClick = () => {
      const middleElement = document.getElementById('scrollView');
    if (middleElement) {
      middleElement.scrollIntoView();
    }
   }

  return (
<>
<div className="header w-full min-h-screen flex flex-col justify-between">
    <div className="flex flex-col justify-center h-full py-12">
        <div className="self-center items-center flex flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4 sm:px-0">
            <div className="w-full text-center sm:text-left sm:w-1/2 py-12 sm:px-8">
                <h1 className="tracking-wide text-blue text-4xl mb-6">Incamminati lungo le Vie Di Scopello</h1>
                <h2 className="font-bold tracking-widest text-blue  text-4xl">e scopri un mondo di...</h2>
                <span className="content__container block text-blue text-2xl my-6">
                    <ul className="content__container__list">
                        <li className="content__container__list__item xl:pl-3">bellezza</li>
                        <li className="content__container__list__item xl:pl-3">impegno</li>
                        <li className="content__container__list__item xl:pl-3">autenticità</li>
                        <li className="content__container__list__item xl:pl-3">passione</li>
                        <li className="content__container__list__item xl:pl-3">storia</li>
                        <li className="content__container__list__item xl:pl-3">tradizione</li>
                        <li className="content__container__list__item xl:pl-3">sostenibilità</li>
                        <li className="content__container__list__item xl:pl-3">rispetto</li>
                    </ul>
                </span>
                <p className="font-bold tracking-widest text-blue  text-4xl">...Immaginalo per un attimo!</p>
            </div>
            <div className="w-full sm:w-1/2">
                <img src="./logoscopello.png" alt="AWE.SOME header" />
            </div>
        </div>
    </div>
    <div className="flex flex-row w-full justify-center pb-12" onClick={handleFurtherClick}>
        <a className="px-10 py-2 text-blue bg-celeste rounded-full shadow-md text-lg hover:bg-brown hover:border-blue">Scopri di più</a>
    </div>
</div>
<ChiSiamo/>
<CheFacciamo />
<DoveSiamo />
<Footer/>
</>
  );
}
