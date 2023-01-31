import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [showNav, setMenu] = useState(false)
  const HandleMenu = () => {
    setMenu(!showNav)
  }
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav>
        <div className="globalWrapper flex py-4 md:py-6 bg-white justify-between w-full px-7">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-2xl font-semibold text-gray-800"
            aria-label="logo"
          >
            <svg
              className="w-11 h-auto"
              width="100"
              height="104"
              viewBox="0 0 100 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M80.5397 1.40072C73.1324 -1.81081 64.5241 1.59054 61.3126 8.99786L53.7069 26.5403L30.6009 12.7852C20.9833 7.05985 8.54535 10.2151 2.81996 19.8327C-6.52753 35.5347 8.04529 54.6143 25.6536 49.7277L46.1158 44.0491L32.5383 75.3652C28.086 85.6343 32.8015 97.5684 43.0706 102.021C59.8364 109.29 76.902 92.403 69.8101 75.5615L59.6011 51.3181C58.3658 48.3846 58.098 45.3425 58.6156 42.498C65.5626 44.077 70.9868 50.3714 70.7714 58.1603L70.6668 61.9443C70.2503 77.0057 90.1336 82.7728 97.8408 69.8261C101.971 62.8888 99.6947 53.9171 92.7574 49.7873L64.421 32.9185C66.6332 31.1982 69.3549 30.045 72.4208 29.7367L76.1873 29.358C91.1788 27.8506 94.3635 7.39417 80.5397 1.40072Z"
                fill="url(#paint0_linear_654_8)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_654_8"
                  x1="69.2513"
                  y1="27.6659"
                  x2="31.0637"
                  y2="100.576"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A0AAFF" />
                  <stop offset="1" stop-color="#424FBF" />
                </linearGradient>
              </defs>
            </svg>
            Benotive
          </Link>

          <ul
            className={
              showNav
                ? "absolute left-0 top-full shadow-xl flex items-center justify-center w-full flex-col bg-white transition-all duration-500 z-[-1] lg:static lg:flex-row lg:opacity-100 lg:w-auto lg:z-[50]"
                : "absolute left-0 flex items-center justify-center w-full flex-col bg-white transition-all duration-500 z-[-1] lg:static lg:flex-row lg:opacity-100 lg:w-auto lg:z-[50] opacity-0 -translate-y-[400%] lg:translate-y-0"
            }
          >
            <li className="m-6 lg:m-0">
              <Link
                to="/"
                className=" text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100 p-2"
              >
                Home
              </Link>
            </li>
            <li className="m-6 lg:m-0">
              <Link
                to="/cennik"
                className=" text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100 p-2"
              >
                Cennik
              </Link>
            </li>
            <li className="m-6 lg:m-0">
              <Link
                to="/pomoc"
                className=" text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100  p-2"
              >
                Pomoc
              </Link>
            </li>
            <li className="m-6 lg:m-0">
              <Link
                to="/galeria"
                className=" text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100  p-2"
              >
                Galeria
              </Link>
            </li>
            <li className="m-6 lg:m-0">
              <Link
                to="/kontakt"
                className=" text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100  p-2"
              >
                Kontakt
              </Link>
            </li>
            <li className="mb-12 mt-6">
              <Link
                to="/kontakt"
                className="bg-indigo-400 hover:bg-indigo-600 focus-visible:ring lg:hidden ring-indigo-300 text-white shadow-md active:text-gray-700 text-sm font-semibold text-center rounded-lg outline-none transition duration-200 px-8 py-3 hover:text-white hover:shadow-inner"
              >
                Darmowa Wycena
              </Link>
            </li>
          </ul>

          <Link
            to="/kontakt"
            className="hidden lg:inline-block my-auto bg-indigo-400 hover:bg-indigo-600 md:text-base focus-visible:ring ring-indigo-300 text-white shadow-md active:text-gray-700 text-sm font-semibold text-center rounded-lg outline-none transition duration-200 px-8 py-4 hover:text-white hover:shadow-inner"
          >
            Darmowa Wycena
          </Link>

          <button
            onClick={HandleMenu}
            type="button"
            className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-4 py-4 my-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={showNav ? "hidden ionicon h-6 w-6" : "ionicon h-6 w-6"}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={showNav ? "ionicon h-6 w-6" : "hidden ionicon h-6 w-6"}
              viewBox="0 0 512 512"
            >
              <title>Close</title>
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
