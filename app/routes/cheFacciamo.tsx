import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from "@fortawesome/free-solid-svg-icons";


export default function CheFacciamo() {
    return (  
        <>
        <div className="mx-auto px-5 min-h-screen py-2 lg:px-6 lg:pt-12 header min-h-screen chefacciamo">
        <div className="flex flex-col text-center w-full mb-10">
        <div className="wrapper">
        <div className="card">
            <input type="checkbox" id="card1" className="more" aria-hidden="true"/>
            <div className="content">
                <div className="front bg-whatWeDo1">
                    <div className="inner">
                        <h2>La nostra missione è quella di...</h2>
                        <label htmlFor="card1" className="button" aria-hidden="true">
                            Scopri di piú
                        </label>
                    </div>
                </div>
                <div className="back bg-scopLogo">
                    <div className="inner"> 
                        <div className="description">
                            <p>fare sviluppare un turismo sostenibile, slegato dalle logiche dell’overtourism e del 
                                turismo stagionale di massa, che sfrutta fino all’osso le risorse di un territorio 
                                rendendolo invivibile per chi ci abita.</p>
                        </div>
                        <label htmlFor="card1" className="button return" aria-hidden="true">
                            <i className="fas fa-arrow-left">
                            <FontAwesomeIcon icon={fas.faArrowLeft} />
                            </i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <input type="checkbox" id="card2" className="more" />
            <div className="content">
                <div className="front bg-whatWeDo2">
                    <div className="inner">
                        <h2>Le attività che promuoviamo sono...</h2>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <label htmlFor="card2" className="button" aria-hidden="true">
                            Scopri di piú
                        </label>
                    </div>
                </div>
                <div className="back">
                    <div className="inner">
                        <div className="description">
                            <p>
                            sempre pensate e costruite non solo per i turisti, ma anche per i locali, per favorire l’incontro e 
                            la conoscenza tra culture diverse, per offrire attività a chi viaggia in Sicilia fuori stagione 
                            e ai residenti del luogo.</p>
                        </div>
                        <label htmlFor="card2" className="button return" aria-hidden="true">
                            <i className="fas fa-arrow-left">
                            <FontAwesomeIcon icon={fas.faArrowLeft} />
                            </i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <input type="checkbox" id="card3" className="more" />
            <div className="content">
                <div className="front bg-whatWeDo3">
                    <div className="inner">
                        <h2>Organizziamo attività di... </h2>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <label htmlFor="card3" className="button" aria-hidden="true">
                            Scopri di piú
                        </label>
                    </div>
                </div>
                <div className="back">
                    <div className="inner">
                        <div className="description">
                            <p>scoperta del territorio, delle sue bellezze naturali e culturali, della sua storia e delle sue tradizioni,
                                 attività di promozione delle realtà locali, degli usi e costumi, del cibo, tutto grazie alla collaborazione con piccole imprese locali.</p>
                        </div>
                        <label htmlFor="card3" className="button return" aria-hidden="true">
                            <i className="fas fa-arrow-left">
                            <FontAwesomeIcon icon={fas.faArrowLeft} />
                            </i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <input type="checkbox" id="card4" className="more" />
            <div className="content">
                <div className="front bg-whatWeDo4">
                    <div className="inner">
                        <h2>Organizziamo attività culturali... </h2>
                        <label htmlFor="card4" className="button" aria-hidden="true">
                            Scopri di piú
                        </label>
                    </div>
                </div>
                <div className="back">
                    <div className="inner">
                        <div className="description">
                            <p>rassegne, festival, per offrire una vacanza di qualità a chi viene in viaggio qui. Sempre con un occhio al contesto in cui ci troviamo, 
                                con un’attenzione massima alla cura e al rispetto del nostro ambiente.</p>
                        </div>
                        <label htmlFor="card4" className="button return" aria-hidden="true">
                            <i className="fas fa-arrow-left">
                            <FontAwesomeIcon icon={fas.faArrowLeft} />
                            </i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        </div>
        </>
    )
}
