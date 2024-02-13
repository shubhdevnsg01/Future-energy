import blogImage from './../assets/images/blog-image.jpg'
import blogImage1 from './../assets/images/blog-image0.jpg'
import './Blog.css'
const Blog=()=>{
    return(
        <>
         <div className="blog-container">
                <h2 className="text-center blog-title">Blog Title</h2>
                <p className='"text-center blog-title"'>Lorem Ipsum is that more blah blah</p>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="cards">
                            <img src={blogImage1} className="cards-img-top" alt="..." />
                            <div className="cards-body">
                                <h5 className="cards-title">Card Title</h5>
                                <p className="cards-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="cards">
                            <img src={blogImage} className="cards-img-top" alt="..." />
                            <div className="cards-body">
                                <h5 className="cards-title">Card Title</h5>
                                <p className="cards-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog