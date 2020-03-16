import React from "react";
import { Container, Icon, Nav } from "./styles";

function Header(props) {
  return (
    <>
      <Container>
        <Icon />
        <Nav>
          <p>Início</p>
          <p>Statups</p>
          <p>Comunidades</p>
          <p>Programas</p>
          <p>Estatíticas</p>
        </Nav>
      </Container>
    </>
  );
}

export default Header;
