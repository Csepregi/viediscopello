import { useState } from "react";

export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
        <header className="border-b-2 border-blue bg-white">
        <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4 lg:px-6" aria-label="Global">
        <div>
          <a href="/" className="flex items-center">
            <img className="h-16 w-auto sm:h-16" src="./logoscopello.png" alt="Scopello logo" />
          </a>
        </div>
          <div className="flex sm:items-center">
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
            </div>
            <div className="hidden lg:block">
            <a href="/tastavino" className="text-xl font-semibold text-blue hover:text-blue-800">Tastavino</a>
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-blue">Log in <span aria-hidden="true">&rarr;</span></a>
          </div> */}
        </nav>
        {isMenuOpen && (
       <div className="lg:hidden">
       <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
         <a href="/tastavino" className="block px-3 py-2 rounded-md text-base font-medium text-blue hover:text-blue-800 hover:bg-gray-50">Tastavino</a>
       </div>
     </div>
        )}
      </header>
      
    )
}
