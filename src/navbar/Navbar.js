import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/your-location" className='nav-link'>Your Location</Link>
                <Link to="/your-country" className='nav-link'>Your Country</Link>
                <Link to="/markers" className='nav-link'>Markers</Link>
                <Link to="/geojson" className='nav-link'>GeoJSON AI</Link>
            </Container>
        </Navbar>
    )
}

export default Header