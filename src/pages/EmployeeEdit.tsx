import React, {useEffect, useState} from 'react';
import '/src/App.css';
import {useNavigate, useParams} from 'react-router-dom'
import checkWebsite from "../Utils/AppUtil";
import ButtonCustom from "../components/ButtonCustom";

interface Employee {
    name: string,
    email: string,
    phone: string,
    username: string,
    website: string
}

export default function EmployeeEdit({name, email, phone, username, website}: Employee) {

    const {id} = useParams();
    // const {save} = useParams()
    const [data, setData] = useState<Employee | null>(null);
    const navigate = useNavigate();

    const [inputName, setName] = useState(name);
    const [inputEmail, setEmail] = useState(email);
    const [inputPhone, setPhone] = useState(phone);
    const [inputUsername, setUsername] = useState(username);
    const [inputWebsite, setWebsite] = useState(website);

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

    const onclick = () => {
        sendRequest();
        navigate(0);
    }


    return (
        <>
            <div>
                <p> name:<input name="name" defaultValue={name} onChange={(e) => {
                    setName(e.target.value)
                }}/></p>
                <p> email: <input name="email" defaultValue={email} onChange={(e) => {
                    setEmail(e.target.value)
                }}/></p>
                <p> phone: <input name="phone" defaultValue={phone} onChange={(e) => {
                    setPhone(e.target.value)
                }}/></p>
                <p> username: <input name="username" defaultValue={username} onChange={(e) => {
                    setUsername(e.target.value)
                }}/></p>
                {
                    checkWebsite(website).valueOf() ?
                        <p>
                            website: <input name="website"
                                            defaultValue={website} onChange={(e) => {
                            setWebsite(e.target.value)
                        }}/></p>
                        : null

                }
            </div>
            <div>
                <ButtonCustom onClick={null} isDisabled={true} buttonName={"Edit"}/>
                <ButtonCustom onClick={onclick} isDisabled={false} buttonName={"Save"}/>
            </div>
        </>
    )
}
