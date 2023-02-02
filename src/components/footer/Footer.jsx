import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">RASHINI HANSIKA</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/rashiniambegoda/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-facebook"></i>
                </a>

                <a href="https://www.instagram.com/__rashi_nee/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://github.com/it20639976" className="footer__social-link" target="_blank">
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>
            
            <span className="footer__copy">&#169; Rashini Hansika Alright Reserved</span>

        </div>
    </footer >
  )
}

export default Footer