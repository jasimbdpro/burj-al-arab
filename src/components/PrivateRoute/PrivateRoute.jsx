import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ Component }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        console.log(loggedInUser)
        if (!loggedInUser.name) {
            navigate('/login', { replace: true, state: { from: location } })
        }
    }, [location, navigate]);
    return loggedInUser.name ? <Component /> : null;
};

export default PrivateRoute;