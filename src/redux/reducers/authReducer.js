const initialState = {
    user: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            const { user } = action.payload;
            return {
                user: {
                    name: user.displayName,
                    userId: user.uid,
                    email: user.email
                }
            }
        }
        default: {
            return state
        }
    }
}

export default userReducer;