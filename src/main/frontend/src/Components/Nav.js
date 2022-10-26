import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
// import Container from "react-bootstrap";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import { Link } from "react-router-dom";
import Login from "./Login";
// import { Link } from "react-router-dom";

export default function NavBar() {
    const [openModal,setOpenModal] = useState(false);

    const handleClose = () => setOpenModal(false);
    return(
        <Navbar bg='light'>
            <Container>
                <Navbar.Brand>Pokedex</Navbar.Brand>
                <Nav>
                    {/* <Nav.Link href="/">Search</Nav.Link>
                    <Nav.Link href="/teambuilder">Team Builder</Nav.Link> */}
                    <Link to='/'>Search</Link>
                    <Link to='/teambuilder'>Team Builder</Link>
                    <Nav.Item>
                        <Nav.Link onClick={() => setOpenModal(true)}>Login</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Login show={openModal} setModal={handleClose}/>
            </Container>
        </Navbar>
    );
}