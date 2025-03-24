
import AboutSection from '../components/AboutSection';

import ashPhoto from '../assets/ash-about-1.jpg';

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

const AboutPage = () => {
    return (
        // <Container fluid>
        //     <Row>
        //         <Col>
        //             <h2>WELCOME TO VELVET ASH VINTAGE</h2>
        //         </Col>
        //     </Row>
        //     <Row  className="justify-content-md-center">
        //         <Col xs={{ span: 8, offset: 2 }} md={{ span: 4, offset: 0 }}>
        //         <Image className="" src={ashPhoto} fluid />
        //         </Col>
        //         <Col xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 0 }}>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum autem soluta, est ab ad recusandae delectus eos ipsa, assumenda ipsum deserunt esse! Quaerat aspernatur hic possimus rerum esse sed impedit quis eligendi repellat mollitia.</p>
        //             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima accusamus voluptates porro ipsum, nobis fuga impedit veritatis eligendi eveniet necessitatibus excepturi tenetur, quo similique dicta.</p>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti, libero obcaecati possimus sit maiores, rerum nesciunt itaque eaque magni deserunt iure, incidunt esse quidem. Voluptatem labore ratione adipisci facilis.</p>
        //         </Col>
        //     </Row>
        // </Container>
        <AboutSection />
    );
}

export default AboutPage;