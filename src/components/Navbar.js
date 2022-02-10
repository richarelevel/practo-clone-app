import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
  
const Nav = styled.div`
  background: #434ea2;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.5rem;
`;

const NavMenu = styled.div`
  display: flex;
  position:absolute; 
  right:0;
  margin-right: 2rem;
`;

const NavItem = styled(Link)`
  margin-left: 2rem;
  font-size: 0.9rem;
  height: 80px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
`;
  
const Navbar = () => {
  
  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav>
          <h1
            style={{ textAlign: "center", 
                     marginLeft: "50px", 
                     color: "white" }}
          >
            Practo Clone
          </h1>
          <NavMenu>
            <NavItem to="/">
                  Home
              </NavItem>
              <NavItem to="/about">
                  About
              </NavItem>
              <NavItem to="/contact">
                  Contact
              </NavItem>
            </NavMenu>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
  
export default Navbar;