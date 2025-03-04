import FeaturedCard from "../components/FeaturedCard";
import PhotoAndSlogan from "../components/PhotoAndSlogan";
import PhotosOnly from "../components/PhotosOnly";
import Socials from "../components/Socials";

import curvedWoodenBox from "../assets/curved-wooden-box.jpg";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

const HomePage = () => {

    const featuredItems =
        [
            {
                productImage: curvedWoodenBox,
                productTitle: 'Curved Wooden Bandsaw Jewelry Box with Two Drawers',
                productPrice: '$95.00',
                productUrl: 'https://www.etsy.com/listing/1868293425/curved-wooden-bandsaw-jewelry-box-with?click_key=346b15fe5c6675fc0134945efb1ae691e9809046%3A1868293425&click_sum=81be9f02&ref=shop_home_feat_1'
            },
            {
                productImage: curvedWoodenBox,
                productTitle: 'Curved Wooden Bandsaw Jewelry Box with Two Drawers',
                productPrice: '$95.00',
                productUrl: 'https://www.etsy.com/listing/1868293425/curved-wooden-bandsaw-jewelry-box-with?click_key=346b15fe5c6675fc0134945efb1ae691e9809046%3A1868293425&click_sum=81be9f02&ref=shop_home_feat_1'
            },
            {
                productImage: curvedWoodenBox,
                productTitle: 'Curved Wooden Bandsaw Jewelry Box with Two Drawers',
                productPrice: '$95.00',
                productUrl: 'https://www.etsy.com/listing/1868293425/curved-wooden-bandsaw-jewelry-box-with?click_key=346b15fe5c6675fc0134945efb1ae691e9809046%3A1868293425&click_sum=81be9f02&ref=shop_home_feat_1'
            },
            {
                productImage: curvedWoodenBox,
                productTitle: 'Curved Wooden Bandsaw Jewelry Box with Two Drawers',
                productPrice: '$95.00',
                productUrl: 'https://www.etsy.com/listing/1868293425/curved-wooden-bandsaw-jewelry-box-with?click_key=346b15fe5c6675fc0134945efb1ae691e9809046%3A1868293425&click_sum=81be9f02&ref=shop_home_feat_1'
            }
        ];

    return (
        <div className="">
            <h3>Home</h3>
            <ThemeProvider
                breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                minBreakpoint="xxs"
            >
                <Container className="mb-5">
                    {/* <Row xs={2} sm={3} md={4} lg={4}> */}
                    <Row >
                        {featuredItems.length > 0 ? (
                            featuredItems.map((product, index) => (
                                <Col xxs={6} md={4} lg={3} key={index}>
                                    <FeaturedCard
                                        product={product}
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
                {/* <PhotoAndSlogan/> */}
                <PhotosOnly className="mb-5"/>
            </ThemeProvider>
        </div >
    );
}

export default HomePage;