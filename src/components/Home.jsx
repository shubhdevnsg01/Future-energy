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
    <img src={icon1} alt="Icon 1" />
    <img src={icon2} alt="Icon 2" />
    <img src={icon3} alt="Icon 3" />
  </div>
      </nav>
        </>
    )
}
export default Home