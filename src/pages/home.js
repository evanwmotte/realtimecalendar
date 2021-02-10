import React, { useState } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import NavigationDrawer from '../components/navigation';
import { db } from '../firebase'
import { MonthView } from '../components/calendar';

const useStyles = makeStyles((theme) => ({
    button: {
        color: 'purple',
        background: 'white',
        borderRadius: 10,
        margin: '20px 0px 20px 0px',
        '&:hover': {
            transition: 'all .5s',
            backgroundColor: 'black',
            color: 'purple',
            borderRadius: 7,
            boxShadow: '2px 2px 2px black',
        }
    },
    paper: {
        width: '99%',
        height: '50px',
        marginTop: '-60px',
        marginBottom: '40px'
    },
    calendarView: {
        position: 'absolute',
        marginTop: '40px',
        height: '80%',
        width: '80%'
    }
}));

export const Home = () => {

    const history = useHistory();

    const classes = useStyles();

    const logOut = () => {
        auth.signOut()
            .then(() => {
                console.log("signed out")
                history.push('/')
            }).catch((err) => {
                console.log(err)
                console.log(err.message)
                console.log(err.code)
            });
    }

    return (
        <div>
                <NavigationDrawer>
                    <Button className={classes.button} onClick={logOut}>Log Out</Button>
                </NavigationDrawer>
        </div>
    )
}