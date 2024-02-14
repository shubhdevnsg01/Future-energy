import './Home.css'
import { useState } from 'react'
import logos from './../assets/images/logo-2.png'
import icon1 from './../assets/images/1.png'
import icon2 from './../assets/images/2.png'
import icon3 from './../assets/images/3.png'

const Home =()=>{
    
  const [formData, setFormData] = useState({
    keywords: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    duration: '',
    date: ''
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};
    if (formData.keywords.trim() === '') {
      validationErrors.keywords = 'Keywords cannot be empty';
    }
   

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
   
      alert(JSON.stringify(formData));

      
      setFormData({
        keywords: '',
        category: '',
        minPrice: '',
        maxPrice: '',
        duration: '',
        date: ''
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
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
        <h1>TRAVEL</h1>
          <h1>WITH US</h1>
          <button className='button_Home'>Read More</button>
          <div className="form-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="keywords">Keywords</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            required
          />
          {errors.keywords && <span className="error">{errors.keywords}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="adventure">Adventure</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="historic">Historic</option>
            
           
          </select>
          {errors.category && <span className="error">{errors.category}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={formData.minPrice}
            onChange={handleChange}
            required
          />
          {errors.minPrice && <span className="error">{errors.minPrice}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={formData.maxPrice}
            onChange={handleChange}
            required
          />
          {errors.maxPrice && <span className="error">{errors.maxPrice}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
          {errors.duration && <span className="error">{errors.duration}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <button type="submit">Search</button>
      </form>
    </div>

  


        </div>
      </div>
      
        </>
    )
}
export default Home