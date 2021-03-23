
import { combineReducers, createStore } from "redux";
import user from "./user";

function reducer(state ={items: [] }, action){
    switch(action.type){
        case "LOGIN":
        if(state.user) {return state}
        return{
            user:action.payload.user,
            error:action.payload.error,
        }
        case "LOGOUT": 
            return {user:null, error:null}
        
        default: 
            return state;
    }
}

export const handleLogin = user =>{
    console.log(user,"redux")
    return{
        type:"LOGIN",
        payload:{user:user, error:null}
    }
}
export const handleLogout=()=>{
    return{
        type:"LOGOUT",
    }
}


export const store = createStore(
    reducer,

)
// export default reducers