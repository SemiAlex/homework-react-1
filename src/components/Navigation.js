import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/products">Sneaker Shop 33</Navbar.Brand>
      <Nav className="me-auto">
        <Link className='nav-link' to="/products">Home</Link>
        <Link className='nav-link' to="/contacts">Contact us</Link>
        <Link className='nav-link' to="/about-us">About us</Link>
        <Link className='nav-link' to="/profile">Profile</Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default Navigation;