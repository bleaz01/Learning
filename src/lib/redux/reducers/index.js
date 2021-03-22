
import {createStore} from "redux";

function reducer(state = {items:[]}, action){
    switch(action.type){
        case "USER_LOGIN":
            return state
        default:
            return  state
    }
}

export function userLogin(item){
    return{
        type:"USER_LOGIN",
        payload: item
    };
}

export const store = createStore(reducer)