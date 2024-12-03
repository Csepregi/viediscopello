import { Form } from "@remix-run/react";
import { useState } from "react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);

  const toggleEventsDropdown = () => {
    setEventsDropdownOpen(!eventsDropdownOpen);
    setLoginDropdownOpen(false); // Close the login dropdown if open
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white border-b-2 border-blue">
      <nav className="container flex justify-between items-center px-4 py-3 mx-auto md:py-4 lg:px-6" aria-label="Global">
        <a href="/" className="flex items-center">
          <img className="h-16 w-auto sm:h-16" src="/logoscopello.png" alt="Scopello logo" />
        </a>
        <div className="flex items-center space-x-4">
        <div className="relative">
            <button
              onClick={toggleEventsDropdown}
              type="button"
              className="px-4 py-2 bg-blue text-white text-xl font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Eventi
            </button>
            {eventsDropdownOpen && (
              <div className="absolute left-0 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <a href="/contradanza" className="block px-4 py-2 text-sm text-blue hover:bg-gray-100">
                  Contradanza
                </a>
              </div>
            )}
          </div>
          <a href="/tastavino" className="px-4 py-2 bg-celeste text-blue text-xl font-semibold rounded-md hover:bg-orange transition-colors duration-200">Tastavino</a>

          <div className="relative">
            
            <button
              onClick={toggleDropdown}
              type="button"
              className="flex items-center justify-center w-10 h-10 text-blue hover:text-blue-800 focus:outline-none focus:border-blue-300 rounded-full border-2 border-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10 3a5 5 0 100 10 5 5 0 000-10zM3 18a9 9 0 0114 0H3z" clipRule="evenodd" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                <a href="/loginevent" className="block px-4 py-2 text-sm text-blue hover:bg-gray-100">Login</a>
                <Form action="/logout" method="post">
                  <button type="submit" className="block px-4 py-2 text-sm text-blue hover:bg-gray-100 w-full text-left">Logout</button>
                </Form>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
