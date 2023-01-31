import * as React from "react"
import gatsbyGraph from "../images/gatsbyGraph.png"

const InfoGatsby = () => (
    <section class="text-gray-800 bg-gradient-to-tr from-slate-100 to-indigo-400 body-font overflow-hidden ">
    <div class="flex items-center flex-wrap justify-center globalWrapper px-5 py-8 mx-auto">
      <div class="order-0 md:order-1 flex flex-col items-center flex-wrap justify-center py-6 px-[4vw] md:w-1/2">
        <h2 class="text-base md:text-lg text-white tracking-widest font-medium title-font mb-1">
          Tylko Najlepsze Technologie
        </h2>
        <h1 class="text-center lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-mono font-medium title-font mb-4 text-black capitalize">
          100x Szybszy
        </h1>
        <p class="text-center md:text-start w-full lg:w-3/4 mx-auto leading-relaxed text-base md:text-lg lg:text-xl">
          Jako agencja stron internetowych, oferujemy szeroki zakres usług, od
          projektowania i tworzenia stron pod kątem SEO, po ich hosting i
          utrzymanie. Dbamy o to, aby nasze projekty były przyjazne dla
          użytkownika i skutecznie promowały biznes naszych klientów.
        </p>
      </div>
      <div class="flex items-center justify-center w-full md:w-1/2">
        <img alt="Gatsby Win with wordpress, joomla" class="mt-2 py-6 md:ml-12 h-auto" src={gatsbyGraph} />
      </div>
    </div>
    
  </section>
)

export default InfoGatsby
