import React from "react";
import '../stylesheets/Footer.css'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footernewsteller">
                    <div className="footer-left">
                        <a href="#">Product</a>
                        <a href="#">Company</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="footer-right">
                        <p>Get industry insights and creative inspiration straight to your inbox</p>
                        <input type="email" placeholder="Email address" />
                    </div>
                </div>
                <div className="title"><h1>SQUARE</h1></div>
                <div className="footerend">
                    <ul className="footer-ul">
                        <li>@ 2024 Square | AllRightsReserved</li>
                        <li>Contact@Square.co</li>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

