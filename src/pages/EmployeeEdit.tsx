import React, {ChangeEvent} from 'react';
import '/src/app.css';
import {Employee} from "./EmployeeCard";

interface EmployeeEditProps extends Employee{
    setEmployeeInfo: (param: keyof Employee, value: string) => void;
}

const EmployeeEdit: React.FC<EmployeeEditProps> = ({name, email, phone, username, website,
                                                       setEmployeeInfo}) => {

    const setName = (event: ChangeEvent<HTMLInputElement>) => {
        setEmployeeInfo('name', event.target.value)
    }

    const setEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmployeeInfo('email', event.target.value)
    }

    const setPhone = (event: ChangeEvent<HTMLInputElement>) => {
        setEmployeeInfo('phone', event.target.value)
    }

    const setUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setEmployeeInfo('username', event.target.value)
    }

    const setWebsite = (event: ChangeEvent<HTMLInputElement>) => {
        setEmployeeInfo('website', event.target.value)
    }

    return (
        <>
            <div>
                <p> name:<input name="name"
                                value={name}
                                onChange={setName}/>
                </p>
                <p> email:<input name="email"
                                value={email}
                                onChange={setEmail}/>
                </p>
                <p> phone:<input name="phone"
                                value={phone}
                                onChange={setPhone}/>
                </p>
                <p> username:<input name="username"
                                value={username}
                                onChange={setUsername}/>
                </p>
                <p> website:<input name="website"
                                    value={website}
                                    onChange={setWebsite}/>
                </p>
            </div>
        </>
    )
}

export default EmployeeEdit;
