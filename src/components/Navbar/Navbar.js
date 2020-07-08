import React from "react"

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

function NavigationBar() {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">UtterLabsPC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/news">News</Nav.Link>
                    <Nav.Link href="/pcbuilder">PC Builder</Nav.Link>
                    <NavDropdown title="Shop" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/gaming">GamingPCs</NavDropdown.Item>
                        <NavDropdown.Item href="/studio">Study PCs</NavDropdown.Item>
                        <NavDropdown.Item href="/special">Specials</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/shop">Computer parts info</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar