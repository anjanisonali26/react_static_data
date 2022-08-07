import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="#">Anjani Site</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Shop</Nav.Link>
                                <NavDropdown title="Men" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Bags</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Shoes
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Slippers
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action6">
                                        Belt
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Woman" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Bags</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Shoes
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Kids" id="navbarScrollingDropdown" disabled>
                                    <NavDropdown.Item href="#action3">Bags</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Shoes
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;