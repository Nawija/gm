import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Price from "../components/price"
import InfoSection from "../components/infoSection"
import InfoGatsby from "../components/infoGatsby"

const IndexPage = () => (
  <Layout>
    <Hero />
    <InfoSection />
    <InfoGatsby />
    <Price />


  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
