"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
    {
        name: 'Lunes',
        Asistio: 40,
        Falto: 20,
    },
    {
        name: 'Mar',
        Asistio: 30,
        Falto: 18,
    },
    {
        name: 'Mie',
        Asistio: 20,
        Falto: 90,
    },
    {
        name: 'Jue',
        Asistio: 20,
        Falto: 38,
    },
    {
        name: 'Vie',
        Asistio: 10,
        Falto: 40,
    },
    {
        name: 'Sab',
        Asistio: 20,
        Falto: 30,
    },
    {
        name: 'Dom',
        Asistio: 30,
        Falto: 40,
    },
];

const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className="flex justify-between items-center">
                <h1 className='txt-lg font-semibold'>Asistencia</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>

            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    responsive
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
                    <Legend align='left' verticalAlign='top'wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}} />
                    <Bar dataKey="Asistio" fill="#c2fad1ff" legendType='circle' radius={[10,10,0,0]} />
                    <Bar dataKey="Falto" fill="#f0d0feff"  legendType='circle' radius={[10,10,0,0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart