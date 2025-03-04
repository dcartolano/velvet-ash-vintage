import vavLogo from '../../assets/vav-logo.png';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            {/* <nav className="navbar navbar-expand navbar-light bg-light"> */}
            <nav className="navbar navbar-light">
                <Navbar></Navbar>
                {/* page title (brand) with logo and name */}
                <a className="navbar-brand m-3 h1" href="/">
                    <img src={vavLogo} width="75" height="75" className="d-inline-block align-center mr-2" alt="Velvet Ash Vintage Logo"/>
                    Velvet Ash Vintage
                </a>
                {/* collapseable option for list of pages */}
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <a className="nav-item nav-link" href="/">Home</a>
                        <a className="nav-item nav-link" href="/about">About</a>
                        <a className="nav-item nav-link" href="/gallery">Gallery</a>
                        <a className="nav-item nav-link" href="/shop">Shop</a>
                </div> */}
                {/* dropdown option for list of pages */}
                <div className="nav-item dropdown align-center">
                    {/* option for 3 bar with dropdown arrow */}
                    <a className="nav-link dropdown-toggle mr-2" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {/* option for 3 bar with collapse-style button */}
                    {/* <a className="navbar-toggler" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
                    <span className="navbar-toggler-icon align-center"></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="/">Home</a>
                        <a className="dropdown-item" href="/about">About</a>
                        <a className="dropdown-item" href="/gallery">Gallery</a>
                        <a className="dropdown-item" href="/shop">Shop</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;