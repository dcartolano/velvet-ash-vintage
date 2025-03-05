import './index.css';

import etsyLogo from '../../assets/etsy-logo.png';
import etsyBlack from '../../assets/etsy-black.png';
import instagramIcon from '../../assets/instagram-icon-2.png';
import instagramLogoBlue from '../../assets/instagram-logo-blue.svg';
// import instagramLogoBlack from '../../assets/instagram-logo-black.png';
import instagramIconSimple from '../../assets/instagram-icon-simple.png';
import depopLogo from '../../assets/depop-logo.svg';
import depopSimple from '../../assets/depop-full-simple.png';
import tiktokLogo from '../../assets/tiktok-logo.png';
import tiktokSimple from '../../assets/tiktok-simple.png';
import linktreeLogo from '../../assets/linktree-logo.png';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import { Stack } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

const Socials = () => {

    return (
        <Container>
            <h3>Socials</h3>
            <Container className="m-3 p-2" fluid>
                <Row xxs={2} sm={4} className="m-0">
                    <Col className="">
                        <Link to="https://www.etsy.com/shop/velvetashvintage" target="_blank">
                            <Image className="logo" src={etsyBlack} fluid />
                        </Link>
                    </Col>
                    <Col className="">
                        <Link to="https://www.depop.com/velvetashvintage/" target="_blank">
                        <Image className="logo" src={depopSimple} fluid />
                        </Link>
                    </Col>
                    <Col className="">
                        <Link to="https://www.instagram.com/velvetashvintage/" target="_blank">
                        <Image className="icon" src={instagramIconSimple} fluid />
                        </Link>
                    </Col>
                    <Col className="">
                        <Link to="https://www.tiktok.com/@velvetashvintage" target="_blank">
                        <Image className="icon" src={tiktokSimple} fluid />
                        </Link>
                    </Col>
                </Row>

            </Container>
        </Container>
    );
}

export default Socials;

//  <div className="p-3">
//                 <a href="https://www.etsy.com/shop/velvetashvintage">
//                     <img src={etsyLogo} height="50" alt="Etsy Logo" />
//                 </a>
//             </div>
//             <div className="p-3">
//                 <a href="https://www.instagram.com/velvetashvintage/">
//                     <img src={instagramIcon} height="50" className="mr-1" alt="Instagram Icon" />
//                     <img src={instagramLogoBlue} height="50" alt="Instagram Logo" />
//                 </a>
//             </div>
//             <div className="p-3">
//                 <a href="https://www.depop.com/velvetashvintage/">
//                     <img src={depopLogo} height="50" alt="Depop Logo" />
//                 </a>
//             </div>
//             <div className="p-3">
//                 <a href="https://linktr.ee/velvetashvintage">
//                     <img src={linktreeLogo} height="50" alt="Linktree Logo" />
//                 </a>
//             </div>
//             <div className="p-3">
//                 <a href="https://www.tiktok.com/@velvetashvintage">
//                     <img src={tiktokLogo} height="50" alt="TikTok Logo" />
//                 </a>
//             </div>