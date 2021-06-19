import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
function NavbarComponent({ name, logoutHandler }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Welcome {name}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <div onClick={logoutHandler}>
                <NavLink href="/">Log out</NavLink>
              </div>
            </NavItem>
            <NavItem>
              <NavLink href="https://shivanshu-1811.web.app/">
                Contact Developer
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dashboard/userDetails">Info</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
