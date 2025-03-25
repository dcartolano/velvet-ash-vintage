import './index.css';

import Card from 'react-bootstrap/Card';

const FeaturedCard = (product) => {
    // console.log(product);
    const currentProduct = product.product;

    return (
        <Card.Link href={currentProduct.productUrl} className="text-decoration-none text-start" target="_blank">
            <Card className="border-0" text="dark" >
                <Card.Body>
                    <Card.Img className="rounded-0" variant="top" src={currentProduct.productImage} alt={currentProduct.productTitle} />
                    <Card.Body>
                        <Card.Title className="fs-6">{currentProduct.productTitle}</Card.Title>
                        <Card.Text className="fw-light">{currentProduct.productPrice}</Card.Text>
                    </Card.Body>
                </Card.Body>
            </Card>
        </Card.Link>
    );
}

export default FeaturedCard;