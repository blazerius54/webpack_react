import React, {useEffect, useState} from 'react';
import '/src/App.css';
import {useParams} from 'react-router-dom'

export default function EmployeeCard() {

    const {id} = useParams();
    const [data, setData] = useState([]);


    console.log(id)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(json => setData(json))
    }, [id])

    return (
        <div>
            <p><b> name:</b> {JSON.parse(JSON.stringify(data)).name} </p>
            <p><b> email: </b> {JSON.parse(JSON.stringify(data)).email} </p>
            <p><b> phone: </b> {JSON.parse(JSON.stringify(data)).phone} </p>
            <p><b> username: </b> {JSON.parse(JSON.stringify(data)).username} </p>
            {checkWebsite(JSON.parse(JSON.stringify(data)).website)}
        </div>
    );
}

function checkWebsite(website: string) {
    var regExp = new RegExp('^.*?\.org$');

    console.log(regExp.test(website))

    if (regExp.test(website)) {
        return <p><b> website: </b> {website} </p>
    }
}
