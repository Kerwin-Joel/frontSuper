import { types } from '../types/types';

const initialState = {
    name:'',
    dni:'',
    lastName:'',
    age:'',
    bornDate:'',
}

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setClient:
            return {
                ...state,
                ...action.payload
            }
        case types.idClient:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export const clientsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.setClients:
            return [...action.payload]
        default:
            return [state];
    }
}
