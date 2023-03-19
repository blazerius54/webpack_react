import React, {useEffect, useState} from 'react';
import '/src/app.css';
import {Link, useParams} from 'react-router-dom'
import checkWebsite from "../utils/appUtil";
import ButtonCustom from "../components/ButtonCustom";
import EmployeeEdit from "./EmployeeEdit";
import Loader from "../components/Loader";
import {Employee} from "./EmployeeCard";

interface EmployeeViewProps extends Employee{
    setEmployeeInfo: (param: keyof Employee, value: string) => void;
}

export default function EmployeeView({name, email, phone, username, website}: Employee) {


    return (
        <div>
            <p>
                name: {name}
            </p>
            <p>
                email: {email}
            </p>
            <p>
                phone: {phone}
            </p>
            <p>
                username: {username}
            </p>
            {checkWebsite(website) ?
                <p>
                    website: {website}
                </p>
                : null}
        </div>


    )
}
