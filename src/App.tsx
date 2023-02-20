import React from 'react';
import '/src/App.css';
import EmployeeList from "./pages/EmployeeList";
import EmployeeCard from "./pages/EmployeeCard";
import {BrowserRouter, Route, Routes, Link} from '../node_modules/react-router-dom/dist/index';

export default function App() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<EmployeeList/>}></Route>
                    <Route path="/employee" element={<EmployeeCard/>}> </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

