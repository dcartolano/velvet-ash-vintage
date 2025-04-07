import './index.css';

import Card from 'react-bootstrap/Card';

const FeaturedCard = (product) => {
    // console.log(product);
    const currentProduct = product.product;

    const proxy = 'https://corsproxy.io/?url=';
    const imageUrl = currentProduct.listingImages[0];
    const proxiedUrl = proxy + imageUrl;

    return (
        <Card.Link href={currentProduct.listingUrl} className="text-decoration-none text-start" target="_blank">
            <Card className="border-0" text="dark" >
                <Card.Body>
                    <Card.Img className="rounded-0" variant="top" src={proxiedUrl} alt={currentProduct.listingTitle} />
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