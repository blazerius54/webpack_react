import React, {useEffect, useState} from 'react';
import '/src/app.css';
import {useParams} from 'react-router-dom'
import ButtonCustom from "../components/ButtonCustom";
import Loader from "../components/Loader";
import EmployeeView from "./EmployeeView";
import EmployeeEdit from './EmployeeEdit';
import {Button} from "@mui/material";

export interface Employee {
    name: string,
    email: string,
    phone: string,
    username: string,
    website: string
}

export default function EmployeeCard() {

    const {id} = useParams();
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [isEdit, setEdit] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(json => {
                setEmployee(json)
                setIsLoading(false);
            })
    }, [id])

    function saveEmployee() {
        setIsLoading(true);
        const request = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee)
        };
        fetch('https://jsonplaceholder.typicode.com/users/' + id, request)
            .then(response => response.json())
            .then(json => {
                setEmployee(json)
                setIsLoading(false);
                setEdit(false);
            });
    }

    const onclick = () => {
        setEdit(true)
    }

    const setEmployeeInfo = (param: keyof Employee, value: string) => {
        setEmployee((prev) => ({
            ...prev,
            [param]: value
        }))
    }

    return (
        !isLoading ?
            <>
                {isEdit ? (
                        <EmployeeEdit
                            email={employee.email}
                            name={employee.name}
                            phone={employee.phone}
                            username={employee.username}
                            website={employee.website}
                            setEmployeeInfo={setEmployeeInfo}
                        />
                    ) :
                    employee && (
                        <EmployeeView email={employee.email}
                                      name={employee.name}
                                      phone={employee.phone}
                                      username={employee.username}
                                      website={employee.website}/>
                    )
                }
                <div>
                    <Button variant="contained" disabled={isEdit} onClick={onclick}>Edit</Button>
                    <Button variant="contained" disabled={!isEdit} onClick={saveEmployee}>Save</Button>
                </div>
            </> :
            <Loader/>
    )
}
