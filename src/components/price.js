import * as React from "react"
import { Link } from "gatsby"

const Price = () => (
  <section className="text-gray-800 body-font overflow-hidden py-8 px-4">
    <div className="globalWrapper px-1 mx-auto">
      <div className="flex flex-col text-center w-full">
        <h3 className="text-2xl lg:text-3xl font-medium title-font mb-2 text-gray-900">
          Cennik
        </h3>
        <p classNameName="text-center lg:w-3/4 mx-auto leading-relaxed text-lg mb-6 px-4">
          Nie trzeba przepłacać za swoją stronę internetową! Nasze ceny są
          przystępne dla każdego i dopasowujemy je do indywidualnych potrzeb
          każdego klienta. Skontaktuj się z nami, aby uzyskać{" "}
          <Link
            to="/kontakt"
            className="underline text-indigo-500 font-semibold hover:text-indigo-600 transition-colors duration-500"
          >
            darmową wycenę
          </Link>{" "}
          i rozpocząć współpracę już dziś!
        </p>
      </div>
      <div className="flex flex-wrap">
        <div className="py-4 px-4   lg:px-10 lg:py-6 xl:w-1/3 md:w-1/2 w-full mx-auto ">
          <div className="group h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 hover:shadow-lg transition-all duration-500">
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
              BASE
            </h2>
            <p className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
              <span>$300</span>
              <span className="text-lg ml-1 font-normal text-gray-500">/zł</span>
            </p>
            <p className="flex items-center text-gray-800 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Strona One Page
            </p>
            <p className="flex items-center text-gray-800 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Darmowy Roczny Hosting
            </p>
            <p className="flex items-center text-gray-800 mb-6">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              2 Darmowe Modyfikacje
            </p>
            <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none rounded group-hover:bg-gray-700 transition-colors duration-500">
              Sprawdz
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Termin Realizacji od 4 do 10 dni
            </p>
          </div>
        </div>
        <div className="py-4 px-4  lg:px-10 xl:w-1/3 md:w-1/2 w-full mx-auto">
          <div className="group h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 hover:shadow-lg transition-all duration-500">
            <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl group-hover:bg-amber-400 transition-colors duration-500">
              POPULARNY
            </span>
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
              PRO
            </h2>
            <h2 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 group-hover:border-white transition-colors duration-500">
              <span>$500</span>
              <span className="text-lg ml-1 font-normal text-gray-500 ">/zł</span>
            </h2>
            <p className="flex items-center text-gray-800 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Strona Multi Page do 5 stron
            </p>
            <p className="flex items-center text-gray-800 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Piękne Unikalne Animacje
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Darmowy Roczny Hosting
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              3 Darmowe Modyfikacje
            </p>
            <p className="flex items-center text-gray-600 mb-6">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Roczna Opieka 24/7
            </p>
            <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded group-hover:bg-gray-700 transition-colors duration-500">
              Sprawdz
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Termin Realizacji od 4 do 10 dni
            </p>
          </div>
        </div>

        <div className="py-4 px-4 lg:px-10 lg:py-6 xl:w-1/3 md:w-1/2 w-full mx-auto">
          <div className="group h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 hover:shadow-lg transition-all duration-500 ">
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
              SPECIAL
            </h2>
            <h2 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
              <span>$1200</span>
              <span className="text-lg ml-1 font-normal text-gray-500">/zł</span>
            </h2>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Strona Bez Limitów
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Unikalne Animacje
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Bez Limitu Modyfikacji
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Wdrążenie każdego pomysłu
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Darmowy Projekt Strony
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Darmowy 3 Letni Hosting
            </p>
            <p className="flex items-center text-gray-600 mb-6">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Unikalny Design
            </p>
            <Link to="/plan/special" className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none rounded group-hover:bg-gray-700 transition-colors duration-500">
              Sprawdz
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <p className="text-xs text-gray-500 mt-3">
              Termin Realizacji od 4 do 10 dni
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Price
