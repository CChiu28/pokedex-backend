import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
// import Container from "react-bootstrap";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <Navbar bg='light'>
            <Container>
                <Navbar.Brand>Pokedex</Navbar.Brand>
                <Nav>
                    {/* <Nav.Link href="/">Search</Nav.Link>
                    <Nav.Link href="/teambuilder">Team Builder</Nav.Link> */}
                    <Link to='/'>Search</Link>
                    <Link to='/teambuilder'>Team Builder</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}