import {
    LOGIN,LOGOUT

} from './actionTypes'

export const handleAuthenticationErrors = err =>{
    return{
        type:LOGIN,
        payload: {user: null, error:err}
    }
}

export const handleLogin = user =>{
    console.log(user,"redux")
    return{
        type:LOGIN,
        payload:{user:user, error:null}
    }
}

export const handleLogout=()=>{
    return{
        type:LOGOUT,
    }
}