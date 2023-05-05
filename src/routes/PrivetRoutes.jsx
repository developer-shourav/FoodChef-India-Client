import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import SpinnerLoader from '../components/SpinnerLoader/SpinnerLoader';


const PrivetRoutes = ({children}) => {

 /* --------- Location history Collection---------- */
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

/* --------- Loading component---------- */
    if(loading){
        return <SpinnerLoader> </SpinnerLoader>
    }

    if(user){
        return children
    }

        return <Navigate state={{from :location}} to='/login'  replace> </Navigate>

};

export default PrivetRoutes;
