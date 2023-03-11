import React, {useEffect, useState} from 'react';
import '/src/App.css';
import {useParams} from 'react-router-dom'
import checkWebsite from "../Utils/AppUtil";
import ButtonEdit from "../components/ButtonEdit";
import ButtonSave from "../components/ButtonSave";
import EmployeeCard from "./EmployeeCard";

interface Employee {
    name: string,
    email: string,
    phone: string,
    username: string,
    website: string
}

export default function EmployeeEdit(props: any) {

    const {id} = useParams();
    const [data, setData] = useState<Employee | null>(null);

    const [inputName, setName] = useState(data.name);
    const [inputEmail, setEmail] = useState(data.email);
    const [inputPhone, setPhone] = useState(data.phone);
    const [inputUsername, setUsername] = useState(data.username);
    const [inputWebsite, setWebsite] = useState(data.website);

    function sendRequest() {
        const request = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: inputName,
                email: inputEmail,
                phone: inputPhone,
                username: inputUsername,
                website: inputWebsite
            })
        };
        fetch('https://jsonplaceholder.typicode.com/users/' + id, request)
            .then(response => response.json())
            .then(json => setData(json));
        console.log(request)
    }

    // useEffect(() => {
    //     const request = {
    //         method: 'PUT',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({title: 'React Hooks PUT Request Example'})
    //     };
    //     fetch('https://jsonplaceholder.typicode.com/users/' + id, request)
    //         .then(response => response.json())
    //         .then(json => setData(json));
    // }, [id])

    let inputUser = JSON.parse(JSON.stringify(props));

    return (
        <>
            <div>
                <p> name:<input name="name" defaultValue={inputUser.name}/></p>
                <p> email: <input name="email" defaultValue={inputUser.email}/></p>
                <p> phone: <input name="phone" defaultValue={inputUser.phone}/></p>
                <p> username: <input name="username" defaultValue={inputUser.username}/></p>
                {
                    checkWebsite(inputUser.website).valueOf() ?
                        <p>
                            website: <input name="username"
                                            defaultValue={props.website}/>
                        </p>
                        : null

                }
            </div>
            <div>
                <button> Edit</button>
                <button>Save</button>
            </div>
        </>
    );
}
