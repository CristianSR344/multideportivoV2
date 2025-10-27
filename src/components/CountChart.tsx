"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
    {
        name: 'Total',
        count: 106,
        fill: "white",
    },
    {
        name: 'Mujeres',
        count: 53,
        fill: '#f0d0feff',
    },
    {
        name: 'Hombres',
        count: 53,
        fill: '#c2fad1ff',
    }
];


const CountChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className='txt-lg font-semibold'>Socios</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* CHART */}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart
                        responsive
                        cx="50%"
                        cy="50%"
                        barSize={32}
                        data={data}
                        innerRadius="40%"
                        outerRadius="100%"
                    >
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-fondoVerdeLight rounded-full" />
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>Hombres (55%)</h2>

                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-fondoMoradoLight rounded-full" />
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>Mujeres (55%)</h2>

                </div>
            </div>
        </div>
    );
};

export default CountChart