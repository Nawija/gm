import * as React from "react"
import bgWhyGatsby from "../images/bgWhyGatsby.jpg"
import car from '../images/car.jpg'
import wow from '../images/wow.jpg'

// bg-gradient-to-tr from-red-100 to-amber-100
const WhyGatsby = () => (
  <section className=" relative text-base mx-auto max-w-[3000px] md:text-lg text-center px-3 sm:px-8 py-8 md:py-24 ">
    <img
      className="w-full h-full object-cover object-center absolute inset-0 bg-fixed -z-10"
      src={bgWhyGatsby}
      alt=""
    />

   <div className="flex items-stretch justify-center flex-wrap globalWrapper">
   <div className="mx-auto my-4 rounded-lg shadow-md py-4 px-4 md:px-6  md:mx-6 md:w-1/3 bg-white/50 backdrop-blur-md"><img className="w-full h-full object-cover object-center rounded-md" src={car} alt="pędzący samochód" /></div>
   <div className="mx-auto my-4 rounded-lg shadow-md py-4 px-4 md:px-6  md:mx-6 md:w-1/2 bg-white/50 backdrop-blur-md ">
      <h2 className="text-2xl md:text-3xl mb-6 font-coming font-semibold">
        Dlaczego warto zainwestować w stworzenie strony na GatsbyJS?
      </h2>
      <p className="text-start pl-2 font-medium">
        Inwestycja w stronę zakodowaną na GatsbyJS jest tego warta przede
        wszystkim z powodu jej wysokiej wydajności i większej szansy na
        zrealizowanie postawionych sobie celów biznesowych Strony powstające
        przy wykorzystaniu Gatsbiego działają płynnie, a ich czas ładowania jest
        błyskawiczny w porównaniu do starszych technologii takich jak Joomla,
        Drupal, stron opartych na gotowych motywach
      </p>
    </div>
    <div className="mx-auto my-4 rounded-lg shadow-md py-4 px-4 md:px-6  md:mx-6 md:w-1/3 bg-white/50 backdrop-blur-md md:order-1"><img className="w-full h-full object-cover object-center rounded-md" src={wow} alt="zszokowana kobieta" /></div>
    <div className="mx-auto my-4 rounded-lg shadow-md py-4 px-4 md:px-6  md:mx-6 md:w-1/2 bg-white/50 backdrop-blur-md font-medium">
      <h2 className="font-semibold text-2xl md:text-3xl mb-6 font-coming">
        Zalety Strony w Technologii GatsbyJS
      </h2>
      <p className="mb-2 flex items-center text-start pl-2">
      <span className="w-5 h-5 mr-4 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
        Szybkie działanie strony, co wiąże się z reguły z potencjalnie wyższymi
        wynikami sprzedażowymi (nikt nie lubi czekać, zwłaszcza w dzisiejszym
        świecie)
      </p>
      <p className="mb-2 text-start flex items-center pl-2">
      <span className="w-5 h-5 mr-4 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
        Odseparowanie Front i Back-Endu zabezpiecza treść strony internetowej w
        razie problemów na serwerze
      </p>
      <p className="mb-2 text-start flex items-center pl-2">
      <span className="w-5 h-5 mr-4 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Duża stabilność</p>
      <p className="mb-2 text-start flex items-center pl-2">
      <span className="w-5 h-5 mr-4 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
        Większa odporność na ataki hakerów i spam
      </p>
      <p className=" text-start flex items-center pl-2">
      <span className="w-5 h-5 mr-4 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Technologia klasy Premium</p>
    </div>
    </div>
  </section>
)

export default WhyGatsby
