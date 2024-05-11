import { requireUser } from "~/session.server";
import { createCheckoutSession } from "~/models/subscription.server";
import { ActionFunction, redirect } from "@remix-run/node";



export const action: ActionFunction = async ({request}) => {
  const user = await requireUser(request)
  const formData = await request.formData();
  const price = formData.get('price');
  const url = await createCheckoutSession(user, price)
  return redirect(url)
}


export default function Payticket() {
  return (
    <section className="relative z-10 overflow-hidden bg-white pb-12 pt-20 bg-white lg:pb-8 lg:pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mb-2 block text-lg font-semibold text-blue sm:text-xl md:text-2xl">
            TASTAVINO I edizione
          </span>
        </div>

        <div className="mt-6 flex flex-wrap justify-center">
          <PricingCard
            type="Masterclass"
            price="€20"
            priceValue="price_1PDvtmLsVEYbqPQOGmkZCOOM"
            //description="1 ora di masterclass esclusiva (max 20 persone) condotta da un giornalista enogastronomico ed esperto di vini"
            buttonText="Scegli Masterclass"
          >
            <List> 1 ora di masterclass esclusiva (max 20 persone) di approfondimento alla degustazioni di vini locali condotta da un giornalista enogastronomico ed esperto di vini.</List>
          </PricingCard>
          <PricingCard
            type="degustazione"
            price="€12"
            priceValue="price_1PEx9FLsVEYbqPQOpR2AN5dg"
            description="degustazione di 4 calici di vino presso le cantine partecipanti "
            buttonText="Scegli degustazione"
            active
          >
            <List>degustazione di 4 calici di vino presso le cantine partecipanti </List>
              <List>degustazioni gastronomiche presso gli stand presenti </List>
              <List>laboratorio di intreccio presso uno degli stand</List>
              <List>laboratori per bambini con inizio alle ore 17.00/18.00/19.00</List>
              <List>Use on 1 (one) project</List>
              <List>concerto musicale dalle ore 20.30 e lezione di contradanza</List>
          </PricingCard>
          <PricingCard
            type="Masterclass + degustazione "
            price="€25"
            priceValue='price_1PEHG7LsVEYbqPQOORRa8yK9'
            description="1 ora di masterclass esclusiva (max 20 persone) condotta da un enologo. Un approfondimento alla degustazioni di vini locali abbinati a prodotti gastronomici del territorio "
            buttonText="Scegli Masterclass + degustazione "
          >
            <List>degustazione di 4 calici di vino presso le cantine partecipanti </List>
              <List>degustazioni gastronomiche presso gli stand presenti </List>
              <List>laboratorio di intreccio presso uno degli stand</List>
              <List>laboratori per bambini con inizio alle ore 17.00/18.00/19.00</List>
              <List>concerto musicale dalle ore 20.30 e lezione di contradanza</List>
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
}

const PricingCard: React.FC<PricingCardProps> = ({
  children,
  description,
  price,
  priceValue,
  type,
  buttonText,
  active,
}) => {
  return (
    <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
      <div className="relative mb-10 overflow-hidden rounded-lg border-2 bg-blue px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12">
        <h3 className="mb-3 text-lg font-semibold text-white">{type}</h3>
        <h2 className="mb-5 text-4xl font-bold text-white">
          {price}
        </h2>
        <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color">
          {description}
        </p>
        <div className="mb-9 flex flex-col gap-2">{children}</div>
        <form method="POST">
               <input type='hidden' name='price' value={priceValue} />
               <button
              className={` ${
              active
                ? "block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                : "block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-white transition hover:border-white hover:bg-brown hover:text-blue dark:border-dark-3"
            } `}
                    
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
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};