import React, { useState, useEffect } from 'react';

import GalleryCard from '../components/GalleryCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GalleryPage = () => {

    const [galleryData, setGalleryData] = useState([]);

    const fetchGalleryData = async () => {
        try {
            const response = await fetch('/api/getGalleryPosts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log(data);

            setGalleryData(data);

        } catch (error) {
            console.error('Failed to fetch gallery posts:', error);
            throw error;
        }
    };

    useEffect(() => {
        fetchGalleryData();
    }, []);

    return (
        <div className="">
            <Container className="">
                <p className="">Gallery</p>
                <Row xs={1} sm={1} md={1} lg={1}>
                    {galleryData.length > 0 ? (
                        galleryData.map((post, index) => (
                            <Col xs={12} md={12} lg={12} className="">
                                <GalleryCard
                                    post={post}
                                    key={index}
                                />
                            </Col>
                        ))
                    ) : (
                        <div>
                            <p>nothing to show!</p>
                        </div>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default GalleryPage;