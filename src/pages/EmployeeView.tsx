import React, {useEffect, useState} from 'react';
import '/src/app.css';
import {Link, useParams} from 'react-router-dom'
import checkWebsite from "../utils/appUtil";
import ButtonCustom from "../components/ButtonCustom";
import EmployeeEdit from "./EmployeeEdit";
import Loader from "../components/Loader";
import {Employee} from "./EmployeeCard";
import {Box} from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

interface EmployeeViewProps extends Employee {
    setEmployeeInfo: (param: keyof Employee, value: string) => void;
}

export default function EmployeeView({name, email, phone, username, website}: Employee) {


    return (
        <div>
            <Box sx={{minWidth: 275}}>
                <Card>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        {username}
                    </Typography>
                    <Typography variant="body2">
                        {phone}
                    </Typography>
                    <Typography variant="body2">
                        {email}
                    </Typography>

                    <Typography variant="body2">
                        {checkWebsite(website) ?
                            <p>
                                website: {website}
                            </p>
                            : null}
                    </Typography>

                </Card>
            </Box>
        </div>
    )
}
