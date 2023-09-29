import { Link, useStaticQuery, graphql } from 'gatsby'
// import { container } from './layout.module.css'
import * as React from 'react'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    return (
        <div className='container'>
        <header>{data.site.siteMetadata.title}</header>
            <nav className=''>
                <ul className='flex pl-0'>
                    <li className='pr-2'><Link to='/'>Home</Link></li>
                    <li className='pr-2'><Link to='/about'>About</Link></li>
                    <li className='pr-2'><Link to='/gallery'>Gallery</Link></li>
                    <li className='pr-2'><Link to='/blog'>Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className='text-5xl text-purple-700 font-semibold'>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout