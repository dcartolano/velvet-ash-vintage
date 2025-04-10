import './index.css';

import ashPhoto2 from '../../assets/ash-about-2.jpg';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutSection = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <p className="fs-2 fw-bold about-title">WELCOME TO VELVET ASH VINTAGE</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="image-column" xs={{ span: 8, offset: 2 }} md={{ span: 4, offset: 0 }}>
                    <Image className="about-image" src={ashPhoto2} fluid />
                </Col>
                <Col className='text-start lh-lg about-bio' xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 0 }}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum autem soluta, est ab ad recusandae delectus eos ipsa, assumenda ipsum deserunt esse! Quaerat aspernatur hic possimus rerum esse sed impedit quis eligendi repellat mollitia.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima accusamus voluptates porro ipsum, nobis fuga impedit veritatis eligendi eveniet necessitatibus excepturi tenetur, quo similique dicta.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti, libero obcaecati possimus sit maiores, rerum nesciunt itaque eaque magni deserunt iure, incidunt esse quidem. Voluptatem labore ratione adipisci facilis.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutSection;