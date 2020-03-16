import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip,
  ResponsiveContainer , Legend  } from 'recharts';
import { ContainerGraph, TitleGraph } from './styles';


/*
  data example
  [
    {name: "Josias", value: 10},
    {name: "Maria", value: 15},
    {name: "João", value: 7},
    {name: "Lucas", value: 25}
  ]
*/


export default function CustomAreaChart({data, title, yLabel, xLabel}) {
  return (
    <>
      <ContainerGraph>
        <TitleGraph>
          {title}
        </TitleGraph>
        <ResponsiveContainer width="99%" minHeight={300}>
          <AreaChart              
              data={data}              
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-90} dy={50} height={120} label={xLabel}/>
              <YAxis  label={{ value: yLabel, angle: -90,  }} width={85} />
              <Tooltip />
              <Area type="linear" dataKey="value" stroke="#3891da" fill="#a1d2ff"/>
              <Legend />
            </AreaChart>
        </ResponsiveContainer>
      </ContainerGraph>
    </>
  );
}