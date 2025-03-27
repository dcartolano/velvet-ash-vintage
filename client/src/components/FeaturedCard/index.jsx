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
                    <Card.Body className="p-0 mt-2 item-info">
                        <Card.Title className="item-info m-0">{currentProduct.productTitle}</Card.Title>
                        <Card.Text className="item-price">{currentProduct.productPrice}</Card.Text>
                    </Card.Body>
                </Card.Body>
            </Card>
        </Card.Link>
    );
}

export default FeaturedCard;