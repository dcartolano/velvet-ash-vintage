import React, { useState, useEffect } from 'react';

import FeaturedCard from '../components/FeaturedCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShopPage = () => {

const [shopData, setShopData] = useState([]);

    const fetchShopData = async () => {
        try {
            const response = await fetch('/api/getActiveItems');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log(data);

            setShopData(data);

        } catch (error) {
            console.error('Failed to fetch shop listings:', error);
            throw error;
        }
    };

    useEffect(() => {
        fetchShopData();
    }, []);

    return (
        <div className="">
            <Container className="mb-5" fluid>
                <p className="fs-3 fw-light">Recently Listed Items</p>
                <Row xs={2} sm={3} md={3} lg={4}>
                    {/* <Row> */}
                    {shopData.length > 0 ? (
                        shopData.map((product, index) => (
                            <Col xs={6} md={4} lg={3} className="p-0" key={index}>
                                {/* <Col> */}
                                <FeaturedCard
                                    product={product}
                                />
                            </Col>
                        ))
                    ) : (
                        <div>
                            <p>no featured items to show!</p>
                        </div>
                    )}
                </Row>
            </Container>
        </div >
    );
}

export default ShopPage;