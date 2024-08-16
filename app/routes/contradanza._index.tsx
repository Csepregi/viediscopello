import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@remix-run/react';

const EventPage = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-400 text-blue p-6">
      {/* Main Content */}
      <div className="bg-purple-600/20 backdrop-blur-md p-10 md:p-12 flex flex-col md:flex-row items-center w-full max-w-5xl rounded-lg shadow-lg">
        {/* Left - Image */}
        <div className="relative w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <div className="w-full h-96 md:h-[550px] rounded-t-full overflow-hidden shadow-md">
            <img
              src="./matrioske.jpg" // Replace with your image URL
              alt="Guitarist"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-center">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Vivi la magia dei balli popolari siciliani con <br /> Le Matrioske!
          </h2>
          <p className="text-gray-200 mb-6">
            Scopri l’arte dei balli tradizionali siciliani, impara i passi, senti il ritmo e lasciati trasportare dalla tradizione!
          </p>
          {/* Date and Location */}
          <div className="flex justify-center md:justify-center space-x-8 mb-6">
            <div className="flex items-center space-x-2 backdrop-blur-lg">
            
            <FontAwesomeIcon icon={faCalendarDays} />
            <p>Agosto 25, 2024</p>
            </div>
            <div className="flex items-center space-x-2 bg-slate-100 backdrop-blur-sm rounded-lg px-4 py-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-gray-800" />
              <p className="text-gray-900">Piazza di Scopello</p>
            </div>
          </div>
          {/* Button */}
          
          <Link to='https://docs.google.com/forms/d/14R3FEuB8YYTAyxq4m5Op6mvmx9ElpBD2ES3ANzISu1Y/viewform?fbclid=IwY2xjawEn5ldleHRuA2FlbQIxMQABHYzAV04ZsQsaPp5QKdWaSkaZbGBrJYDHg1SQTCv1DG1qG1K5TlyKOnP5Iw_aem_jBa71swJuFG_MSqUm3bBHg&edit_requested=true' target="_blank">

          <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-orange hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-3 px-6 inline-flex items-center">
            <span className="mr-2"> Per iscriversi, compilare questo modulo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
          </button>
          </Link>
        </div>
      </div>

      {/* Footer - Name and Progress Bar */}
      <div className="mt-10 text-center">
        <div className="mt-2">
          <div className="w-24 mx-auto h-1 bg-gray-300 rounded-lg overflow-hidden">
            <div className="h-full bg-white" style={{ width: '25%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
