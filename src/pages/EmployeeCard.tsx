import React, {useEffect, useState} from 'react';
import '/src/App.css';
import {Link, useParams} from 'react-router-dom'
import checkWebsite from "../Utils/AppUtil";
import ButtonCustom from "../components/ButtonCustom";
import EmployeeEdit from "./EmployeeEdit";
import Loader from "../components/Loader";

interface Employee {
    name: string,
    email: string,
    phone: string,
    username: string,
    website: string,
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
                        <>
                            <div>
                                <p>
                                    name: {data.name}
                                </p>
                                <p>
                                    email: {data.email}
                                </p>
                                <p>
                                    phone: {data.phone}
                                </p>
                                <p>
                                    username: {data.username}
                                </p>
                                {checkWebsite(data.website).valueOf() ?
                                    <p>
                                        website: {data.website}
                                    </p>
                                    : null}
                            </div>
                            <div>
                                <ButtonCustom onClick={onclick} isDisabled={isEdit} buttonName={"Edit"}/>
                                <ButtonCustom onClick={null} isDisabled={!isEdit} buttonName={"Save"}/>
                            </div>
                        </>
                    )
                }
            </> :
            <Loader/>
    )
}
