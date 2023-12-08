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

function NavBar(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <>
      <Navbar
        sticky="top"
        style={{
          background: "var(--tritary)",
          width: "100%",
          display: "flex",
          alignContent: "center",
          borderBottom: "2px solid var(--backgroundColor)",
        }}
      >
        <NavbarBrand
          href="/"
          className="me-auto"
          style={{ color: "var(--fontColor)" }}
        >
          Home
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className="me-2"
          style={{ background: "var(--secondary)" }}
        />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/about-me" style={{ color: "var(--fontColor)" }}>
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects" style={{ color: "var(--fontColor)" }}>
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hobbies" style={{ color: "var(--fontColor)" }}>
                Hobbies and Interests
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/work-history"
                style={{ color: "var(--fontColor)" }}
              >
                Work History
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
