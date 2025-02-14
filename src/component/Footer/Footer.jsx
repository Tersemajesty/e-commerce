import styles from "./Footer.module.css"
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
         <div className={styles.wrap}>
         <div className={styles.inner}>
            <strong>About Us</strong>
            <h2>Fragrances.com.ng owned by Prebel Services Ltd is an online perfume shop in Nigeria designed to awaken your senses with our large collection of authentic extraordinary perfumes, fragrances, scents, deodorants, 
                best online perfumes deals and gift sets.</h2>
                <strong>Subscribe to Our Newsletter</strong>
                <input type="text"
                placeholder="Enter your Email address" className={styles.input}/>
                <strong>Conect</strong>
                <div className={styles.social}>
                <FaInstagram  size={20}/>
                <FaXTwitter size={20}/>
                <FaFacebookF size={20} />
                <FaTiktok size={20}/>

                <FaWhatsapp />
                </div>
         </div>
        <div className={styles.inner1}>
        <strong>MY PROFILE </strong>
        <ul>
            <li>My Account</li>
            <li>Order history</li>
            <li>My Card</li>
            <li>Advance Search</li>
            <li>Checkout</li>
        </ul>

        </div>
        
        <div className={styles.inner2}>
        <strong>Information </strong>
        <ul>
            <li>About us</li>
            <li>Delivery information</li>
            <li>Privacy Policy</li>
            <li>Return policy</li>
            <li>Contact Us</li>
            <li>Fragrances fact</li>
            <li>FAQ</li>
        </ul>

        </div>
        <div className={styles.inner3}></div>
         </div>
        <div className={styles.wrap2}>
          <div className={styles.wrap1}>
              <p> <FaRegCopyright /> 2025 Fragrances.com.ng. All Rights Reserved.</p>
              <img alt="Download the Uber app for IOS" aria-hidden="true" loading="lazy" role="presentation" src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"/>
              <img alt="Download the Uber app for Android" aria-hidden="true" loading="lazy" role="presentation" src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"/>
            
          </div>
          <div className={styles.wrap3}>
            
          </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer