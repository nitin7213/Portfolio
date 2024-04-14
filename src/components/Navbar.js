import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillGithub,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar fixed="top" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                <AiOutlineHome style={{ marginBottom: "2px" }} />
                <span className="d-md-none"> </span>
                <span className="d-none d-md-inline"> Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                <AiOutlineUser style={{ marginBottom: "2px" }} />
                <span className="d-md-none"> </span>
                <span className="d-none d-md-inline"> About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project">
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />
                <span className="d-md-none"> </span>
                <span className="d-none d-md-inline"> Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume">
                <CgFileDocument style={{ marginBottom: "2px" }} />
                <span className="d-md-none"> </span>
                <span className="d-none d-md-inline"> Resume</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <span className="d-none d-md-inline">
                {" "}
                <Button
                  href="https://github.com/nitin7213"
                  target="_blank"
                  className="fork-btn-inner"
                >
                  <AiFillGithub style={{ fontSize: "1.2em" }} />
                </Button>{" "}
              </span>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
