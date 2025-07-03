import React from 'react';
import Navbar from '../components/pages/components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/pages/components/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;