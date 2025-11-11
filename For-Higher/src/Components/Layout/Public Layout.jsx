import React from 'react';
import { Outlet } from 'react-router-dom';
import './Public Layout.css';

const PublicLayout = () => {
    return (
        <div className="public-layout">
            <Outlet />
        </div>
    );
};

export default PublicLayout;