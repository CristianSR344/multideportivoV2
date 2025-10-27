"use client"

import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
    {
        name: 'Ene',
        Ingreso: 4000,
        Gasto: 2400
    },
    {
        name: 'Feb',
        Ingreso: 3000,
        Gasto: 1398
    },
    {
        name: 'Mar',
        Ingreso: 2000,
        Gasto: 9800
    },
    {
        name: 'Abr',
        Ingreso: 2780,
        Gasto: 3908
    },
    {
        name: 'May',
        Ingreso: 1890,
        Gasto: 4800
    },
    {
        name: 'Jun',
        Ingreso: 2390,
        Gasto: 3800
    },
    {
        name: 'Ago',
        Ingreso: 3490,
        Gasto: 4300
    },
    {
        name: 'Sep',
        Ingreso: 3490,
        Gasto: 4300
    },
    {
        name: 'Oct',
        Ingreso: 3490,
        Gasto: 4300
    },
    {
        name: 'Nov',
        Ingreso: 3490,
        Gasto: 4300
    },
    {
        name: 'Dec',
        Ingreso: 3490,
        Gasto: 4300
    },
];
// #endregion


const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className='txt-lg font-semibold'>Finanzas</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">

            
            <LineChart
                responsive
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20} />
                <YAxis width="auto" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                <Tooltip />
                <Legend align='center' verticalAlign='top'wrapperStyle={{paddingTop:"10px", paddingBottom:"30px"}} />
                <Line type="monotone" dataKey="Ingreso" stroke="#f0d0feff" strokeWidth={5} />
                <Line type="monotone" dataKey="Gasto" stroke="#fab3c2ff" strokeWidth={5} />
            </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default FinanceChart