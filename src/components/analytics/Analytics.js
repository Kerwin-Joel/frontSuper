import React from 'react'
import { ContainerAnalytics } from './index';
import { Profile } from './profile/Profile';
import { MoneyChart } from './moneyChart/MoneyChart';
import { DeathClient } from './deathClient/DeathClient';
import lupa from './assets/img/buscar.png';
import { getClientId } from '../../actions/client';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';



export const Analytics = () => {

    const [ values,handleInputChange ] = useForm({dni: '',})
    const {dni} = values;

    const dispatch = useDispatch()


    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getClientId(dni))
    }

    return (
        <ContainerAnalytics>
            <div className="container-search">
                <h1 htmlFor="">Buscar Cliente</h1>
                <div className="search">
                    <input 
                        name="dni" 
                        value={dni} 
                        type="text" 
                        placeholder="Ingrese DNI" 
                        onChange={handleInputChange}
                        />
                    <img src={lupa} alt="" onClick={handleSearch}/>
                </div>
            </div>
            <hr />

            <div className="container">
                <div className="left">
                    <Profile />
                    <br />
                    <DeathClient/>
                </div>
                <br />
                <MoneyChart/>
            </div>
        </ContainerAnalytics>
    )
}
