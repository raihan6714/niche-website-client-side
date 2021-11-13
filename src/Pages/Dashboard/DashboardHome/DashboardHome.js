import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div className="d-flex justify-content-center">
            <img className="img-fluid w-40" src={user?.photoURL} alt="Third slide" />
            <h2 className=" text-danger mt-4 p-2">Wellcome {user?.displayName}</h2>
        </div>
    );
};

export default DashboardHome;