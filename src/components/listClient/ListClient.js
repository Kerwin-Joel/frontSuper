import React, { useState, useEffect } from 'react'
import { ContainerList } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../../actions/client';


export const ListClient = () => {


    const dispatch = useDispatch();
    const {clients} = useSelector(state => state)
    
    // const datos = [
    //     {
    //         id: 1,
    //         name: 'Juan',
    //         lastName: 'Perez',
    //         age: 37,
    //         bornDate: '10-10-1998',
    //         death:''
    //     },
    //     {
    //         id: 2,
    //         name: 'Julio',
    //         lastName: 'Vilchez',
    //         age: 28,
    //         bornDate: '12-12-1998',
    //         death:''
    //     },
    // ]

    // const [clients,setClients] = useState([])
    const [average, setAverage] = useState([])
    const [deviation, setDeviation] = useState([])
    

    useEffect(() => {
        
        dispatch(getClients());

        if(clients[0].name !== ''){
            const averageAge = clients.reduce((acc, client) => {
                return acc + client.age
            }, 0) / clients.length
            setAverage(averageAge.toFixed(2))

            //Desviacion standar
            let arr = clients.map((k)=>(k.age - averageAge) ** 2)
            let sum = arr.reduce((acc, curr)=> acc + curr);
            let variance = sum / arr.length
            console.log(clients)

            return setDeviation(Math.sqrt(variance).toFixed(2))
        }
    }, [clients,dispatch])

    return (
        <ContainerList>
            <div className="left">
                <h2>Lista de Clientes :</h2>
                <div className="left__scroll">
                    {
                        clients.map(client => {
                            return (
                                <div className="left__card" key={client.dni}>
                                    <p className="left__item"><strong>DNI:</strong> {client?.dni}</p>
                                    <p className="left__item"><strong>Nombre:</strong> {client?.name}</p>
                                    <p className="left__item"><strong>Edad:</strong> {client?.age}</p>
                                    <hr />  
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="rigth">
                <div className="rigth__top">
                    <h2>Edad promedio de Clientes :</h2>
                    <hr />
                    <p>La edad promedio es de: <strong>{average}</strong></p>
                </div>
                <br />
                <div className="rigth__bottom">
                    <h2>Desviacion standar entre edades :</h2>
                    <hr />
                    <p>El valor de la desviación estándar poblacional es de <strong>{deviation}</strong> años.</p>
                </div>
            </div>
        </ContainerList>
    )
}
