import React, {useEffect, useState} from 'react';
import '/src/App.css';
import {Link, useParams} from 'react-router-dom'
import checkWebsite from "../Utils/AppUtil";
import ButtonEdit from "../components/ButtonEdit";
import ButtonSave from "../components/ButtonSave";
import EmployeeEdit from "./EmployeeEdit";

export default function EmployeeCard() {

    const {id} = useParams();
    const [data, setData] = useState([]);
    const [isEdit, setEdit] = useState(false);

    const [inputName, setName] = useState(JSON.parse(JSON.stringify(data)).name);
    const [inputEmail, setEmail] = useState(JSON.parse(JSON.stringify(data)).email);
    const [inputPhone, setPhone] = useState(JSON.parse(JSON.stringify(data)).phone);
    const [inputUsername, setUsername] = useState(JSON.parse(JSON.stringify(data)).username);
    const [inputWebsite, setWebsite] = useState(JSON.parse(JSON.stringify(data)).website);

    let user = null;
    user = JSON.parse(JSON.stringify(data));

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(json => setData(json))
    }, [id])

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


   function onClickSaveWrapper(){
        sendRequest();
        setEdit(false)
    }

    function onClickEditWrapper(){
        setEdit(true)
    }

    return (
        <>
            {isEdit.valueOf() ?
                <div>
                    <p> name:<input name="name" defaultValue={user.email} onChange={(e) => {
                        setName(e.target.value)
                    }}/></p>
                    <p> email: <input name="email" defaultValue={user.email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/></p>
                    <p> phone: <input name="phone" defaultValue={user.phone} onChange={(e) => {
                        setPhone(e.target.value)
                    }}/></p>
                    <p> username: <input name="username" defaultValue={user.username} onChange={(e) => {
                        setUsername(e.target.value)
                    }}/></p>
                    {
                        checkWebsite(user.website).valueOf() ?
                            <p>
                                website: <input name="website"
                                                defaultValue={user.website} onChange={(e) => {
                                setWebsite(e.target.value)
                            }}/></p>
                            : null

                    }
                </div>
                // <EmployeeEdit name={user.name}
                //               email={user.email}
                //               phone={user.phone}
                //               username={user.username}
                //               website={user.website}/>

                :
                <div>
                    <p>
                        name: {user.name}
                    </p>
                    <p>
                        email: {user.email}
                    </p>
                    <p>
                        phone: {user.phone}
                    </p>
                    <p>
                        username: {user.username}
                    </p>
                    {
                        checkWebsite(user.website).valueOf() ?
                            <p>
                                website: {user.website}
                            </p>
                            : null
                    }
                </div>
            }
            <div>
                <button onClick={onClickEditWrapper} disabled={isEdit}> Edit</button>
                <button onClick={onClickSaveWrapper} disabled={!isEdit}>Save</button>
            </div>
        </>
    );
}
