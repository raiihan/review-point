import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mx-5 text-center my-12'>
                <div>
                    <LineChart width={530} height={450} data={data} className='mt-2 mr-7 ml-5 mb-2' >

                        <XAxis dataKey={'month'} />
                        <YAxis dataKey={'sell'} />
                        <Legend />
                        <Tooltip></Tooltip>
                        <Line type={'monotone'} dataKey={'sell'} />

                    </LineChart>
                </div>
                <div>

                    <AreaChart width={530} height={450} data={data}>


                        <Area type={'monotone'} stackId="1" dataKey={'investment'} stroke="#8884d8" fill="#8884d8" />
                        <Area type={'monotone'} stackId="1" dataKey={'revenue'} stroke="#82ca9d" fill="#82ca9d" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />

                    </AreaChart>
                </div>
                <div>
                    <p className='text-center text-xl font-medium' style={{ color: '#8884d8' }}>Investment vs Revnenue</p>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>

                <div>
                    <p className='text-center text-xl font-medium' style={{ color: '#8884d8' }}>Investment vs Revnenue</p>
                    <PieChart width={400} height={400}>
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                </div>
            </div >
        </div>
    );
};

export default Dashboard;