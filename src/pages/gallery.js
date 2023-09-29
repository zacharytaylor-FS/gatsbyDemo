import React from 'react'
import Frame from '../components/frame'
import Layout from '../components/layout'
import Seo from '../components/seo'

const GalleryPage = () => {
    return (
        <Layout pageTitle='Gallery Page'>

        <Frame>
            <p>This will be passed in as children</p>
        </Frame>
        </Layout>
    )
}

export const Head = () => <Seo title='Gallery Page' />


export default GalleryPage