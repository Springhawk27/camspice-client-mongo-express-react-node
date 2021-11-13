import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import Spinner from '../Spinner/Spinner';

const AdminRoute = ({ children, ...rest }) => {

    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                // auth.user
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;