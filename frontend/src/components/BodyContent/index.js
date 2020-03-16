import React from "react";
import {
  Container,
  ContainerGraph1,
  SideRight,
  SideLeft,
  ContainerGraph,
  TableLeft
} from "./styles";

import CustomPieChart from "../PieChart";
import CustomAreaChart from "../AreaChart";

function BodyContent(props) {
  return (
    <>
      <Container>
        <TableLeft>
          <h1>Cidades</h1>
          {props.data.citys.map(element => (
            <p>{element}</p>
          ))}
        </TableLeft>
        <ContainerGraph>
          <ContainerGraph1>
            <CustomPieChart
              data={props.data.chart01.data}
              title={props.data.chart01.title}
            />
          </ContainerGraph1>

          <div>
            <CustomAreaChart
              data={props.data.chart02.data}
              title={props.data.chart02.title}
              yLabel="Contagem de empresas"
            />
            <CustomPieChart
              data={props.data.chart03.data}
              title={props.data.chart03.title}
              innerRadius={60}
            />
          </div>
        </ContainerGraph>
        <SideRight>
          <div>
            <h1>Estado</h1>
            <p>Espirito Santo</p>
          </div>
          <div>
            <h1>Statups</h1>
            <h3>Total</h3>
            <p>12.932</p>
          </div>
        </SideRight>
      </Container>
    </>
  );
}

export default BodyContent;
