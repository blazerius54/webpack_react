import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '/src/App.css';
import EmployeeList from "./pages/EmployeeList";
import EmployeeCard from "./pages/EmployeeCard";
import Layout from "./components/Layout";

export default function App() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<EmployeeList/>}/>
                    <Route path="employee/:id" element={<EmployeeCard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

