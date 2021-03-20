import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Navbar, NavDropdown, FormControl, Button, Form, Carousel, Container, Row, Col, Image, Figure, CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BookApt from '../bookapt/BookApt';

class TopNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar expand="lg" variant="light" bg="light">
                    <Col className="d-flex justify-content-start">
                        <Navbar.Brand href="/">
                            <img src="../assets/img/logo.png" className="img-fluid" alt="Responsive image" />
                        </Navbar.Brand>
                    </Col>
                    {/* <Col className="d-flex justify-content-end">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2 m-1" />
                            <Button className="m-1" style={{border: '2px solid #004AAD', background: '#F5F5F5', color: '#004AAD'}}>filter</Button>
                            <Button className="m-1" style={{background: '#004AAD', border: 0}}>Sign Up</Button>
                            <Button className="m-1" style={{border: '2px solid #004AAD', background: '#F5F5F5', color: '#004AAD'}}>Log In</Button>
                        </Form>
                    </Col> */}
                </Navbar>
                <Navbar expand="lg" variant="dark" style={{ background: "#004AAD" }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav fill style={{ width: '100%' }}>
                            <Nav.Link className="nav-btn" href="/">Home</Nav.Link>
                            <Nav.Link className="nav-btn" href="/about">About Us</Nav.Link>
                            <NavDropdown className="nav-btn" title="Eye A-Z" id="eyeA-Z">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <NavDropdown.Header><b>Eye Health</b></NavDropdown.Header>
                                            <NavDropdown.Item href="/blog/eye-disease">Eye Diseases</NavDropdown.Item>
                                            <NavDropdown.Item href="/blog/refractive-errors">Refractive Errors</NavDropdown.Item>
                                            <NavDropdown.Item href="/blog/eye-conditions">Eye Conditions</NavDropdown.Item>
                                        </div>
                                        <div className="col-3">
                                            <NavDropdown.Header><b>Eyewear</b></NavDropdown.Header>
                                            <NavDropdown.Item href="/blog/blue-light">Blue Light</NavDropdown.Item>
                                            <NavDropdown.Item href="/blog/progressives">Progressives</NavDropdown.Item>
                                            <NavDropdown.Item href="/blog/sunglassess">Sunglasses</NavDropdown.Item>
                                        </div>
                                        <div className="col-3">
                                            <NavDropdown.Header><b>Contact Lenses</b></NavDropdown.Header>
                                            <NavDropdown.Item href="/blog/soft-lenses">Soft Lenses</NavDropdown.Item>
                                            <NavDropdown.Item href="/blog/hard-lenses">Hard Lenses</NavDropdown.Item>
                                            <NavDropdown.Item href="/blog/multifocal-lenses">Multifocal Lenses</NavDropdown.Item>
                                        </div>
                                    </div>
                                </div>
                            </NavDropdown>
                            <Nav.Link className="nav-btn" href="/bookapt">Book Appointment</Nav.Link>
                            <Nav.Link className="nav-btn" href="/clinics">Clinics</Nav.Link>
                            {/* <Nav.Link className="nav-btn" href="/events">Events</Nav.Link> */}
                            <Nav.Link className="nav-btn" href="/qna">Q&A</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </div>
        );
    }
}

export default TopNav;