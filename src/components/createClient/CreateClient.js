import React from 'react'
import { ContainerClient } from './index';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux'
import { addClientStore, addNewClient } from '../../actions/client';




export const CreateClient = () => {
    
    const [
        values,
        handleInputChange,
        reset
    ] = useForm({
        name: '',
        dni:'',
        lastName: '',
        age: '',
        bornDate: '',
    })

    const {name, lastName, age, bornDate, dni} = values;

    const dispatch = useDispatch()

    const handleEntryClick = () => {
        dispatch(addClientStore(values))
        dispatch(addNewClient())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEntryClick()
        reset()
    }

    

    return (
        <ContainerClient>
            <div>
                <h1>Crear cliente</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                    <label>Nombre :</label>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Ingrese su nombre"
                        onChange={handleInputChange}
                    />
                    <label>Apellido :</label>
                    <input 
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder="Ingrese su apellido"
                        onChange={handleInputChange}
                        
                    />
                    <label>Edad :</label>
                    <input 
                        type="number"
                        name="age"
                        value={age}
                        placeholder="Ingrese su edad"
                        onChange={handleInputChange}

                    />
                    <label>DNI :</label>
                    <input 
                        type="number"
                        name="dni"
                        value={dni}
                        placeholder="Ingrese su dni"
                        onChange={handleInputChange}

                    />
                    <label>Fecha de nacimiento :</label>
                    <input 
                        type="date"
                        name="bornDate"
                        value={bornDate}
                        placeholder="Fecha nacimiento"
                        onChange={handleInputChange}
                    />
                    <button type="submit">
                        Crear cliente
                    </button>
                </form>
            </div>
        </ContainerClient>
    )
}
