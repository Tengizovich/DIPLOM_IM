import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import 'Routes' and 'Route' from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { Shop_Route } from '../utils/consts';
import { Context } from '../index';

const AppRouter = () => {
    const { user } = useContext(Context);

    console.log(user);

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            <Route path={Shop_Route} element={<shop />} />
        </Routes>
    );
};

export default AppRouter;