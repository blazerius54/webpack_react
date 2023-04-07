import React, {useEffect, useState} from 'react'
import '/src/app.css';
import {Link} from "react-router-dom";
import Loader from "../components/Loader";
import {List, ListItemText} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";


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
                <List component="nav">
                    {data.map(record => (
                        <ListItem button component={Link} to={'/employee/' + record.id}>
                            <ListItemText primary={record.name}/>
                        </ListItem>
                    ))}
                </List>
            </div>
            :
            <Loader/>
    );
}
