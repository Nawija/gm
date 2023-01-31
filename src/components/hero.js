import * as React from "react"
import { Link } from "gatsby"

import heroVideo from "../assets/heroVideo.mp4"

const Hero = () => (
  <section class="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48 mb-6">
    <video
      class="w-full h-full object-cover object-center absolute inset-0"
      src={heroVideo}
      type="video/mp4"
      autoPlay
      muted
      loop
    />

    <div class="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>

    <div class="sm:max-w-xl flex flex-col items-center relative p-4">
      <p class="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8">
        Nowoczesny design!
      </p>
      <h2 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">
        Stwórz swoją wizytówkę w internecie z nami!
      </h2>

      <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
        <Link
          to="/pomoc"
          class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-200  hover:scale-105 px-8 py-3"
        >
          Wiecej Informacji
        </Link>

        <Link
          to="/galeria"
          class="inline-block bg-gray-200 hover:bg-gray-300 hover:text-white focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-200 hover:scale-105 px-8 py-3"
        >
          Nasze Strony
        </Link>
      </div>
    </div>
  </section>
)

export default Hero
