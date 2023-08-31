import React from 'react'
import Button from '@mui/material/Button';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'January', income: 1500, expense: 900 },
    { month: 'February', income: 1600, expense: 950 },
    { month: 'March', income: 1800, expense: 1000 },
    { month: 'April', income: 1700, expense: 1100 },
    { month: 'May', income: 1900, expense: 1200 },
    { month: 'June', income: 2000, expense: 1300 },
    { month: 'July', income: 2100, expense: 1400 },
    { month: 'August', income: 2200, expense: 1500 },
];

const Chart = () => {
    return (
        <section className='chart'>
            <div className="heading">
                <div className="left">
                    <h3>Expense</h3>
                    <p>02/08/2023 - 31/08/2023</p>
                </div>
                <div className="right">
                    <Button variant="outlined" startIcon={<CalendarMonthOutlinedIcon />}>
                    </Button>
                </div>
            </div>
            <div className="chartContainer">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" tick={false}/>
                        <YAxis tick={{ fontSize: 12, fontWeight: '700', letterSpacing: '1px' }}/>
                        <Tooltip labelKey="month" />
                        <Legend />
                        <Bar dataKey="income" fill="#00dfa3" name="Income" />
                        <Bar dataKey="expense" fill="#f73563" name="Expense" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    )
}

export default Chart