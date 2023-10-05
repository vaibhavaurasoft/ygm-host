import React, { Fragment, useEffect } from 'react'
import Footer from './Footer';
import Header from './Header';

function Layout(props) {


    return (
        <Fragment>
            <Header />
            <div className="header_height"></div>
            <div>{props.children}</div>
            <Footer />
        </Fragment>
    )
};

export default Layout;