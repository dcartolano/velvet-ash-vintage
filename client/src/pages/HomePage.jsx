import FeaturedCard from "../components/FeaturedCard";
import curvedWoodenBox from "../assets/curved-wooden-box.jpg";

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
        }
    ];

    return (
        <div className="p-3">
            <h3>Home</h3>
            <div>
                {featuredItems.length > 0 ? (
                    featuredItems.map((product, index) => (
                        <div key={index}>
                            <FeaturedCard
                            product = {product}
                            />
                        </div>
                    ))
                ) : (
                    <div>
                        <p>please add a featured item!</p>
                    </div>
                )
                }
            </div>
        </div >
    );
}

export default HomePage;