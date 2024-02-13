import blogImage from './../assets/images/blog-image.jpg'
import blogImage1 from './../assets/images/blog-image0.jpg'
const Blog=()=>{
    return(
        <>
        <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="cards">
      <img src={blogImage1} class="cards-img-top" alt="..."/>
      <div class="cards-body">
        <h5 class="cards-title">cards title</h5>
        <p class="cards-text">This is a longer cards with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="cards">
      <img src={blogImage} class="cards-img-top" alt="..."/>
      <div class="cards-body">
        <h5 class="cards-title">cards title</h5>
        <p class="cards-text">This is a longer cards with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  
 
</div>
        </>
    )
}
export default Blog