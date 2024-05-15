import { LoaderFunctionArgs } from '@remix-run/node';
import { Link } from '@remix-run/react';
import React from 'react';
import { requirePaidUserId } from "~/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userId = await requirePaidUserId(request);
  return userId;
};


const Tickets: React.FC = () => {

    return (
        <div className="bg-white">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <div className="container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
            <div className="w-full px-0 lg:px-4">
              <h2 className="px-12 text-base font-bold text-center md:text-2xl text-blue">
                Compri tuo biglietto
              </h2>
              <div className="flex flex-wrap items-center justify-center py-4 pt-0">
                <div className="w-full p-4 md:w-1/2 lg:w-1/4">
                  <label className="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl">
                    <div className="w-full px-4 py-8 rounded-t-lg bg-blue-500">
                      <p className="text-5xl font-bold text-center text-blue">
                        $12
                      </p>
                    </div>
                    <div
                      className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-700"
                    >
                      <Link to="/loginevent"><button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-blue border border-transparent rounded text-blue-500">
                        Compro
                      </button></Link>
                    </div>
                  </label>
                </div>

              </div>
            </div>
          </div>
      </div>
    </div>
        );
}

export default Tickets;