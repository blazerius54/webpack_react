import React, {useEffect, useState} from 'react';
import '/src/app.css';
import {Link, useParams} from 'react-router-dom'
import checkWebsite from "../utils/appUtil";
import ButtonCustom from "../components/ButtonCustom";
import Loader from "../components/Loader";
import EmployeeView from "./EmployeeView";

export interface Employee {
    name: string,
    email: string,
    phone: string,
    username: string,
    website: string,
    setEmployeeInfo: any,
}

export default function EmployeeCard() {

    const {id} = useParams();
    const [data, setData] = useState<Employee | null>(null);
    const [isEdit, setEdit] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(json => setData(json))
        setIsLoaded(true);
    }, [id])

    const onclick = () => {
        setEdit(true)
    }

    const setEmployeeInfo = (param: keyof Employee, value: string) => {
        setData((prev) => (
            {
            [param] : value}
            ))
    }
    return (
        isLoaded ?
            <>
                {isEdit ? <EmployeeEdit
                        email={data.email}
                        name={data.name}
                        phone={data.phone}
                        username={data.username}
                        website={data.website}/>
                    :
                    data && (
                        <EmployeeView email={data.email}
                                      name={data.name}
                                      phone={data.phone}
                                      username={data.username}
                                      website={data.website} setEmployeeInfo=""/>
                    )
                }
                <div>
                    <ButtonCustom onClick={onclick} isDisabled={isEdit} buttonName={"Edit"}/>
                    <ButtonCustom onClick="" isDisabled={!isEdit} buttonName={"Save"}/>
                </div>
            </> :
            <Loader/>
    )
}
