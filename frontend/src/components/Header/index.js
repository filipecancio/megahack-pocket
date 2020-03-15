import React from "react";
import { Container, Icon } from "./styles";

function Header(props) {
  return (
    <>
      <Container>
        <Icon />
        <div>
          <p>Início</p>
          <p>Statups</p>
          <p>Comunidades</p>
          <p>Programas</p>
          <p>Estatíticas</p>
        </div>
      </Container>
    </>
  );
}

export default Header;
