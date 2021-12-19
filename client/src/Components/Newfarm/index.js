import "./styles.scss";
import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
export const Newfarm = (props) => {
  return (
    <div className="Newfarm-Container">
      <Nav>
        <NavLink to="/Add_farm">Dodaj hodowle</NavLink>
      </Nav>
    </div>
  );
};
const Nav = styled.nav`
  background: #000;
  height: 80px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem calc((100vw-1000px) / 2);
  z-index: 10;
  background-color: #3f51b5;
  border: 1px solid grey;
  &:hover {
    color: white;
    background-color: #3f32a3;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: poiner;

  &:hover {
    color: white;
  }
`;
