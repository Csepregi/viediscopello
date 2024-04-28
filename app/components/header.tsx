import { useState } from "react";

export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
        <header className="border-b-2 border-blue bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img className="h-14 w-auto" src="./logoscopello.png" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
                    <button onClick={toggleMenu} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue">
                        <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                        {isMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
            </div>
          <div className="hidden md:flex md:flex-1">
            <a href="/wineTasting" className="text-2xl font-medium font-semibold leading-6 text-blue">Tastavino</a>
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-blue">Log in <span aria-hidden="true">&rarr;</span></a>
          </div> */}
        </nav>
        {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10 bg-blue-100 bg-opacity-25"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3"  onClick={toggleMenu}>
                    <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-blue-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                      <svg className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <a href="/wineTasting" className="-mx-3 block text-2xl rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue hover:bg-blue-50">Tastavino</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </header>
      
    )
}
