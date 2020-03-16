import styled from 'styled-components';


export const ContainerGraph =styled.div`
  max-width : ${props => (props.width? props.width: 600)}px;
  max-height : 400px;
  width : 100%;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding : 10px;
  background-color : #fff;
  margin-bottom: 10px;
  margin-top: 10px;
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

export const TitleGraph  = styled.div`
  font-size : 32px;
  font-weight :500;
  padding: 10px;
  margin-left: 25px;
  color : #808080;
`;