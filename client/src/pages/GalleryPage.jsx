const GalleryPage = () => {

    const decodedBody = decodeURIComponent('<p><a class=\"tumblr_blog\" href=\"https://pixdar.tumblr.com/post/766292474406813696/rue-de-bas-b%C3%A9thencourt-sur-mer-somme-novembre\">pixdar</a>:</p><blockquote><div class=\"npf_row\"><figure class=\"tmblr-full\" data-orig-height=\"1894\" data-orig-width=\"2800\"><img src=\"https://64.media.tumblr.com/2a1fba2f616fe79d2186aef1a073314d/cd6f1a34c5dfe6e6-f0/s640x960/c5f04d674e50ef6df4362bb0dfd4482fe4c5ec8f.jpg\" data-orig-height=\"1894\" data-orig-width=\"2800\" srcset=\"https://64.media.tumblr.com/2a1fba2f616fe79d2186aef1a073314d/cd6f1a34c5dfe6e6-f0/s75x75_c1/311632b8e9c7674d8a87bd52319a624588149212.jpg 75w, https://64.media.tumblr.com/2a1fba2f616fe79d2186aef1a073314d/cd6f1a34c5dfe6e6-f0/s100x200/c13f2293f253488e2131b2acd5a666d68bec96af.jpg 100w, https://64.media.tumblr.com/2a1fba2f616fe79d2186aef1a073314d/cd6f1a34c5dfe6e6-f0/s250x400/14a37a9b39479c47e534263a0120de6e827d121d.jpg 250w, https://64.media.tumblr.com/2a1fba2f616fe79d2186aef1a073314d/cd6f1a34c5dfe6e6-f0/s400x600/25453385b26d0efbb223a0e7d096ef89634b01d3.jpg 400w, https://64.media.tumblr.com/2a1fba2f616fe79d2186aef1a073314d/cd6f1a34c5dfe6e6-f0/s500x750/d42b7cbedf9cf77869c3dd5ca0caa313b5a01c51.jpg 500w, https://64.media.tumblr.com/2a1fba2f616fe79d2186aef1a073314d/cd6f1a34c5dfe6e6-f0/s540x810/088486c041a9d5565353895128ed391373559183.jpg 540w, https://64.media.tumblr.com/2a1fba2f616fe79d2186aef1a073314d/cd6f1a34c5dfe6e6-f0/s640x960/c5f04d674e50ef6df4362bb0dfd4482fe4c5ec8f.jpg 640w, https://64.media.tumblr.com/2a1fba2f616fe79d2186aef1a073314d/cd6f1a34c5dfe6e6-f0/s1280x1920/0fe20501e575ae3b01598f397e8b5491132b944c.jpg 1280w, https://64.media.tumblr.com/2a1fba2f616fe79d2186aef1a073314d/cd6f1a34c5dfe6e6-f0/s2048x3072/338af4daf2f21fc9feca24fd12a04cef4f8381ca.jpg 2048w\" sizes=\"(max-width: 1280px) 100vw, 1280px\"/></figure></div><p>Rue de Bas, Béthencourt-sur-Mer (Somme).<br/>Novembre 2022.</p></blockquote>');

    console.log(decodedBody);

    return (
        <div className="p-3">
            <p className="fs-3 fw-light">Gallery</p>
            <p>Under construction - coming soon!</p>
            {/* <div className="p-3">
                <div className="p-3" dangerouslySetInnerHTML={{ __html: decodedBody }}></div>
            </div> */}
        </div>
    );
}

export default GalleryPage;