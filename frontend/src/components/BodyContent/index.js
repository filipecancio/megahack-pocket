import React from "react";
import { Container } from "./styles";
import CustomPieChart from "../PieChart";
import CustomAreaChart from "../AreaChart";
import data from "./data.json";

function BodyContent(props) {
  return (
    <>
      <Container>
        <div>
          <h1>Cidades</h1>
          <p>Anchieta</p>
          <p>Anchieta</p>
          <p>Anchieta</p>
          <p>Anchieta</p>
          <p>Anchieta</p>
          <p>Anchieta</p>
          <p>Anchieta</p>
          <p>Anchieta</p>
        </div>
        <div>
          <CustomPieChart data={data.chart01.data} title={data.chart01.title} />
          <div>
            <CustomAreaChart
              data={data.chart02.data}
              title={data.chart02.title}
            />
            <CustomPieChart
              data={data.chart03.data}
              title={data.chart03.title}
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
