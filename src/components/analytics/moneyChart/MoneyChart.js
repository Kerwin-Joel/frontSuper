import React from 'react'
import { ContainerLife } from './index';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Grafico de las ingresos y egresos del cliente',
        },
    }
};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];


export const data = {
    labels,
    datasets: [
        {
            label: 'Ingresos',
            data: [5, 6, 7], //aqui importaremos un array con los ingresos del cliente
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Egresos',
            data: [51, 16, 47,61, 116, 47], //aqui importaremos un array con los egresos del cliente
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};


export const MoneyChart = () => {
    return (
        <ContainerLife>
            <Bar options={options} data={data}  />
        </ContainerLife>
    )
}
