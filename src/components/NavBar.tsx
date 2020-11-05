import React, { useState } from 'react'
import {SearchBar} from './SearchBar'
import { Navbar, Collapse, Nav, NavItem, NavbarToggler, NavLink } from 'reactstrap'



export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <SearchBar/>
                <NavItem className='ml-auto'>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem className='ml-auto'>
                  <NavLink href="/me">Me</NavLink>
                </NavItem>
                 {/* this is the log out button */}
                <NavItem className="ml-auto">
                  <NavLink
                    onClick={() => localStorage.setItem("username", "")}
                    href="/"
                  >
                    logout
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
}
