import * as React from "react"
import iPhone from "../images/iPhone.png"

const InfoSection = () => (
    <section class="text-gray-800 body-font overflow-hidden globalWrapper">
    <div class="flex items-center flex-wrap justify-center px-5 mx-auto">
      <div class="flex flex-col items-center flex-wrap justify-center py-6 px-[4vw] md:w-2/3">
        <h2 class="text-sm md:text-lg text-indigo-500 tracking-widest font-medium title-font mb-1">
          Strony Internetowe z Systemami SEO
        </h2>
        <h1 class="text-center lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-medium title-font mb-4 text-black capitalize">
          Tworzenie stron internetowych
        </h1>
        <p class="text-center md:text-start lg:w-3/4 mx-auto leading-relaxed text-base md:text-lg lg:text-xl">
          Jako agencja stron internetowych, oferujemy szeroki zakres usług, od
          projektowania i tworzenia stron pod kątem SEO, po ich hosting i
          utrzymanie. Dbamy o to, aby nasze projekty były przyjazne dla
          użytkownika i skutecznie promowały biznes naszych klientów.
        </p>
      </div>
      <div class="flex items-center justify-center w-full md:w-1/3 mb-12">
        <img alt="iPhone 13 with page on screen" class="ml-[40vw] mt-12 py-6 md:ml-12 h-auto" src={iPhone} />
      </div>
    </div>
    
  </section>
)

export default InfoSection
