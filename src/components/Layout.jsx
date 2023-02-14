import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;