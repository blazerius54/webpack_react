import React, {useEffect, useState} from 'react'
import '/src/App.css';

export default function EmployeeList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            // .then(json => console.log(json))
            .then(json => setData(json))
        }, [])

    return (
        <div>
            <h1>Employees</h1>
            <ul>
                {data.map(record => {
                    return <li key={record.id}>{record.name}</li>;
                })}
            </ul>
        </div>
    );
}
