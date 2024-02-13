import facebook from './../assets/icon/facebook.png'
import instagram from './../assets/icon/instagram.png'
import linkedin from './../assets/icon/linkedin.png'
import './Contact.css'
import { useState } from 'react'
const Contact =()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (formData.name.trim() === '' || formData.email.trim() === '' || formData.comment.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

      
        const alertMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nComment: ${formData.comment}`;
        alert(alertMessage);

        
        setFormData({
            name: '',
            email: '',
            comment: ''
        });
    };
    return (
        <>
            <div className="container_contact">
            <div className="icons_Contact">
                <a href="https://www.facebook.com/" target="_blank">
                    <img src={facebook} alt="Facebook Icon" class="icon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                    <img src={instagram} alt="Instagram Icon" class="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/shubham-singh-96b4751b4/" target="_blank">
                    <img src={linkedin} alt="LinkedIn Icon" class="icon" />
                    </a>
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
                           
                        </div>
                        
                            
                 <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Singh" />
                    </div>
                    <div className="col">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea className="form-control" id="comment" name="comment" rows="3" value={formData.comment} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3 d-flex justify-content-end">
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
            </form>
        
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact