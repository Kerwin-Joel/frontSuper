import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { clientReducer, clientsReducer } from "../reducers/clientReducer";

const composeEnhancers = 
    (typeof window !== "undefined" 
        && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) 
        ||
    compose;

const reducers = combineReducers({
    client: clientReducer,
    clients: clientsReducer,
    clientId: clientReducer
})

export const store =  createStore(reducers, composeEnhancers(applyMiddleware(thunk)));