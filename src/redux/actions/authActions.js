export const logInUserRedux = (user) => {
    return {
        type: 'LOGIN',
        payload: user
    }
}