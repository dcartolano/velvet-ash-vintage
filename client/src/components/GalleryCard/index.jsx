import './index.css';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const GalleryCard = (post) => {

    // console.log('post: ', post);

    // const postId = post.post.postId;
    // console.log('postId: ', postId);
    const postUrl = post.post.postUrl;
    // console.log('postUrl: ', postUrl);
    const postSummary = post.post.postSummary;
    // console.log('postSummary: ', postSummary);
    const parentPoster = post.post.parentPoster;
    // console.log('parentPoster: ', parentPoster);
    // const parentPostUrl = post.post.parentPostUrl;
    // console.log('parentPostUrl: ', parentPostUrl);
    // const parentPostId = post.post.parentPostId;
    // console.log('parentPostId: ', parentPostId);
    const postContent = post.post.postContent;
    // console.log('postContent: ', postContent);

    const decodedPostContent = decodeURIComponent(postContent);
    // console.log('decodedPostContent: ', decodedPostContent);
    const decodedPostContentSplit = decodedPostContent.split(" ");
    // console.log(decodedPostContentSplit[2]);
    const decodedPostContentSplitReplaced = decodedPostContentSplit[2].replace("src=", "");
    // console.log(decodedPostContentSplitReplaced);
    const decodedPostContentSplitReplacedSliced = decodedPostContentSplitReplaced.slice(1, -1);
    // console.log(decodedPostContentSplitReplacedSliced);

    // const videoBoolean = /video/.test(decodedPostContentSplitReplacedSliced);
    // console.log(videoBoolean);


    return (
        <div>
            {/* <div className="">
                <div className="" dangerouslySetInnerHTML={{ __html: decodedPostContent }}></div>
            </div> */}
            {/* {videoBoolean ? (
                <div></div>
            ) : ( */}
                <Container text="dark">
                    <Link to={postUrl} className="text-decoration-none" target="_blank">
                        <Image src={decodedPostContentSplitReplacedSliced} fluid />
                        {/* <p>{postSummary} via {parentPoster} on Tumblr</p> */}
                    </Link>
                </Container>
            {/* )} */}
        </div >
    );
}

export default GalleryCard;