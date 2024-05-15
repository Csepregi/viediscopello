import { Form } from "@remix-run/react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white border-b-2 border-blue">
      <nav className="container flex justify-between items-center px-4 py-3 mx-auto md:py-4 lg:px-6" aria-label="Global">
        <a href="/" className="flex items-center">
          <img className="h-16 w-auto sm:h-16" src="./logoscopello.png" alt="Scopello logo" />
        </a>
        <button onClick={toggleMenu} className="text-blue hover:text-gray-700 lg:hidden">
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
        <div className="hidden lg:flex items-center space-x-4">
          <a href="/tastavino" className="text-xl font-semibold text-blue hover:text-blue-800">Tastavino</a>
          <div className="relative">
            <button onClick={toggleDropdown} type="button" className="flex items-center justify-center w-10 h-10 text-blue hover:text-blue-800 focus:outline-none focus:border-blue-300">
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
                {/* <Form action="/billing" method="post">
                  <button type="submit" className="block px-4 py-2 text-sm text-blue hover:bg-gray-100 w-full text-left">I tuoi acquisti</button>
                </Form> */}
                
              </div>
            )}
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/tastavino" className="block px-3 py-2 rounded-md text-base font-medium text-blue hover:text-blue-800 hover:bg-gray-50">Tastavino</a>
            <button onClick={toggleDropdown} type="button" className="flex items-center justify-center w-10 h-10 text-blue hover:text-blue-800 focus:outline-none focus:border-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10 3a5 5 0 100 10 5 5 0 000-10zM3 18a9 9 0 0114 0H3z" clipRule="evenodd" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="mt-2 space-y-1">
                 <a href="#" className="block px-4 py-2 text-sm text-blue hover:bg-gray-100">Login</a>
                <Form action="/logout" method="post">
                  <button type="submit" className="block px-4 py-2 text-sm text-blue hover:bg-gray-100 w-full text-left">Logout</button>
                </Form>
                {/* <Form action="/billing" method="post">
                  <button type="submit" className="block px-4 py-2 text-sm text-blue hover:bg-gray-100 w-full text-left">I tuoi acquisti</button>
                </Form> */}
               
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
