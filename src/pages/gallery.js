import React from 'react'
import Frame from '../components/frame'
import Layout from '../components/layout'

const GalleryPage = () => {
    return (
        <Layout pageTitle='Gallery Page'>

        <Frame>
            <p>This will be passed in as children</p>
        </Frame>
        </Layout>
    )
}

export default GalleryPage