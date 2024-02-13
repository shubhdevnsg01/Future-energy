import './Home.css'
import logos from './../assets/images/logo-2.png'
import icon1 from './../assets/images/1.png'
import icon2 from './../assets/images/2.png'
import icon3 from './../assets/images/3.png'

const Home =()=>{
    
    return(    
        <>
    <nav class="navbar">
      <img src={logos}alt="logo"/>
      <div className="navbar-icons">
    <img src={icon1} alt="Icon 1" /> <p>145 street road New York</p>
    <img src={icon2} alt="Icon 2" /> <p>9909995603</p>
    <img src={icon3} alt="Icon 3" /><p>iamshubhamsingh26@gmail.com</p>
  </div>
  <div className="nav-links">
    <a href="#home" className="nav-link">Home</a>
    <a href="#about" className="nav-link">About</a>
    <a href="#Travel" className="nav-link">Travel</a>
    <a href="#Blog" className="nav-link">Blog</a>
    <a href="#Contact" className="nav-link">Contact</a>
  </div>
      </nav>
      <div className="background-container">
        <div className="content_Home">
        <h1 style={{ color: ' light blue' }}>TRAVEL</h1>
          <h1>WITH US</h1>
          <button className='button_Home'>Read More</button>
          <div className="container_Home">
  <h1>Find Your Tour</h1>

  <div className="search-bar-container">
    <div className="search-bar">
      <label htmlFor="keywords">Keywords</label>
      <input type="text" id="keywords" placeholder="Enter keywords" />

      <label htmlFor="category">Category</label>
      <select id="category">
        <option value="">Any</option>
        <option value="army">Army</option>
      </select>

      <label htmlFor="minPrice">Min Price</label>
      <input type="number" id="minPrice" placeholder="00.0" />
    </div>

    <div className="search-bar">
      <label htmlFor="maxPrice">Max Price</label>
      <input type="number" id="maxPrice" placeholder="00.0" />

      <button type="submit">Search</button>
    </div>
    <div className="filters">
    <label htmlFor="duration">Duration</label>
    <select id="duration">
      <option value="">Any</option>
      {/* Add more duration options here */}
    </select>

    <label htmlFor="date">Date</label>
    <input type="date" id="date" placeholder="mm/dd/yyyy" />
  </div>
  </div>

  
</div>

        </div>
      </div>
      
        </>
    )
}
export default Home