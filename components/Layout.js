import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'
import { ScrollToTop } from '.'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            
            <main className='md:-mt-20'>
                {children}
            </main>

            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node,
}