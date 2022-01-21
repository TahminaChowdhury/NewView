import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, Route, useLocation } from 'react-router';
import useAuth from '../../../Hook/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <div className='text-center'>
            <Spinner animation="grow" />
        </div>
    }

    return user?.email ? children : <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;