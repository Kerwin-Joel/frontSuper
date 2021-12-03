import { types } from '../types/types';
import { collection, addDoc,getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';



export const addClientStore = (client) => {
    return {
        type: types.setClient,
        payload: client
    }
}
export const addNewClient = () => {
    return async(dispatch,getState) => {

        const client = getState().client
        await addDoc(collection(db, 'General', "register/clients"),client)

    }
}


export const addClientsStore = (client) => {
    return {
        type: types.setClients,
        payload: client
    }
}
export const getClients = () => {
    return async(dispatch) => {
        const notesSnap = await getDocs(collection(db, `General/register/clients`));
        const clients = [];
        notesSnap.forEach((doc) => {
            const data = doc.data();
            clients.push(data);
        });
        dispatch(addClientsStore(clients));
    }
}

export const setClientId = (client) => {
    return {
        type: types.idClient,
        payload: client
    }
}

export const getClientId = (id) => {
    return async(dispatch,getState) => {
        const clients = getState().clients;
        const clientCurrent = clients.filter(client => client.dni === id);
        dispatch(setClientId(...clientCurrent));
    }
}