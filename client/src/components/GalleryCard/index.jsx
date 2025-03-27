const GalleryCard = (post) => {

    // console.log('post: ', post);
    const parentPostUrl = post.post.parentPostUrl;

    // console.log('parentPostUrl: ', parentPostUrl);
    const postContent = post.post.postContent;

    // console.log('postContent: ', postContent);
    const postId = post.post.postId;
    
    // console.log('postId: ', postId);

    const decodedPostContent = decodeURIComponent(postContent);
    // console.log('decodedPostContent: ', decodedPostContent);

    return (
        <div>
            <div className="" fluid>
                <div className="" dangerouslySetInnerHTML={{ __html: decodedPostContent }}></div>
            </div>
        </div>
    );
}

export default GalleryCard;