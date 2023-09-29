import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

function AboutPage() {
  return (
    <Layout pageTitle='About Page'>
      <h1>About Me</h1>
      <p>Hi there! I'm proud creator of this site.</p>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <Seo title='About Me' />

