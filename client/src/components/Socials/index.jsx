import './index.css';


import etsySimple from '../../assets/etsy-e-circle-larger-margin.png';
// import etsySimple from '../../assets/etsy-e-circle-small-margin.svg';
// import etsySimple from '../../assets/etsy-e-filled-in.png';
import instagramIconSimple from '../../assets/instagram-icon-simple.png';
import depopSimple from '../../assets/depop-d-filled-in.png';
import tiktokSimple from '../../assets/tiktok-simple.png';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Socials = () => {

    return (
        <Container className="pt-5 mt-5">
            <p className="fs-3 fw-lighter">find me on...</p>
            <Container className="m-3 p-2 d-inline-block align-center" fluid>
                <Row xxs={2} sm={4} className="m-0 align-middle">
                    <Col className="">
                        <Link to="https://www.etsy.com/shop/velvetashvintage" target="_blank">
                            <Image className="logo" src={etsySimple} fluid />
                        </Link>
                    </Col>
                    <Col className="">
                        <Link to="https://www.depop.com/velvetashvintage/" target="_blank">
                            <Image className="icon" src={depopSimple} fluid />
                        </Link>
                    </Col>
                    <Col className="">
                        <Link to="https://www.instagram.com/velvetashvintage/" target="_blank">
                            <Image className="icon" src={instagramIconSimple} fluid />
                        </Link>
                    </Col>
                    <Col className="">
                        <Link to="https://www.tiktok.com/@velvetashvintage" target="_blank">
                            <Image className="logo" src={tiktokSimple} fluid />
                        </Link>
                    </Col>
                </Row>

            </Container>
        </Container>
    );
}

export default Socials;