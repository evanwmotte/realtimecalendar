import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Paper, Typography, IconButton, InputAdornment, InputLabel, OutlinedInput, FormControl } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { auth, provider } from '../firebase';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    button: {
        color: 'purple',
        background: 'white',
        borderRadius: 10,
        margin: '20px 0px 20px 0px',
        '&:hover': {
            transition: 'all .5s',
            backgroundColor: 'white',
            color: 'purple',
            borderRadius: 7,
            boxShadow: '2px 2px 2px black',
        }
    },
    paper: {
        padding: '150px',
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#404040',
        boxShadow: '5px 5px 5px black',
        borderRadius: 10,
        width: '10%'
    },
    textField: {
        width: '400px',
        margin: "normal",
        marginLeft: '-100px'
    },
    title: {
        position: 'fixed',
        top: '0%',
        left: '0%',
        backgroundColor: '#008080',
        color: 'white',
        padding: '13px',
        width: '94.7%',
        textAlign: 'center',
        borderRadius: '10px 10px 0px 0px'
    },
    btnContainer: {
        width: '100%',
    }
}));

export const Login = () => {

    const [userCredentials, setUserCredentials] = useState({ email: "", password: "" })
    const [createOrSignIn, setCreateOrSignIn] = useState(false)
    const [showPassword, setShowPassword] = useState(true)

    const history = useHistory();

    const classes = useStyles();

    const createUser = () => {
        auth.createUserWithEmailAndPassword(userCredentials.email, userCredentials.password)
            .then((user) => {
                console.log(user)
                history.push('/home')
            })
            .catch((err) => {
                if (err.message == "The email address is already in use by another account.") {
                    alert("email already in use")
                }
                console.log(err.code)
                console.log(err.message)
            })
        setUserCredentials({ email: "", password: "" })
    }

    const signIn = () => {
        auth.signInWithEmailAndPassword(userCredentials.email, userCredentials.password)
            .then((user) => {
                console.log(user)
                history.push('/home')
            })
            .catch((err) => {
                console.log(err.code)
                console.log(err.message)
            });
    }

    const googleSignIn = () => {
        auth.signInWithPopup(provider)
            .then((user) => {
                console.log(user)
                history.push('/home')
            })
            .catch((err) => {
                console.log(err.code)
                console.log(err.message)
            })
    }

    const switchCreateOrSignIn = () => {
        setCreateOrSignIn(!createOrSignIn)
        setUserCredentials({ email: "", password: "" })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Paper className={classes.paper}>
            <Typography className={classes.title}>
                {!createOrSignIn ? 'Create an Account!' : 'Sign In!'}
            </Typography>
            <TextField
                className={classes.textField}
                variant={'outlined'}
                onChange={e => setUserCredentials({ ...userCredentials, email: e.target.value })}
                value={userCredentials.email}
                id="standard-basic"
                label="Enter Email" />
            <br />
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={userCredentials.password}
                    onChange={e => setUserCredentials({ ...userCredentials, password: e.target.value })}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}
                />
            </FormControl>
            <br />
            {!createOrSignIn ?
                <div>
                    <Button className={classes.button} onClick={createUser} color={'primary'}>Create Account</Button>
                    <Typography>Already have an account?</Typography>
                    <Button className={classes.button} onClick={switchCreateOrSignIn}>Sign In</Button>
                    <Button className={classes.button} onClick={googleSignIn}>Sign in with Google</Button>
                </div>
                :
                <div>
                    <Button className={classes.button} onClick={signIn}>Sign In</Button>
                    <Typography>Don't have an account?</Typography>
                    <Button className={classes.button} onClick={switchCreateOrSignIn}>Create Account</Button>
                    <Button className={classes.button} onClick={googleSignIn}>Sign in with Google</Button>
                </div>
            }
        </Paper>
    )
}