import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Galeria = () => (
  <Layout>
    <div class="flex justify-center py-24">
      <div class="rounded-lg shadow-lg bg-white max-w-sm overflow-hidden">
        <a href="#!">
          <img
            className="hover:scale-110 transition duration-300 ease-in-out rounded-t-lg"
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
        </a>
        <div class="relative overflow-hidden bg-no-repeat bg-cover bg-white w-full">
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p class="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div class="flex space-x-2 justify-center">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Galeria" />

export default Galeria
