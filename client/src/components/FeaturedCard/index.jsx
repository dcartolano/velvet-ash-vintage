import './index.css';

import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/esm/Container';

const FeaturedCard = (product) => {
    // console.log(product);
    const currentProduct = product.product;

    const proxy = 'https://corsproxy.io/?url=';
    const imageUrl = currentProduct.listingImages[0];
    const proxiedImageUrl = proxy + imageUrl;

    return (
        <Card.Link href={currentProduct.listingUrl} className="text-decoration-none text-start" target="_blank">
            <Card className="border-0" text="dark" >
                <Card.Body>
                    <Container className="image-container">
                        <Card.Img className="rounded-0 item-image" variant="top" src={proxiedImageUrl} alt={currentProduct.listingTitle} />
                    </Container>
                    <Card.Body className="p-0 mt-2 item-info">
                        <Card.Title className="item-info m-0">{currentProduct.listingTitle}</Card.Title>
                        <Card.Text className="item-price">{`$${currentProduct.listingPrice}`}</Card.Text>
                    </Card.Body>
                </Card.Body>
            </Card>
        </Card.Link>
    );
}

export default FeaturedCard;