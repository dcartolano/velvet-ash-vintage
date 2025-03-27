import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const tumblrConsumerKey = process.env.TUMBLR_CONSUMER_KEY;

router.route('/getGalleryPosts').get(async (_req, res) => {

    try {
        const tumblrResponse = await fetch(`http://api.tumblr.com/v2/blog/caffeinatedaze.tumblr.com/posts?api_key=${tumblrConsumerKey}&limit=5`);

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
        // console.log('tumblrPostsArray[0].parent_post_url: ', tumblrPostsArray[0].parent_post_url);
        // console.log('tumblrPostsArray[1].trail: ', tumblrPostsArray[1].trail);
        // console.log('tumblrPostsArray[1].trail[0].content: ', tumblrPostsArray[1].trail[0].content);

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

export default router;
