import React from 'react'
import { ContainerProfile } from './index';
import { useSelector } from 'react-redux';

export const Profile = () => {


    const { client } = useSelector(state => state);

    return (
        <ContainerProfile>
            <h3>Perfil: </h3>
            <hr />
            <div>
                <span>Nombre: <strong>{client.name}</strong> </span> 
                <span>Apellido: <strong>{client.lastName}</strong> </span> 
                <span>Edad: <strong>{client.age}</strong> </span> 
                <span>DNI: <strong>{client.dni}</strong> </span> 
            </div>
        </ContainerProfile>
    )
}
