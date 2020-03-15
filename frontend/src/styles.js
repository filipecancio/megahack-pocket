import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



export const Container = styled.div`
  display: flex;  
  
  min-height : calc(100vh - 80px);
  justify-content: center;
  align-items : flex-start;
  background-color : rgb(245,245,245);
  flex-direction: row;
  

  @media (max-width:1220px) {
    flex-direction: column;
    align-items : center;
  }
  transition : all .5s;
`;



export const ContainerGraph =styled.div`
  max-width : 600px;
  max-height : 400px;
  width : 100%;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding : 10px;
  background-color : #fff;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left : 10px;
  
`;

export const TitleGraph  = styled.div`
  font-size : 32px;
  font-weight :500;
  padding: 10px;
  margin-left: 25px;
`;

export const Header = styled.div`
  height: 80px;
  padding: 20px;
  flex: 1;
  background-color : rgb(45,50,62);
  justify-content : center;
  align-items : center;
  display : flex;
`;

export const Title = styled.div`
  font-size : 42px;
  font-weight : 700;
  color : #fff;
`;