import React from 'react'
import { Button, Navbar, Form, Nav, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const divStyle = {
    marginLeft: '10px',
};


export default function mainNavbar() { 
    
    

    return (
        <>
            <Navbar collapseOnSelect expand="sm" fixed="top" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand href="#home">WeatherApp</Navbar.Brand>
                <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#favorites">Favorites</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Button variant="outline-info">Search</Button>
                <Form style={divStyle} inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
             </Navbar>   
        </>
    )
}