import React from 'react';
import '/src/app.css';
import {Link, Outlet} from "react-router-dom";

export default function Layout() {

    return (
        <>
            <Link to={'/'}>
                <h1>Employees</h1>
            </Link>

            <Outlet/>
        </>
    );
}
