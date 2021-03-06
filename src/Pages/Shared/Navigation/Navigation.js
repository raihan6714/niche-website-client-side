import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import useAuth from '../../../hooks/useAuth';
const Navigation = () => {
    const { user, handleLogout } = useAuth();
    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
                <Container>
                    <NavLink to="/home" className="me-4 my-3 text-decoration-none">
                        <img
                            src="https://i.ibb.co/PGvGyWD/logo-2.png"
                            width="200"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="me-3 text-decoration-none fs-5 text-dark" to="/home">Home</NavLink>
                            <NavLink className="me-3 text-decoration-none fs-5 text-dark" to="/about">About Us</NavLink>
                            <NavLink className="me-3 text-decoration-none fs-5 text-dark" to="/contact">Contact Us</NavLink>
                            <NavLink className="me-3 text-decoration-none fs-5 text-dark" to="/motobikes">Moto Bikes</NavLink>

                        </Nav>
                        <Nav>
                            {
                                user.email &&
                                <NavLink to="/dashboard">
                                    <Button className="me-2" variant="danger">Admin Dashboard</Button>
                                </NavLink>
                            }
                        </Nav>
                        <Nav>
                            {
                                user.email ?
                                    <Button variant="dark" onClick={handleLogout}>Logout</Button>
                                    :
                                    <NavLink to="/login">
                                        <Button variant="dark">Login</Button>
                                    </NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;