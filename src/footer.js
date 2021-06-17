import React from "react";
import "./footer.css";
function footer() {
  return (
    <div className="footer">
      <img
        src="https://www.codingninjas.com/assets-landing/images/CNLOGO.svg"
        alt="logo"
      />

      <div className="container">
        <h3>CODING NINJAS</h3>
        <a href="/">About Us</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms & Condition</a>
        <a href="/">Pricing & Refund Policy</a>
        <a href="/">Bug Bounty</a>
        <a href="/">Customers</a>
        <a href="/">Press Release</a>
      </div>
      <div className="container">
        <h3>PRODUCTS</h3>
        <a href="/">Courses</a>
        <a href="/">Try courses for Free</a>
        <a href="/">Career Camp</a>
        <a href="/">Hire Talent</a>
      </div>
      <div className="container">
        <h3>COMMUNITY</h3>
        <a href="/">CodeStudio</a>
        <a href="/">Blog</a>
        <a href="/">Events</a>
        <a href="/">Campus Ninja</a>
        <a href="/">Affiliate</a>
      </div>
      <div className="container social-conatiner">
        <h3>FOLLOW US ON</h3>
        <div className="social">
          <img src="https://files.codingninjas.in/0000000000003240.png" alt="" />
          <img src="https://files.codingninjas.in/0000000000003241.png" alt="" />
          <img src="https://files.codingninjas.in/0000000000003245.png" alt="" />
          <img src="https://files.codingninjas.in/0000000000003247.png" alt="" />
          <img src="https://files.codingninjas.in/0000000000003242.png" alt="" />
          <img src="https://files.codingninjas.in/telegram-8247.svg" alt="" />
        </div>
        <a href="/">CONTACT US</a>
        <a href="/">1800-123-3598</a>
        <a href="/">contact@codingninjas.com</a>
      </div>
    </div>
  );
}

export default footer;
