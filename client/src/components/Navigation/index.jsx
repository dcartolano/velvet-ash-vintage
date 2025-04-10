import vavLogo from '../../assets/vav-logo.png';

import './index.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from "react-router"

const Navigation = () => {

    // // Get the container element
    // let btnContainer = document.getElementById("myDIV");

    // // Get all buttons with class="btn" inside the container
    // let btns = document.querySelectorAll("btn");

    // // Loop through the buttons and add the active class to the current/clicked button
    // for (var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function () {
    //         let current = document.querySelectorAll("active");
    //         current[0].className = current[0].className.replace(" active", "");
    //         this.className += " active";
    //     });
    // }

    return (
        <div>
            <Navbar expand="md" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/" className="title fs-2 fw-light">
                        <img
                            alt="Velvet Ash Vintage Logo"
                            src={vavLogo}
                            width="75"
                            height="75"
                            className="d-inline-block align-center"
                        />{' '}
                        Velvet Ash Vintage
                    </Navbar.Brand>
                    <Navbar.Toggle className="border-0 navbar-custom" aria-controls="basic-navbar-nav" aria-label="Close" aria-expanded="false" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <Nav className="me-auto text-uppercase nav-underline" id="myDIV"> */}
                        <Nav className="me-auto text-uppercase" id="myDIV">
                            <Nav.Link className="" href="/">Home</Nav.Link>
                            {/* <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <Nav.Link href="/">Home</Nav.Link>
                            </NavLink> */}
                            <Nav.Link className="" href="/about">About</Nav.Link>
                            {/* <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <Nav.Link href="/about">About</Nav.Link>
                            </NavLink> */}
                            <Nav.Link className="" href="/gallery">Gallery</Nav.Link>
                            {/* <NavLink
                                // to="/gallery"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <Nav.Link href="gallery">Gallery</Nav.Link>
                            </NavLink> */}
                            <Nav.Link className="" href="/shop">Shop</Nav.Link>
                            {/* <NavLink
                                to="/shop"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <Nav.Link href="/shop">Shop</Nav.Link>
                            </NavLink> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;

{/* <Navbar></Navbar> */ }