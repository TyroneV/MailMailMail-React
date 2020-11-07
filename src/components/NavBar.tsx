import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarToggler,
  NavLink,
  NavbarBrand,
  NavbarText,
} from "reactstrap";

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //This handles the logout getting clicked.
  const handleClick = (e: any) => {
    window.sessionStorage.clear();
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/home">
        <img
        src="/longTitle.svg"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="mr-4">
              <SearchBar />
            </NavItem>
            <NavItem>
              <NavbarBrand href="/home" className="mr-4">Home</NavbarBrand>
            </NavItem>
            <NavItem>
              <NavbarBrand href="/me">Me</NavbarBrand>
            </NavItem>
          </Nav>
          <Nav>
            {/* this is the log out button */}
            <NavItem className="mr-auto">
              <NavbarBrand href="/" onClick={handleClick}>
                Logout
              </NavbarBrand>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
