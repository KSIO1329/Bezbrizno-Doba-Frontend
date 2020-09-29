const initState = {
    logged_in: false,
    email: "",
    password: ""
}

const authReducer = (state = initState, action) => {
    switch (action.type){
        case 'AUTH_LOG_IN':
            return {
                ...state,
                logged_in: action.status,
                email: action.email,
                password: action.password
            };
        case 'AUTH_LOG_OUT':
            return {
                ...state,
                logged_in: action.status
            };
        default:
            return state;
    }
}

export default authReducer;