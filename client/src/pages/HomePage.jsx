import FeaturedCard from '../components/FeaturedCard';
// import PhotoAndSlogan from '../components/PhotoAndSlogan';
import PhotosOnly from '../components/PhotosOnly';
// import Socials from '../components/Socials';

import curvedWoodenBox from '../assets/curved-wooden-box.jpg';
import pinkGrayMarbleChessBoard from '../assets/pink-gray-marble-chess-board.jpg';
import rectangularBlockGlassCandleholders from '../assets/rectangular-block-glass-candleholders.jpg';
import iittalaGlassTriangularCandleholders from '../assets/iittala-glass-triangular-candleholders.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
    const featuredItems =
        [
            {
                productImage: curvedWoodenBox,
                productTitle: 'Curved Wooden Bandsaw Jewelry Box with Two Drawers',
                productPrice: '$95.00',
                productUrl: 'https://www.etsy.com/listing/1868293425/curved-wooden-bandsaw-jewelry-box-with?ref=shop_home_feat_1&logging_key=fa741ac6671682476cda6d02258ced997f5441e8%3A1868293425'
            },
            {
                productImage: pinkGrayMarbleChessBoard,
                productTitle: 'Vintage Pink and Gray Marble Chess Board Checker Board',
                productPrice: '$105.00',
                productUrl: 'https://www.etsy.com/listing/1853371292/vintage-pink-and-gray-marble-chess-board?ref=shop_home_feat_2&logging_key=64099e0be99b0f30462691504f6d4cb19a61a16e%3A1853371292'
            },
            {
                productImage: rectangularBlockGlassCandleholders,
                productTitle: 'Set of Two Vintage Rectangular Block Glass Candleholders',
                productPrice: '$49.00',
                productUrl: 'https://www.etsy.com/listing/1866793583/set-of-two-vintage-rectangular-block?ref=shop_home_feat_3&logging_key=89e0800a780aef600325891453ddf16ca1c35d4a%3A1866793583'
            },
            {
                productImage: iittalaGlassTriangularCandleholders,
                productTitle: 'Set of Two Vintage Iittala Glass Triangular Candleholders',
                productPrice: '$73.00',
                productUrl: 'https://www.etsy.com/listing/1852113666/set-of-two-vintage-iittala-glass?ref=shop_home_feat_4&logging_key=480ccbce89ae353762e084bb0df6da43e2919857%3A1852113666'
            }
        ];

    return (
        <div className="">
            <Container className="mb-5" fluid>
                <p className="fs-3 fw-light">Featured Items</p>
                <Row xs={2} sm={3} md={3} lg={4}>
                {/* <Row> */}
                    {featuredItems.length > 0 ? (
                        featuredItems.map((product, index) => (
                            <Col xs={6} md={4} lg={3} className="p-0">
                                {/* <Col> */}
                                <FeaturedCard
                                    product={product}
                                    key={index}
                                />
                                </Col>
                        ))
                    ) : (
                        <div>
                            <p>please add a featured item!</p>
                        </div>
                    )}
                </Row>
            </Container>
            {/* <hr className="p-2 align-center" style={{ width: '98%'}}/> */}
            {/* <PhotoAndSlogan/> */}
            <PhotosOnly />
            {/* <Socials/> */}
        </div >
    );
}

export default HomePage;