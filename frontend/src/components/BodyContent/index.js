import React from "react";
import { Container } from "./styles";
import CustomPieChart from "../PieChart";
import CustomAreaChart from "../AreaChart";

function BodyContent(props) {
  return (
    <>
      <Container>
        <div>
          <h1>Cidades</h1>
          {props.data.citys.map(element => (
            <p>{element}</p>
          ))}
        </div>
        <div>
          <CustomAreaChart
            data={props.data.chart01.data}
            title={props.data.chart01.title}
            yLabel={data.chart01.title}
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
