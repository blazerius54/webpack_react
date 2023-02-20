import React, {useEffect, useState} from 'react';
import '/src/App.css';

export default function EmployeeCard() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            // .then(json => console.log(json))
            .then(json => setData(json))
        }, [])

    return (
        <div>
            <p> <b> name:</b> {JSON.parse(JSON.stringify(data)).name} </p>
            <p> <b> email: </b> {JSON.parse(JSON.stringify(data)).email} </p>
            <p> <b> phone: </b> {JSON.parse(JSON.stringify(data)).phone} </p>
            <p> <b> username: </b> {JSON.parse(JSON.stringify(data)).username} </p>
            {checkWebsite(JSON.parse(JSON.stringify(data)).website)}
        </div>
    );
}

function checkWebsite(website: String) {
    if (website == 'hildegard.org'){
        return <p> <b> website: </b> {website} </p>
    }
}
