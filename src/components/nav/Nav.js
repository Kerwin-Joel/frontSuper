import React from 'react'
import { ContainerNav } from './index';
import {
    Link
} from "react-router-dom";
import logo from '../../assets/img/logo.png';


export const Nav = () => {
    return (
        <ContainerNav>
            <div className="left">
                <img src={logo} alt="das" />
            </div>
            <div className="rigth">
                <ul>
                    <li>
                        <Link to="/client">
                            Crear
                        </Link>
                    </li>
                    <li>
                        <Link to="/clients">
                            Listar
                        </Link>
                    </li>
                    <li>
                        <Link to="/analytics">
                            Analíticas
                        </Link>
                    </li>
                </ul>
            </div>
        </ContainerNav>
    )
}
