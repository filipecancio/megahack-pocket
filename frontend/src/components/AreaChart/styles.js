import styled from 'styled-components';



export const Container = styled.div`
  display: flex;  
  
  min-height : calc(100vh - 80px);
  justify-content: center;
  align-items : flex-start;
  background-color : rgb(248,248,248);
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
  box-shadow: 0 5px 8px rgba(0,0,0,0.2);
  border-radius: 8px;

  @keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: hidden;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  }

  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;

  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
`;

export const ContainerGraphDelay1 = styled(ContainerGraph)`
  -webkit-animation-delay: .4s;
  animation-delay: .4s;
`;

export const ContainerGraphDelay2 = styled(ContainerGraph)`
  -webkit-animation-delay: .8s;
  animation-delay: .8s;
`;

export const TitleGraph  = styled.div`
  font-size : 32px;
  font-weight :500;
  padding: 10px;
  margin-left: 25px;
  color : #808080;
`;

export const Header = styled.div`
  height: 80px;
  padding: 20px;
  flex: 1;
  background-color : rgb(29,18,51);
  justify-content : center;
  align-items : center;
  display : flex;
`;

export const Title = styled.div`
  font-size : 42px;
  font-weight : 700;
  color : rgb(248,248,248);
`;



// Cards styles
export const ContentHeaderCard = styled.div`
  min-height: 150px;
  padding: 20px;
  
  background-color : rgb(248,248,248);
  justify-content : space-between;
  align-items : center;
  display : flex;

  

  @media (max-width:880px) {
    display : flex;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  flex: 1;
  padding: 5px;
  background-color : rgb(35,18,121); 
  box-shadow: 0 5px 8px rgba(0,0,0,0.2);
  max-width: 300px;
  border-radius: 8px;

  width : 100%;
  height : 100%;
  margin-left : 5px;
  margin-right : 5px;

  transition: all .5s;

  @media (max-width:880px) {
    min-width: 250px;
    margin-bottom : 10px;
  }
  

  @keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: hidden;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  }

  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;

  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

`;

export const TitleCard = styled.div`
  color : rgb(248,248,248);
  font-size: 18px;
  width: 100%;
  font-weight: 500;
`;

export const TextCard = styled.div`
  color : rgb(248,248,248);
  font-size: 40px;
  width: 100%;
  font-weight: 600;
  text-align: center;
`;
