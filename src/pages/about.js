import React from 'react'
import Layout from '../components/layout'

function AboutPage() {
  return (
    <Layout pageTitle='About Page'>
      <h1>About Me</h1>
      <p>Hi there! I'm proud creator of this site.</p>
    </Layout>
  )
}

export default AboutPage

export const Head = () => (
    <>
    <title>About Me</title>
    <meta name='' content='' />
    </>
)

