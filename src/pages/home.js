import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

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
            <h1>You are logged in</h1>
            <Button className={classes.button} onClick={logOut}>Log Out</Button>
        </div>
    )
}