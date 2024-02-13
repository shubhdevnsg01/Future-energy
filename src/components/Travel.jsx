import './Travel.css'
import TravelIcon1 from './../assets/icon/travel-icon.png'
import TravelIcon2 from './../assets/icon/travel-icon2.png'
import TravelIcon3 from './../assets/icon/travel-icon3.png'
import TravelIcon4 from './../assets/icon/travel-icon4.png'
import London from './../assets/images/London.jpg'
import location1 from './../assets/images/1.jpg'
import location2 from './../assets/images/2.jpg'
import location3 from './../assets/images/3.jpg'

const Travel =()=>{
    return(
        <>
        <div>
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
    </div>
    <div>
    <div className="container_2">
      <div className="title_2">
      <h1 class="subtitle fancy"><span>BEST THINGS TO DO, IN LONDON</span></h1>
      </div>
      <div className="image-container_2">
        <img src={London} alt="Background" />
      </div>
    </div>
    </div>
    <div>
    <div class="container_3">
  <div class="header_3">
    <h1>Best Places Around</h1>
    <p>There are many variations of passages of Lorem  Ipsum available</p>
  </div>
  <div class="cards_3">
    <div class="card_3">
      <img src={location1} alt="Image 1"/>
      <div class="card-text_3">
        <h2>Holiday Tour</h2>
        <p>There are many variations of passages</p>
        <p>Lorem Ipsum available,but the majority have</p>
        <p>suffered alteration in soe suffk even slightly</p>
        <p> believable. If y be sure theres</p>
      </div>
    </div>
    <div class="card_3">
      <img src={location2} alt="Image 2"/>
      <div class="card-text_3">
      <h2>New York</h2>
      <p>There are many variations of passages</p>
        <p>Lorem Ipsum available,but the majority have</p>
        <p>suffered alteration in soe suffk even slightly</p>
        <p> believable. If y be sure theres</p>
      </div>
    </div>
    <div class="card_3">
      <img src={location3} alt="Image 3"/>
      <div class="card-text_3">
      <h2>London</h2>
      <p>There are many variations of passages</p>
        <p>Lorem Ipsum available,but the majority have</p>
        <p>suffered alteration in soe suffk even slightly</p>
        <p> believable. If y be sure theres</p>
      </div>
    </div>
  </div>
</div>
    </div>
    <div>
    <div class="container_4">
  <div class="content_4">
    <h1>ITALY TRAVEL GUIDE</h1>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by</p>
    <p>Injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
    <p>you need to be sure there</p>
    <div class="buttons_4">
      <button>Book Now</button>
      <button>Get More</button>
      </div>
      </div>
      </div>
      </div>
        </>
    )
}
export default Travel