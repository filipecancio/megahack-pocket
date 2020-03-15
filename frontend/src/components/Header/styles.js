import styled from "styled-components";
import logo from "../../icons/logo.svg";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  background: white;
`;
export const Icon = styled.div`
  background: url(${logo}) center no-repeat;
  width: 120px;
  height: 23px;
`;
export const Nav = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  & > p {
    color: var(--color-gray6);
    padding: 0.75rem;
  }
`;
