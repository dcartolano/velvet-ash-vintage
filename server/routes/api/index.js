import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const tumblrConsumerKey = process.env.TUMBLR_CONSUMER_KEY;
const etsyKeystring = process.env.ETSY_KEYSTRING;

const tumblrPostLimit = 10;

router.route('/getGalleryPosts').get(async (_req, res) => {

    try {
        const tumblrResponse = await fetch(`http://api.tumblr.com/v2/blog/caffeinatedaze.tumblr.com/posts?api_key=${tumblrConsumerKey}&limit=${tumblrPostLimit}`);

        if (!tumblrResponse.ok) {
            const errorBody = await response.text(); // Get the response as text
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

                // postId: post.id,
                postUrl: post.post_url,
                postSummary: post.summary,
                parentPoster: post.trail[0].blog.name,
                // parentPostUrl: post.parent_post_url,
                // parentPostId: post.trail[0].post.id,
                postContent: post.trail[0].content
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
        const etsyResponse = await fetch(`https://openapi.etsy.com/v3/application/shops/37691936/listings/featured`, {
            method: 'GET',
            headers: {
                'x-api-key': etsyKeystring,
            },
        });

        if (!etsyResponse.ok) {
            const errorBody = await response.text(); // Get the response as text
            console.error('Error communicating with Etsy:', errorBody);
            return res.send('Error fetching shop info: ' + errorBody);
        }

        const rawEtsyListings = await etsyResponse.json();
        console.log('Etsy Response:', rawEtsyListings); // Log the featured listings response for debugging

        // const etsyFeaturedListingsArray = rawEtsyListings.response.posts;

        // const shopDataArray = await Promise.all(etsyFeaturedListingsArray.map(async (post) => {
        //     return {

        //         postUrl: post.post_url,
        //         postSummary: post.summary,
        //         parentPoster: post.trail[0].blog.name,
        //         postContent: post.trail[0].content
        //     }
        // }));

        // // console.log('shopDataArray: ', shopDataArray);

        // res.json(shopDataArray);

    } catch (error) {
        console.error('Error fetching featured listings:', error);
        res.json('Error fetching shop content');
    }
});

export default router;
