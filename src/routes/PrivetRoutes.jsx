import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <p>Loading... </p>
    }

    if(user){
        return children
    }

        return <Navigate state={{from :location}} to='/login'  replace> </Navigate>

};

export default PrivetRoutes;
