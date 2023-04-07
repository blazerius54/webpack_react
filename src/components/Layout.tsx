import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Box} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";

export default function Layout() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                            <Link  to={'/'} style={{ textDecoration: 'none', color:"inherit"}}>
                                Employees
                            </Link>
                        </Typography>
                </AppBar>
            </Box>

            <Outlet/>

        </>
    );
}
