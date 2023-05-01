import React, {ChangeEvent} from 'react';
import '/src/app.css';
import {Employee} from "./EmployeeCard";
import {Box} from "@mui/material";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

interface EmployeeEditProps extends Employee {
    setEmployeeInfo: (param: keyof Employee, value: string) => void;
}

const EmployeeEdit: React.FC<EmployeeEditProps> = ({
                                                       name, email, phone, username, website,
                                                       setEmployeeInfo
                                                   }) => {

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
                <Box component="form"
                     sx={{
                         '& .MuiTextField-root': { m: 1, width: '25ch' },
                     }}
                     noValidate
                     autoComplete="off">
                    <Card>
                        <TextField
                            id="outlined-helperText"
                            label="Name"
                            defaultValue={name}
                            onChange={setName}
                        />
                        <TextField
                            id="outlined-helperText"
                            label="Email"
                            defaultValue={email}
                            onChange={setEmail}
                        />
                        <TextField
                            id="outlined-helperText"
                            label="Phone"
                            defaultValue={phone}
                            onChange={setPhone}
                        />
                        <TextField
                            id="outlined-helperText"
                            label="Username"
                            defaultValue={username}
                            onChange={setUsername}
                        />
                        <TextField
                            id="outlined-helperText"
                            label="website"
                            defaultValue={website}
                            onChange={setWebsite}
                        />
                    </Card>
                </Box>
            </div>
        </>
    )
}

export default EmployeeEdit;
