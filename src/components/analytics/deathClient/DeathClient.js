import React from 'react'
import { ContainerDeath } from './index';
import { useSelector } from 'react-redux';

export const DeathClient = () => {


    const {client} = useSelector(state => state);
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const newYear = year + (70 - client.age);

    return (
        <ContainerDeath>
            <p>La fecha probable de su muerte es el: &nbsp; 
                <strong>{day}/{month}/{newYear}</strong>
            </p>
        </ContainerDeath>
    )
}
