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
                {/* <p className="">Gallery</p> */}
                <Row xs={2} md={3} lg={3}>
                    {galleryData.length > 0 ? (
                        galleryData.map((post, index) => (
                            <Col xs={6} md={4} lg={4} className="p-3" key={index}>
                                <GalleryCard
                                    post={post}
                                />
                            </Col>
                        ))
                    ) : (
                        <div>
                            {/* <p>nothing to show!</p> */}
                        </div>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default GalleryPage;