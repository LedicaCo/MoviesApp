import '../assets/css/navbar.css';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GenresModal from './Genres/GenresModal';

const NavBar = () => {

    const [showGenres, setShowGenres] = useState(false);

    return (
        <>
            <Navbar className='bg-black' variant="dark" expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='navbar-brand'><i class='bx bx-camera-movie'></i>&nbsp;Movies App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className='navbar-item'>Movies</Nav.Link>
                            <Nav.Link as={Link} to="/actors" className='navbar-item'>Actors</Nav.Link>
                            <Nav.Link as={Link} to="/directors" className='navbar-item'>Directors</Nav.Link>
                            <Nav.Link onClick={() => setShowGenres(true)} className='navbar-item'>Genres</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <GenresModal 
                show={showGenres} 
                handleClose={() => setShowGenres(false)} 
            />
        </>
    );
};

export default NavBar;