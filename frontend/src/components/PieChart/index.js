import React from 'react';
import { PieChart, Pie, Sector, Cell,Legend, Tooltip,
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

export default function CustomPieChart ({data, title}) {
  return (
    <>
      <ContainerGraph>
        <TitleGraph>
          {title}
        </TitleGraph>
        <ResponsiveContainer width="99%" minHeight={300}>
          <PieChart              
              data={data}              
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <Pie dataKey="value" isAnimationActive={true} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
              <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
      </ContainerGraph>
    </>
  );
}