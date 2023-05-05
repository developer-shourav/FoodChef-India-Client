import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../assets/loader/loader.gif';

const PrivetRoutes = ({children}) => {

 /* --------- Location history Collection---------- */
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

/* --------- Loading component---------- */
    if(loading){
        return <div className='flex items-center justify-center mt-10'><img className='w-20 md:w-28' src={Loader} alt="" /></div>
    }

    if(user){
        return children
    }

        return <Navigate state={{from :location}} to='/login'  replace> </Navigate>

};

export default PrivetRoutes;
