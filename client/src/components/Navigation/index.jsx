import vavLogo from '../../assets/vav-logo.png';

import './index.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <div>
            <Navbar expand="md" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/" className="fs-2 fw-light">
                        <img
                            alt="Velvet Ash Vintage Logo"
                            src={vavLogo}
                            width="75"
                            height="75"
                            className="d-inline-block align-center"
                        />{' '}
                        Velvet Ash Vintage
                    </Navbar.Brand>
                    <Navbar.Toggle className="border-0 navbar-custom" aria-controls="basic-navbar-nav" aria-label="Close" aria-expanded="false"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-uppercase">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                            {/* <Nav.Link href="/shop">Shop</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;

{/* <Navbar></Navbar> */ }