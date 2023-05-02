import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar> </Navbar>
            <Outlet> </Outlet>
            <Footer> </Footer>
        </div>
    );
};

export default Main;