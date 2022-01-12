import React from 'react';
import { Navigate , Route, useLocation } from 'react-router';
import useAuth from '../../../Hook/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    return user?.email ? children : <Navigate to ="/login" state={{ from: location }}/>
};

export default PrivateRoute;