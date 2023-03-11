import React, {useEffect, useState} from 'react';
import '/src/App.css';
import {Link, useParams} from 'react-router-dom'
import checkWebsite from "../Utils/AppUtil";
import ButtonEdit from "../components/ButtonEdit";
import ButtonSave from "../components/ButtonSave";
import EmployeeEdit from "./EmployeeEdit";

interface Employee {
    name: string,
    email: string,
    phone: string,
    username: string,
    website: string,
}

export default function EmployeeCard() {

    const {id} = useParams();
    const [data, setData] = useState<Employee| null>(null);
    const [isEdit, setEdit] = useState(false);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(json => setData(json))
    }, [id])

    return (
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
                    {
                        checkWebsite(data.website).valueOf() ?
                            <p>
                                website: {data.website}
                            </p>
                            : null
                    }
                </div>
            {/*<div>*/}
            {/*    <button onClick={onClickEditWrapper} disabled={isEdit}> Edit</button>*/}
            {/*    <button onClick={onClickSaveWrapper} disabled={!isEdit}>Save</button>*/}
            {/*</div>*/}
        </>
    );
}
