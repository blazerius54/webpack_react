import React, {useEffect, useState} from 'react'
import '/src/App.css';
import {Link} from "react-router-dom";
import Loader from "../components/Loader";


export default function EmployeeList() {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => setData(json))
        setIsLoaded(true);
    }, [])

    return (
        isLoaded ?
            <div>
                <ul>
                    {data.map(record => (
                        <Link key={record.id} to={'/employee/' + record.id}>
                            <li>{record.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            :
            <Loader/>
        );
}
