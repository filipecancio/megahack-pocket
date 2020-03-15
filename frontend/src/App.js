import React, { useState, useEffect } from "react";
import axios from "axios";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  ResponsiveContainer, BarChart   } from 'recharts';

import { ContainerGraph , TitleGraph, Container, Header, Title,
  ContainerGraphDelay1, ContainerGraphDelay2, ContentHeaderCard,
  Card, TitleCard, TextCard } from './styles';


const dataChart = [
  {name: "Josias", value: 10},
  {name: "Maria", value: 15},
  {name: "João", value: 7},
  {name: "Lucas", value: 25},

]

function App() {
  const [data, setData] = useState();
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    }
  };

  useEffect(() => {
    (async () => {
      axios
        .get(
          `https://us-central1-megapoc.cloudfunctions.net/api/inicio`,
          config
        )
        .then(res => {
          const response = res.data;
          console.log(response);
          setData(response);
        });
    })();
  }, []);

  return (
    <>
    <Header>
     <Title>
        Acompanhe Startups do seu segmento
     </Title>      
    </Header>
    <ContentHeaderCard>
      <Card>
        <TitleCard>
          Total de Startups
        </TitleCard>
        <TextCard>
          12.345
        </TextCard>
      </Card>
      <Card>
        <TitleCard>
          Total de Startups
        </TitleCard>
        <TextCard>
          12.345
        </TextCard>
      </Card>
      <Card>
        <TitleCard>
          Total de Startups
        </TitleCard>
        <TextCard>
          12.345
        </TextCard>
      </Card>
      <Card>
        <TitleCard>
          Total de Startups
        </TitleCard>
        <TextCard>
          12.345
        </TextCard>
      </Card>
    </ContentHeaderCard>
    <Container>
      <ContainerGraph>
        <TitleGraph>
          Dados statups
        </TitleGraph> 
        <ResponsiveContainer width="99%" minHeight={300}>              
          <LineChart data={dataChart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart> 
        </ResponsiveContainer>
      </ContainerGraph>

      <ContainerGraphDelay1>
        <TitleGraph>
          Dados statups
        </TitleGraph> 
        <ResponsiveContainer width="99%" minHeight={300}>              
          <LineChart data={dataChart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart> 
        </ResponsiveContainer>
      </ContainerGraphDelay1>

      <ContainerGraphDelay2>
        <TitleGraph>
          Dados statups
        </TitleGraph> 
        <ResponsiveContainer width="99%" minHeight={300}>              
          <LineChart data={dataChart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart> 
        </ResponsiveContainer>
      </ContainerGraphDelay2>
    </Container>
    </>
  );
}

export default App;
