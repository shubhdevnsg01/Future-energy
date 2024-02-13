import './Travel.css'
import TravelIcon1 from './../assets/icon/travel-icon.png'
import TravelIcon2 from './../assets/icon/travel-icon2.png'
import TravelIcon3 from './../assets/icon/travel-icon3.png'
import TravelIcon4 from './../assets/icon/travel-icon4.png'
import facebook from './../assets/icon/facebook.png'

const Travel =()=>{
    return(
        <>
         <div className="select-offers-for-traveling">
      <div className="title">
        
        <b><h1>SELECT OFFERS FOR TRAVELING</h1></b>
      </div>
      <div className="content">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <div className="categories">
          <div className="category">
          <img src={TravelIcon1} alt="Travel Icon" class="icon" />
            <h2>Different Countrys</h2>
            <p>There are many variations of passages of Lorem Ipsum.</p>
            <button className="round-orange-button">Read More</button>
          </div>
          <div className="category">
          <img src={TravelIcon2} alt="Travel Icon" class="icon" />
            <h2>Mountains Tours</h2>
            <p>There are many variations of passages of Lorem Ipsum.</p>
            <button className="round-orange-button">Read More</button>
          </div>
          <div className="category">
          <img src={TravelIcon3} alt="Travel Icon" class="icon" />
            <h2>Bus Tours</h2>
            <p>There are many variations of passages of Lorem Ipsum.</p>
            <button className="round-orange-button">Read More</button>
          </div>
          <div className="category">
          <img src={TravelIcon4} alt="Travel Icon" class="icon" />
            <h2>Summer Rest</h2>
            <p>There are many variations of passages of Lorem Ipsum.</p>
            <button className="round-orange-button">Read More</button>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default Travel