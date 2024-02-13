const Blog=()=>{
    return(
        <>
         <div className="app_Blog">
      <div className="top-content_Blog">
        <h1>Title Here</h1>
        <p>Content goes here</p>
      </div>
      <div className="card-container_Blog">
        <div className="card_Blog">
          <img src="image1.jpg" alt="Card 1" />
          <div className="card-content_Blog">
            <h2>Card 1 Title</h2>
            <p>Card 1 content goes here</p>
          </div>
        </div>
        <div className="card_Blog">
          <img src="image2.jpg" alt="Card 2" />
          <div className="card-content_Blog">
            <h2>Card 2 Title</h2>
            <p>Card 2 content goes here</p>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default Blog