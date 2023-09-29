import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
   <h1 className="text-3xl">Hello</h1>
    <p>I'm making this by following the Gatsby Tutorial</p>
    <StaticImage
     alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        src="../images/icon.png"
    />
    </Layout>
  )
}

export default IndexPage