import React, {useEffect, useState} from 'react';
import '/src/App.css';

export default function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            // .then(json => console.log(json))
            .then(json => setData(json))
        })

    return (
        <div>
            <h1>Employess</h1>
            <ul>
                {data.map(record => {
                    return <li>{record.name}</li>;
                })}
            </ul>
        </div>
    );
}

// Compiled with problems:X
//
// ERROR in ./src/App.css 1:3
//
// Module parse failed: Unexpected token (1:3)
// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
//     > h1 {
// |     text-align:center;
// | }
