import { requireUser } from "~/session.server";
import { createCheckoutSession } from "~/models/subscription.server";
import { ActionFunction, json, redirect } from "@remix-run/node";



export const action: ActionFunction = async ({request}) => {
  if (request.method === "OPTIONS") {
    return json({}, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Adjust this to your allowed origin
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }
  const user = await requireUser(request)
  const formData = await request.formData();
  const price = formData.get('price');
  if (typeof price !== 'string') {
    // Handle the case where the price is null or not a string
    throw new Error('Invalid price');
  }
  const url = await createCheckoutSession(user, price)
  return redirect(url)
}


export default function Payticket() {
  return (
    <section className="bg-white text-blue py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold">TASTAVINO I edizione</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <PricingCard
          type="Masterclass"
          price="€20"
          priceValue="price_1PGStpLsVEYbqPQO2kdH8XhQ"
          description="Il biglietto include:"
          buttonText="Acquista"
          logoUrl="./arco.png"
          lastNote="Potrai scegliere il tuo giorno preferito nel successivo passaggio"
        >
          <List>1 ora di masterclass esclusiva alle ore 18.00 (max 20 persone) di approfondimento alla degustazione di vini locali condotta da un giornalista enogastronomico ed esperto di vini</List>
          <p className="text-sm text-gray-200 my-2"> &bull; Potrai scegliere il tuo giorno preferito nel successivo passaggio</p>
        </PricingCard>
        <PricingCard
          type="Degustazione"
          price="€12"
          priceValue="price_1PEx9FLsVEYbqPQOpR2AN5dg"
          description="Il biglietto include:"
          buttonText="Acquista"
          logoUrl="./torre.png"
          note="n.b. + 3 EURO come cauzione per il calice da versare in contanti all'ingresso"
          lastNote="Potrai scegliere il tuo giorno preferito nel successivo passaggio"
        >
          <List>degustazione di 4 calici di vino delle le cantine partecipanti</List>
          <List>degustazioni gastronomiche presso gli stand presenti</List>
          <List>laboratorio di intreccio</List>
          <List>laboratori per bambini con inizio alle ore 18.00 o 19.00</List>
          <List>concerto musicale dalle ore 20.30</List>
          <p className="text-sm text-gray-200 my-2"> &bull; Potrai scegliere il tuo giorno preferito nel successivo passaggio</p>
        </PricingCard>
        <PricingCard
          type="Masterclass + Degustazione"
          price="€25"
          priceValue='price_1PGSS7LsVEYbqPQO7VupHptR'
          description="Il biglietto include:"
          buttonText="Acquista"
          logoUrl="./baglio.png"
          lastNote="Potrai scegliere il tuo giorno preferito nel successivo passaggio"
        >
          <List>1 ora di masterclass esclusiva alle ore 18.00</List>
          <List>degustazione di 4 calici di vino delle le cantine partecipanti</List>
          <List>degustazioni gastronomiche presso gli stand presenti</List>
          <List>laboratorio di intreccio</List>
          <List>laboratori per bambini con inizio alle ore 18.00 o 19.00</List>
          <List>concerto musicale dalle ore 20.30</List>
          <p className="text-sm text-gray-200 my-2"> &bull; Potrai scegliere il tuo giorno preferito nel successivo passaggio</p>
        </PricingCard>
      </div>
    </div>
  </section>
  );
};

interface PricingCardProps {
  children: React.ReactNode;
  description: string;
  price: string;
  priceValue?: string;
  type: string;
  buttonText: string;
  active?: boolean;
  logoUrl: string;
  note?: string;
  coupon?: string;
  lastNote: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  children,
  description,
  price,
  priceValue,
  type,
  buttonText,
  active,
  logoUrl,
  note,
  lastNote
}) => {
  return (
    <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
      <div className="relative mb-10 overflow-hidden rounded-lg border bg-dark-blue px-6 py-8 shadow-lg transition duration-300 ease-in-out hover:scale-105">
      <div className="absolute top-0 right-0 mt-4 mr-4">
          <img src={logoUrl} alt="Logo" style={{ width: '60px', height: '60px' }} />
        </div>
        <h3 className="text-lg font-semibold text-teal-300">{type}</h3>
        <h2 className="text-3xl font-bold text-blue my-3">{price}  {note && <span className="text-sm text-gray-400 block">{note}</span>}</h2>
        <p className="text-gray-300 text-sm border-t border-gray-700 pt-4">{description}</p>
        <div className="my-4">{children}</div>
        <form method="POST">
          <input type='hidden' name='price' value={priceValue} />
          <button
            className={`w-full rounded-md py-3 text-sm font-medium ${
              active
                ? "bg-teal-500 text-white hover:bg-teal-600"
                : "border border-teal-500 text-teal-500 hover:bg-blue hover:text-white"
            } transition duration-300 ease-in-out`}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

const List = ({ children }) => {
  return (
    <p className="text-base text-gray-200 my-2">- {children}</p>
  );
};