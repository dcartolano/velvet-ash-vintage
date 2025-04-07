import FeaturedCard from '../components/FeaturedCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShopPage = () => {
    return (
        <div className="">
            <Container className="mb-5" fluid>
                <p className="fs-3 fw-light">Featured Items</p>
                <Row xs={2} sm={3} md={3} lg={4}>
                    {/* <Row> */}
                    {featuredItems.length > 0 ? (
                        featuredItems.map((product, index) => (
                            <Col xs={6} md={4} lg={3} className="p-0">
                                {/* <Col> */}
                                <FeaturedCard
                                    product={product}
                                    key={index}
                                />
                            </Col>
                        ))
                    ) : (
                        <div>
                            <p>please add a featured item!</p>
                        </div>
                    )}
                </Row>
            </Container>
        </div >
    );
}

export default ShopPage;