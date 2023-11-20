import React from 'react'
import '../stylesheets/Contactsection.css'

export default function Contactsection() {
    return (
        <div className="contact-page">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>If you have any questions or inquiries, feel free to reach out to us.</p>
                <address>
                    <p>12959 Coral Tree Pl,</p>
                    <p>Los Angeles,</p>
                    <p>CA 90066, United States</p>
                </address>
                <p>Email: info@squareofai.com</p>
                <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div className="map-section">
                {/* Add your Google Map component here */}
                {/* Make sure to replace YOUR_GOOGLE_MAPS_API_KEY with your actual API key */}
                <iframe
                    title="Google Map"
                    width="100%"
                    height="400"
                    frameBorder="1"
                    style={{ border: '2px solid black' }}
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d178318.8954069449!2d-118.00780576823443!3d33.85337979790884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700415469822!5m2!1sen!2sin`}
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}
