import './index.css';

import Image from 'react-bootstrap/Image';

const FeaturedCard = (product) => {

    // console.log(product);
    const currentProduct = product.product;
    return (
        // <a href={currentProduct.productUrl}>
        // <div className="card" style={{width: 18 + 'em'}}>
        <div className="card border-0">
            <a href={currentProduct.productUrl} target="_blank">
                <Image className="card-img-top" src={currentProduct.productImage} alt={currentProduct.productTitle} rounded fluid/>
                <div className="card-body">
                    <p className="card-title fs-6 fw-medium">{currentProduct.productTitle}</p>
                    <p className="card-text fw-light">{currentProduct.productPrice}</p>
                    {/* <a href={currentProduct.productUrl} className="btn btn-primary">Go somewhere</a> */}
                </div>
            </a>
        </div>
        // </a>
    );
}

export default FeaturedCard;

