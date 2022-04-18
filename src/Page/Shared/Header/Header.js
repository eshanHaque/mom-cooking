import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import '../Header/Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <header>
                <Navbar collapseOnSelect expand="lg" fixed="top" className='navbar-menu' variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="home#services">Services</Nav.Link>
                                <Nav.Link href="checkout">Check Out</Nav.Link>
                                <Nav.Link href="blog">Blogs</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="about">About</Nav.Link>
                                {
                                    user ? 
                                        <button onClick={handleLogOut}>Log out</button>
                                    :
                                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
};

export default Header;