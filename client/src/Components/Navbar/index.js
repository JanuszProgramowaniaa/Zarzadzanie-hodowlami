import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CurrentUserConsumer } from "../../context/CurrentUser.context";
export const Navbar = () => {
  useEffect(() => {
    if (localStorage.getItem("user") != undefined) {
      localStorage.getItem("user");
    }
  }, []);

  return (
    <CurrentUserConsumer>
      {({ user, logout }) => (
        <div>
          {localStorage.getItem("user")
            ? (user = localStorage.getItem("user"))
            : null}
          {user ? (
            <Nav>
              <NavLink to="/">
                <h1>Farmnet</h1>
              </NavLink>
              <NavLink to="/hodowle" activeStyle>
                Twoje hodowle
              </NavLink>
              <NavLink to="/kontakt" activeStyle>
                Kontakt
              </NavLink>
              <NavLink to="/Logowanie" activeStyle>
                Ustawienia Konta
              </NavLink>
              <div
                style={{
                  color: "green",
                  verticalAlign: "middle",
                  paddingTop: "20px",
                }}
              >
                Zalogowano: {user.name}{" "}
                <button
                  style={{ borderRadius: "10px", border: "0px" }}
                  onClick={logout}
                >
                  Wyloguj
                </button>{" "}
              </div>
            </Nav>
          ) : (
            <Nav>
              <NavLink to="/">
                <h1>Farmnet</h1>
              </NavLink>
              <NavMenu>
                <NavLink to="/kontakt" activeStyle>
                  Kontakt
                </NavLink>
                <NavLink to="/Logowanie" activeStyle>
                  Zaloguj się
                </NavLink>
              </NavMenu>
              <NavBtn>
                <NavBtnLink to="rejestracja">Zarejestruj się</NavBtnLink>
              </NavBtn>
            </Nav>
          )}
        </div>
      )}
    </CurrentUserConsumer>
  );
};

const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1000px) / 2);
  z-index: 10;
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: poiner;
  &.active {
    color: #15cdfc;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: poiner;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
