import {
    GET_CURRENT_USER,
    LOGIN,
    LOGOUT
} from  "../actions/actionTypes"

const initialState = {
    user:null,
    error: null
}

const user = (state = initialState, {type, payload})=>{
    switch(type){
        case LOGIN:
            if(state.user) {return state}
            return{
                user:payload.user,
                error:payload.error,
            }
        break
        case LOGOUT: 
            return {user:null, error:null}
        break
        case GET_CURRENT_USER:
            if(state.user) {return state}
        break
        default: 
            return state
    }
}

export default user 