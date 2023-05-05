import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import SpinnerLoader from '../components/SpinnerLoader/SpinnerLoader';

const Main = () => {
    const navigation = useNavigation();
    /* -----------Website Main Layout-------------- */
    return (
        <div>
            <Navbar> </Navbar>
          {/* ------Loading Spinner------ */}
           {navigation.state === 'loading' && <SpinnerLoader> </SpinnerLoader>}
  
            <Outlet> </Outlet>
            <Footer> </Footer>
        </div>
    );
};

export default Main;