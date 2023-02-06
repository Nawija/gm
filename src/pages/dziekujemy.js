import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Regulamin = () => (
  <Layout>
    <section>
      <div class="flex items-center justify-center flex-col my-16 h-96">
        <h2 class="text-amber-600 text-4xl text-center font-semibold mb-8">
          Dziękujemy za wiadomość!
        </h2>
        <p class="text-gray-900 w-60 text-center text-lg mb-8">
          wkrótce skontaktujemy sie z Państwem!
        </p>
        <a class="bg-gradient-to-tr from-orange-700 to-amber-500 hover:text-orange-900 hover:scale-95 focus-visible:ring ring-amber-300 transition duration-200 p-2 rounded text-white" href="/">
          Strona Główna
        </a>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Regulamin" />

export default Regulamin
