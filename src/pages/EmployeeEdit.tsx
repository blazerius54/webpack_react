import React, {ChangeEvent, useEffect, useState} from 'react';
import '/src/app.css';
import {useNavigate, useParams} from 'react-router-dom'
import checkWebsite from "../utils/appUtil";
import ButtonCustom from "../components/ButtonCustom";
import {Employee} from "./EmployeeCard";


interface EmployeeEditProps extends Employee{
    setEmployeeInfo: (param: keyof Employee, value: string) => void;
}

const EmployeeEdit: React.FC<EmployeeEditProps> = ({name, email, phone, username, website}) => {

    const {id} = useParams();

    // const [inputName, setName] = useState(name);
    // const [inputEmail, setEmail] = useState(email);
    // const [inputPhone, setPhone] = useState(phone);
    // const [inputUsername, setUsername] = useState(username);
    // const [inputWebsite, setWebsite] = useState(website);

    function sendRequest() {
        const request = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            // body: JSON.stringify({
            //     name: inputName,
            //     email: inputEmail,
            //     phone: inputPhone,
            //     username: inputUsername,
            //     website: inputWebsite
            // })
        };
        fetch('https://jsonplaceholder.typicode.com/users/' + id, request)
            .then(response => response.json())
            // .then(json => setData(json));
        console.log(request)
    }

    const setName = (event: ChangeEvent<HTMLInputElement>) => {
        setEmployeeInfo('name', event.target.value)
    }

    return (
        <>
            <div>
                <p> name:<input name="name"
                                value={name}
                                onChange={setName}/>
                </p>
                {/*<p> email: <input name="email" value={email} onChange={(e) => {*/}
                {/*    setEmail(e.target.value)*/}
                {/*}}/>*/}
                {/*</p>*/}
                {/*<p> phone: <input name="phone" value={phone} onChange={(e) => {*/}
                {/*    setPhone(e.target.value)*/}
                {/*}}/>*/}
                {/*</p>*/}
                {/*<p> username: <input name="username" value={username} onChange={(e) => {*/}
                {/*    setUsername(e.target.value)*/}
                {/*}}/>*/}
                {/*</p>*/}
                {/*{*/}
                {/*    checkWebsite(website).valueOf() ?*/}
                {/*        <p>*/}
                {/*            website: <input name="website"*/}
                {/*                            value={website} onChange={(e) => {*/}
                {/*            setWebsite(e.target.value)*/}
                {/*        }}/>*/}
                {/*        </p>*/}
                {/*        : null*/}

                {/*}*/}
            </div>
        </>
    )
}
