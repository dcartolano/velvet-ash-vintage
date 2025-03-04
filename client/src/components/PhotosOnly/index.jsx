import Image from 'react-bootstrap/Image';
import cbchmp from '../../assets/crystal-bronze-candle-holders-mortar-pestle.jpeg';
import immcv from '../../assets/iron-man-marble-coaster-vase.jpeg';
import sss from '../../assets/shells-starfish-ship.jpeg';
import wcfslb from '../../assets/wooden-cup-fish-sticks-lobster-bowl.jpeg';

// client/src/assets/shells-starfish-ship.jpeg
// client/src/assets/wooden-cup-fish-sticks-lobster-bowl.jpeg

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const PhotosOnly = () => {
    return (
        // <ThemeProvider
        //     breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        //     minBreakpoint="xxs"
        // >
        //     <Container>
        //         <Row>
        //             <Col>
        //                 <Image src={cbchmp} fluid />
        //             </Col>
        //             <Col sm={true}>
        //                 <Image src={cbchmp} fluid />
        //             </Col>
        //             <Col sm={true}>
        //                 <Image src={cbchmp} fluid />
        //             </Col>
        //             <Col sm={true}>
        //                 <Image src={cbchmp} fluid />
        //             </Col>
        //         </Row>
        //     </Container>
        // </ThemeProvider>

        // <CardGroup>
        //     <Card>
        //         <Card.Img src={cbchmp}/>
        //     </Card>
        //     <Card>
        //         <Card.Img src={cbchmp}/>
        //     </Card>
        // </CardGroup>
        <Container fluid>
        <Row   className="g-0">
          <Col>
          <Image src={cbchmp} fluid />
          </Col>
          <Col>
          <Image src={immcv} fluid />
          </Col>
          <Col>
          <Image src={sss} fluid />
          </Col>
          <Col>
          <Image src={wcfslb} fluid />
          </Col>
      </Row>
      </Container>

        // <Container className="photo-bar">
        //     <Image src={cbchmp} fluid />
        //     <Image src={cbchmp} fluid />
        //     <Image src={cbchmp} fluid />
        //     <Image src={cbchmp} fluid />
        // </Container>
    );
}

export default PhotosOnly;