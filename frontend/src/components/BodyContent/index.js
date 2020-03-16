import React from "react";
import { Container, TableLeft } from "./styles";
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
        <div>
          <CustomAreaChart
            data={props.data.chart01.data}
            title={props.data.chart01.title}
            yLabel={props.data.chart01.title}
            xLabel="Criado"
          />
          <div>
            <CustomAreaChart
              data={props.data.chart02.data}
              title={props.data.chart02.title}
            />
            <CustomPieChart
              data={props.data.chart03.data}
              title={props.data.chart03.title}
            />
          </div>
        </div>
        <div>
          <div>
            <h1>Estado</h1>
            <p>Espirito Santo</p>
          </div>
          <div>
            <h1>Total de Empresas</h1>
            <p>12.932</p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default BodyContent;
