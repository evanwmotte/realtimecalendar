import { auth, provider } from '../firebase'

const authService = {

    createUser: () => {
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
    },

    signIn: () => {
        auth.signInWithEmailAndPassword(userCredentials.email, userCredentials.password)
            .then((user) => {
                console.log(user)
                history.push('/home')
            })
            .catch((err) => {
                console.log(err.code)
                console.log(err.message)
            });
    },

    googleSignIn: async () => {
        await auth.signInWithPopup(provider)
            .then((user) => {
                console.log(user)
                history.push('/home')
            })
            .catch((err) => {
                console.log(err.code)
                console.log(err.message)
            })
    },

}