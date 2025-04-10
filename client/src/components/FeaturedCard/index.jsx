import './index.css';

import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import Container from 'react-bootstrap/esm/Container';

const FeaturedCard = (product) => {
    // console.log(product);
    const currentProduct = product.product;

    return (
        <Card.Link href={currentProduct.listingUrl} className="text-decoration-none text-start" target="_blank">
            <Card className="border-0" text="dark" >
                <Card.Body>
                    <div className="image-container">
                        <Card.Img className="rounded-0 item-image" variant="top" src={currentProduct.listingImages[0]} alt={currentProduct.listingTitle} />
                        <Card.Img className="rounded-0 alt-image" variant="top" src={currentProduct.listingImages[1]} alt={currentProduct.listingTitle} />

                    </div>
                    <Card.Body className="p-0 mt-2 item-info">
                        <Card.Title className="item-info m-0 fw-bold">{currentProduct.listingTitle}</Card.Title>
                        <Card.Text className="item-price fw-bold">{`$${currentProduct.listingPrice}`}</Card.Text>
                    </Card.Body>
                </Card.Body>
            </Card>
        </Card.Link>
    );
}

export default FeaturedCard;