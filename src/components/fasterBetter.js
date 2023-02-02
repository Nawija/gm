import * as React from "react"
import webSite from '../images/webSite.png'

const FasterBetter = () => (
  <section class="flex items-center justify-center flex-wrap text-center md:px-4 w-full px-2 lg:px-6 globalWrapper">
    <div className="flex items-center justify-center flex-col px-3 my-auto pb-12 lg:pb-0 lg:w-1/3">
      <p className="text-7xl font-bold text-orange-500 mb-1">50%</p>
      <p className="text-lg font-semibold w-3/4">Większa predkość ładowania strony w
porownaniu z konkurencją</p>
    </div>
    <img className="lg:w-1/3" src={webSite} />
    <div className="flex items-center justify-center flex-col px-3 my-auto py-12 lg:py-12 lg:w-1/3">
      <p className="text-7xl font-bold text-orange-500 mb-1">2x</p>
      <p className="text-lg font-semibold w-3/4">SEO Boost vs konkurencja</p>
    </div>

  </section>
)

export default FasterBetter
