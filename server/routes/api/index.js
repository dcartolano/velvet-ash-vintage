import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const tumblrConsumerKey = process.env.TUMBLR_CONSUMER_KEY;
const etsyKeystring = process.env.ETSY_KEYSTRING;

const tumblrPostLimit = '10'; // str
// let etsyListingId = 0; // num
// let listingImagesArray = []; // array

const tumblrPostsUrl = `http://api.tumblr.com/v2/blog/caffeinatedaze.tumblr.com/posts?api_key=${tumblrConsumerKey}&limit=${tumblrPostLimit}`;
const etsyFeaturedListingsUrl = `https://openapi.etsy.com/v3/application/shops/37691936/listings/featured`;
// const etsyListingImagesUrl = `https://openapi.etsy.com/v3/application/listings/${etsyListingId}/images`;

router.route('/getGalleryPosts').get(async (_req, res) => {

    try {
        const tumblrResponse = await fetch(tumblrPostsUrl);

        if (!tumblrResponse.ok) {
            const errorBody = await tumblrResponse.text(); // Get the response as text
            console.error('Error communicating with Tumblr:', errorBody);
            return res.send('Error fetching gallery info: ' + errorBody);
        }

        const rawTumblrPosts = await tumblrResponse.json();
        // console.log('Tumblr Response:', rawTumblrPosts); // Log the posts response for debugging

        const tumblrPostsArray = rawTumblrPosts.response.posts;
        // console.log('tumblrPostsArray: ', tumblrPostsArray);
        // console.log('tumblrPostsArray[0]: ', tumblrPostsArray[0]);
        // console.log('tumblrPostsArray[0].parent_post_url: ', tumblrPostsArray[0].parent_post_url);
        // console.log('tumblrPostsArray[0].trail: ', tumblrPostsArray[0].trail);
        // console.log('tumblrPostsArray[0].trail[0].post: ', tumblrPostsArray[0].trail[0].post);
        // console.log('tumblrPostsArray[0].trail[0].content: ', tumblrPostsArray[0].trail[0].content);

        // console.log('tumblrPostsArray[1]: ', tumblrPostsArray[1]);
        // console.log('tumblrPostsArray[1].trail: ', tumblrPostsArray[1].trail);
        // console.log('tumblrPostsArray[1].trail[0].content: ', tumblrPostsArray[1].trail[0].content);

        // console.log('tumblrPostsArray[9]: ', tumblrPostsArray[9]);
        // console.log('tumblrPostsArray[9].trail: ', tumblrPostsArray[9].trail);
        // console.log('tumblrPostsArray[9].trail[0].content: ', tumblrPostsArray[9].trail[0].content);
        // image permalink ????

        const galleryDataArray = await Promise.all(tumblrPostsArray.map(async (post) => {
            return {

                // postId: post.id, // num (may not be needed)
                postUrl: post.post_url, // str
                postSummary: post.summary, // str
                parentPoster: post.trail[0].blog.name, // str
                // parentPostUrl: post.parent_post_url, // str (may not be needed)
                // parentPostId: post.trail[0].post.id, // str (may not be needed)
                postContent: post.trail[0].content // str
            }
        }));

        // console.log('galleryDataArray: ', galleryDataArray);

        res.json(galleryDataArray);

    } catch (error) {
        console.error('Error fetching gallery posts:', error);
        res.json('Error fetching gallery content');
    }
});

router.route('/getFeaturedItems').get(async (_req, res) => {

    try {
        const etsyListingsResponse = await fetch(etsyFeaturedListingsUrl, {
            method: 'GET',
            headers: {
                'x-api-key': etsyKeystring,
            },
        });

        if (!etsyListingsResponse.ok) {
            const errorBody = await etsyListingsResponse.text(); // Get the response as text
            console.error('Error communicating with Etsy:', errorBody);
            return res.send('Error fetching shop info: ' + errorBody);
        }

        const rawEtsyListings = await etsyListingsResponse.json();
        // console.log('Etsy Listings Response:', rawEtsyListings); // Log the featured listings response for debugging

        const etsyFeaturedListingsArray = rawEtsyListings.results;

        const shopDataArray = await Promise.all(etsyFeaturedListingsArray.map(async (listing) => {

            // const etsyListingId = listing.listing_id; // num


            const etsyImagesResponse = await fetch(`https://openapi.etsy.com/v3/application/listings/${listing.listing_id}/images`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'x-api-key': etsyKeystring,
                },
            });

            if (!etsyImagesResponse.ok) {
                const errorBody = await etsyImagesResponse.text(); // Get the response as text
                console.error('Error communicating with Etsy:', errorBody);
                return res.send('Error fetching shop info: ' + errorBody);
            }

            const rawEtsyImages = await etsyImagesResponse.json();
            // console.log('Etsy Images Response:', rawEtsyImages); // Log the featured listings response for debugging

            const etsyImagesArray = rawEtsyImages.results;

            const listingImagesArray = await Promise.all(etsyImagesArray.map(async (image) => {
                // return {
                //     // listingId: listing.listing_id, // num (may not be needed)
                //     listingTitle: listing.title, // str
                //     // listingState: listing.state, // str (may not be needed)
                //     listingUrl: listing.url, //str
                //     // listingTags: listing.tags, // [str] (array of str) (may not be needed)
                //     listingPrice: (listing.price.amount / listing.price.divisor) // num (divides price amount by price divisor)
                // }
                // console.log(image.url_570xN);
                return image.url_570xN;
            }));

            console.log(listingImagesArray);

            return {

                listingImages: listingImagesArray,
                // listingId: listing.listing_id, // num (may not be needed)
                listingTitle: listing.title, // str
                // listingState: listing.state, // str (may not be needed)
                listingUrl: listing.url, //str
                // listingTags: listing.tags, // [str] (array of str) (may not be needed)
                listingPrice: (listing.price.amount / listing.price.divisor).toFixed(2) // num (divides price amount by price divisor)
            }
        }));

        // console.log('shopDataArray: ', shopDataArray);

        res.json(shopDataArray);

    } catch (error) {
        console.error('Error fetching featured listings:', error);
        res.json('Error fetching shop content');
    }
});

export default router;
