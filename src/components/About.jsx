import './About.css'
import planeImage from './../assets/images/plane-img.png'
const About =()=>{
    return (
        <>
         <div className="container_About">
      
      <div className="box_About">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src={planeImage} alt="Plane image" className="plane-image" />
      </div>
      <button className="round-orange-button">Read More</button>
      
    </div>
    
        </>
    )
}
export default About