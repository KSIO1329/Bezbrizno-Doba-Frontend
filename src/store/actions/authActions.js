import axios from 'axios';
export const logIn = (auth) => {
    return (dispatch, getState) => {
        axios.post("/api/login.php",{},{
                headers:{
                    Email: auth.email,
                    Password: auth.password
                }
        }).then(res =>{
            dispatch({ type: 'AUTH_LOG_IN', email: auth.email, password: auth.password, status: res.data})
        }).catch((err) =>{
            dispatch({ type: 'AUTH_ERROR', err});
        })
    }
}
export const logOut = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'AUTH_LOG_OUT', status: false});
    }
}
