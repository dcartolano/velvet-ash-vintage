import React, { useState, useEffect } from 'react';

import FeaturedCard from '../components/FeaturedCard';
import PhotosOnly from '../components/PhotosOnly';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const HomePage = () => {

    const [shopData, setShopData] = useState([]);

    const fetchShopData = async () => {
        try {
            const response = await fetch('/api/getFeaturedItems');
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
            <Container className="mb-5 p-5" fluid>
                <p className="title fs-3 fw-light">Featured Items</p>
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
                            <Spinner className="spinner" animation="grow" variant="success" size="sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                    )}
                </Row>
            </Container>
            {/* <hr className="p-2 align-center" style={{ width: '98%'}}/> */}
            <PhotosOnly />
        </div >
    );
}

export default HomePage;