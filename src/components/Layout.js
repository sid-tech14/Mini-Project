import * as React from 'react';
import { Component } from 'react';
import Sidebar from './Sidebar';
import Overview from './Overview';
import Customers from './Stats';
import Auth from './Auth';
import { Route, Routes } from 'react-router-dom';
import Register from './Register';
import Stats from './Stats';


function Layout() {
    const isAuth = parseInt(localStorage.getItem('isAuth')) || 0;
    console.log({ isAuth })
    const [isAuthenticated, updateAuthenticated] = React.useState(isAuth);


    // conditional rendering
    if (!isAuthenticated) {
        return (
            <>
                <Auth updateAuth={updateAuthenticated} />
            </>
        );
    }

    return (
        <>
            <Sidebar />
            <Routes>
                <Route path="/overview" element={<Overview />} />
                <Route path="/stats" element={<Stats />} />
            </Routes>
        </>
    );
}

export default Layout;