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
import { useNavigate } from "react-router-dom"

function NavBar(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const navigate = useNavigate()
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
        <button onClick={() => {navigate("/")}} style={{ color: "var(--fontColor)", background: "transparent", border: "none", padding: "8px 0px", fontSize: "24px" }}>
                Home
              </button>
        <NavbarToggler
          onClick={toggleNavbar}
          className="me-2"
          style={{ background: "var(--secondary)" }}
        />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <button onClick={() => {navigate("/about-me"); toggleNavbar()}} style={{ color: "var(--fontColor)", background: "transparent", border: "none", padding: "8px 0px" }}>
                About Me
              </button>
            </NavItem>
            <NavItem>
            <button onClick={() => {navigate("/projects"); toggleNavbar()}} style={{ color: "var(--fontColor)", background: "transparent", border: "none", padding: "8px 0px" }}>
                Projects
              </button>
            </NavItem>
            <NavItem>
              <button onClick={() => {navigate("/hobbies"); toggleNavbar()}} style={{ color: "var(--fontColor)", background: "transparent", border: "none", padding: "8px 0px" }}>
                Hobbies and Interests
              </button>
            </NavItem>
            <NavItem>
            <button onClick={() => {navigate("/work-history"); toggleNavbar()}} style={{ color: "var(--fontColor)", background: "transparent", border: "none", padding: "8px 0px" }}>
                Work History
              </button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
