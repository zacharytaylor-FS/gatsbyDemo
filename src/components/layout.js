import { Link } from 'gatsby'
// import { container } from './layout.module.css'
import * as React from 'react'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className='container'>
            <nav className=''>
                <ul className='flex pl-0'>
                    <li className='pr-2'><Link to='/'>Home</Link></li>
                    <li className='pr-2'><Link to='/about'>About</Link></li>
                    <li className='pr-2'><Link to='/gallery'>Gallery</Link></li>
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