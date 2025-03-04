

const FeaturedCard = (product) => {

    // console.log(product);
    const currentProduct = product.product;
    return (
        // <a href={currentProduct.productUrl}>
        <div className="card" style={{width: 18 + 'em'}}>
            <a href={currentProduct.productUrl} target="_blank">
            <img className="card-img-top" src={currentProduct.productImage} alt={currentProduct.productTitle}/>
                <div className="card-body">
                    <h5 className="card-title">{currentProduct.productTitle}</h5>
                    <p className="card-text">{currentProduct.productPrice}</p>
                    {/* <a href={currentProduct.productUrl} className="btn btn-primary">Go somewhere</a> */}
                </div>
                </a>
        </div>
        // </a>
    );
}

export default FeaturedCard;

