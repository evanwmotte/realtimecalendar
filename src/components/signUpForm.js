import React from 'react'

const signUpForm = () => {
    return (
    <div>
                    <Button className={classes.button} onClick={createUser} color={'primary'}>Create Account</Button>
                    <Typography>Already have an account?</Typography>
                    <Button className={classes.button} onClick={switchCreateOrSignIn}>Sign In</Button>
                    <Button className={classes.button} onClick={googleSignIn}>Sign in with Google</Button>
                </div>
    )
}