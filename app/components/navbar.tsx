import { Link, useLocation } from "@remix-run/react";
import { useScrollPostion } from "../hooks/useScrollPosition";

import clsx from "clsx";

export default function Navbar() {
    const { pathname } = useLocation();
    const scrollPositions = useScrollPostion();

    function classNames(...classNamees: any) {
        return classNamees.filter(Boolean).join(" ");
      }

    return (
        <nav className={classNames(
            scrollPositions
              ? "fixed top-0  w-full bg-white transition opacity-100"
              : "invisible top-0 transition-opacity delay-500 duration-300 ease-out bg-opacity-100 px-1 py-1 flex justify-between items-center "
          )}>
        <div>
        <Link to='/'>
        <img className="w-20 self-center" src='./logoscopello.png'/>
        </Link>
        </div>
        <div className="lg:hidden">
        <button className="navbar-burger flex items-center text-blue-600 p-3">
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li>
        <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </li>
        <li><a className={`text-sm ${linkCss(pathname === "/chiSiamo")} font-bold`} href="/chiSiamo">Chi siamo</a></li>
        <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </li>
        <li><a className={`text-sm  ${linkCss(pathname === "/cosaFacciamo")}  hover:text-gray-500`} href="/cosaFacciamo">Cosa facciamo</a></li>
        <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </li>
        <li><a className={`text-sm ${linkCss(pathname === "/doveSiamo")} hover:text-gray-500`} href="/doveSiamo">Dove siamo</a></li>
        <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </li>
        <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Contatti</a></li>
        </ul>
        </nav>
    )
}


function linkCss(currentPage: boolean) {
    return clsx(
      currentPage ? "text-blue-600" : "text-gray-400",
      "hover:text-blue-500"
    );
  }