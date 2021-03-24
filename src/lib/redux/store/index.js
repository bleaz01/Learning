import {createStore,compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import reducers from "../reducers"


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__|| compose

export default function configStore(){
    return createStore(
        reducers,
        composeEnhancer(applyMiddleware(thunk))

    );
}