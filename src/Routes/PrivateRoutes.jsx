import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from './../Providers/AuthProvider';
import Loader from './../Pages/Shared/Loader/Loader';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user , loading } = useContext(AuthContext)
    
    if(loading) {
        return <Loader></Loader>
    }
    if(user) {
        return children
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
};

export default PrivateRoutes;