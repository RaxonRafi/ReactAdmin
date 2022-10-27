import React from 'react';
import './charts.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "January",
      Total: 4000,
      
    },
    {
        name:"February",
        Total: 3000,
      
    },
    {
        name: "March",
      Total: 2000,
     
    },
    {
        name: "April",
      Total: 2780,
      
    },
    {
        name:"May",
      Total: 1890,
      
    },
    {
        name:"June",
      Total: 2390,
     
    },
    {
        name:"July",
      Total: 3490,
     
    },
      {
        name:"August",
        Total: 3490,
        
      },
      {
        name: "Septembar",
        Total: 3490,
      
      },
      {
        name: "Octobar",
        Total: 490,
       
      },
      {
        name:"Novembar",
        Total: 3490,
       
      },
      {
        name: "Decembar",
        Total: 1400,
        
      },
  ];
const Charts = () => {
    return (
        <div className="chart">
            <div className="title">Last 6 Month (Revenue)</div>
            <AreaChart width={730} height={350} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke="gray" />
 
  <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  
</AreaChart>
            </div>
    );
};

export default Charts;