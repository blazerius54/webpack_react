import React, {useEffect, useState} from 'react'
import '/src/App.css';
import {Link} from "react-router-dom";


export default function EmployeeList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => setData(json))
        }, [])

    return (
        <div>
            <ul>
                {data.map(record => (
                    <Link  key={record.id} to={'/employee/' + record.id}>
                        <li>{record.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
