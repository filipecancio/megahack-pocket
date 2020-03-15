import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  ResponsiveContainer  } from 'recharts';


import { ContainerGraph , TitleGraph, Container, Header,
  CustomLineChart, Title } from './styles';

const data = [
  {name: "Josias", value: 10},
  {name: "Maria", value: 15},
  {name: "João", value: 7},
  {name: "Lucas", value: 25},

]




function App() {
  return (
    <>
    <Header>
     <Title>
        Acompanhe Startups do seu segmento
     </Title> 
    </Header>
    <Container>
      <ContainerGraph>
        <TitleGraph>
          Dados statups
        </TitleGraph> 
        <ResponsiveContainer width="99%" minHeight={300}>              
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart> 
        </ResponsiveContainer>
      </ContainerGraph>

      <ContainerGraph>
        <TitleGraph>
          Dados statups
        </TitleGraph> 
        <ResponsiveContainer width="99%" minHeight={300}>              
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart> 
        </ResponsiveContainer>
      </ContainerGraph>

      <ContainerGraph>
        <TitleGraph>
          Dados statups
        </TitleGraph> 
        <ResponsiveContainer width="99%" minHeight={300}>              
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart> 
        </ResponsiveContainer>
      </ContainerGraph>
    </Container>
    </>
  );
}

export default App;
