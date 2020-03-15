import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip,
  ResponsiveContainer   } from 'recharts';
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


export default function CustomAreaChart({data, title, yLabel}) {
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
              <XAxis dataKey="name" angle={-90} dy={20} height={50}/>
              <YAxis  label={{ value: yLabel, angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
      </ContainerGraph>
    </>
  );
}