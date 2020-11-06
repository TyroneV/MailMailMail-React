import React, { useState } from 'react'
import { SearchBar } from './SearchBar'
import { Navbar, Collapse, Nav, NavItem, NavbarToggler, NavLink, NavbarBrand, NavbarText } from 'reactstrap'



export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  //This handles the logout getting clicked.
  const handleClick = (e:any) => {
    window.sessionStorage.clear();
  }


  return (
    <div>
      <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/Home">Mail Mail Mail</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <SearchBar />
            </NavItem>
            <NavItem className='mr-auto'>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className='mr-auto'>
              <NavLink href="/me">Me</NavLink>
            </NavItem>
            {/* this is the log out button */}
            <NavItem className="mr-auto">
              <NavLink href="/" onClick={handleClick}>Logout</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
