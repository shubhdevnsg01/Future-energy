import facebook from './../assets/icon/facebook.png'
import instagram from './../assets/icon/instagram.png'
import linkedin from './../assets/icon/linkedin.png'
import './Contact.css'
const Contact =()=>{
    return (
        <>
            <div className="container_contact">
                <div className="icons_Contact">
                    <img src={facebook} alt="Facebook Icon" class="icon" />
                    <img src={instagram} alt="Instagram Icon" class="icon" />
                    <img src={linkedin} alt="LinkedIn Icon" class="icon" />
                </div>
                <div className="contact_content">
                    <div className="contact_info">
                        <h2>Contact Us</h2>
                        <p>123 Second Street Fifth Avenue </p>
                        <p>Manhattan, New York</p>
                        <p>9909995603 </p>
                    </div>
                    <div className="additional_links">
                        <h2>Additional Links</h2>
                        <p>About Us</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>News</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="contact_forms">
                        <div className="contact_form">
                            <h2>Contact Form</h2>
                            {/* Add your Contact Form here */}
                        </div>
                        
                            
                        <div class="mb-3 row">
                        <div class="col">
                        <label for="name" class="form-label">Name</label>
                        <input type="name" class="form-control" id="name" placeholder="Singh"/>
                        </div>
                        <div class="col">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
                        </div>
                        </div>
                        <div class="mb-3">
                        <label for="comment" class="form-label">Comment</label>
                        <textarea class="form-control" id="comment" rows="3"></textarea>
                        </div>
                        <div class="mb-3 d-flex justify-content-end">
                        <button type="submit" class="btn btn-dark">Submit</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact