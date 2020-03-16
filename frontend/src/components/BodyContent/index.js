import React from "react";
import { Container , ContainerGraph1, SideRight , SideLeft, ContainerGraph} from "./styles";
import CustomPieChart from "../PieChart";
import CustomAreaChart from "../AreaChart";
import data from "./data.json";

function BodyContent(props) {
  return (
    <>
      <Container>
        <SideLeft>
          <h1>Cidades</h1>
          {data.citys.map(element => (
            <p>{element}</p>
          ))}
        </SideLeft>
        <ContainerGraph>
          <ContainerGraph1>
            <CustomPieChart 
              data={data.chart01.data} 
              title={data.chart01.title}
              />
          </ContainerGraph1>
          
          <div>
            <CustomAreaChart
              data={data.chart02.data}
              title={data.chart02.title}
              yLabel="Contagem de empresas"
            />
            <CustomPieChart
              data={data.chart03.data}
              title={data.chart03.title}
              innerRadius = {60}
            />
          </div>
        </ContainerGraph>
        <SideRight>
          <div>
            <h1>Estado</h1>
            <p>Espirito Santo</p>
          </div>
          <div>
            <h1>Total de Empresas</h1>
            <p>12.932</p>
          </div>
        </SideRight>
      </Container>
    </>
  );
}

export default BodyContent;
