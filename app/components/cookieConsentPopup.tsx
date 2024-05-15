import { useFetcher } from '@remix-run/react';
import React, { useEffect, useState } from 'react';


const CookieConsentPopup = () => {
  const fetcher = useFetcher();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetcher.load('/index');
  }, []);

  useEffect(() => {
    if (fetcher.data?.consent === 'unset') {
      setShowPopup(true);
    }
  }, [fetcher.data]);

  const handleConsent = (consent: string) => {
    fetcher.submit({ consent }, { method: 'post' });
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 md:left-auto md:right-20 md:w-auto bg-white border border-gray-300 p-4 rounded-lg shadow-lg z-50">
    <p className="text-sm text-gray-800">We use cookies to improve your experience. Do you accept our cookie policy?</p>
    <div className="mt-4 flex justify-end space-x-3">
      <button onClick={() => handleConsent('accept')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Accept
      </button>
      <button onClick={() => handleConsent('deny')} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
        Deny
      </button>
    </div>
  </div>
  );
};

export default CookieConsentPopup;
