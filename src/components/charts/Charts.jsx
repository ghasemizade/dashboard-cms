import React from 'react'
import data from './data'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import clsx from 'clsx';


export default function Charts() {
  return (
        <div className={clsx(
          "bg-slate-50",
          "my-5 mx-8",
          "py-5",
          "shadow hover:shadow-sm",
          "rounded"
        )}>
          <LineChart width={1000} height={350} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
  )
}
