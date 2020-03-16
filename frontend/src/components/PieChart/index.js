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

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


export default function CustomPieChart ({data, title, innerRadius, width}) {
  return (
    <>
      <ContainerGraph width={width}>
        <TitleGraph>
          {title}
        </TitleGraph>
        <ResponsiveContainer width="99%" minHeight={300} >
          <PieChart              
              data={data}              
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <Pie 
                dataKey="value" 
                isAnimationActive={true} 
                innerRadius={innerRadius} 
                data={data} 
                
                fill="#8884d8" label >
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={getRandomColor()}  />)
              }
              </Pie>

              <Legend align="right" verticalAlign="bottom"/>
              <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
      </ContainerGraph>
    </>
     
  );
}
