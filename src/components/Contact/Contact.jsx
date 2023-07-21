import React from "react";
import "./contact.css";
import img from "../../assets/red_rec.png";
import img2 from "../../assets/pink_blob.png";
import img3 from "../../assets/purple_blob.png";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact_desc">
        <h1>Take your business to the next level,</h1>
        <p className="callout">CONTACT US TODAY!</p>
        <p className="desc_content">
          If you're ready to take your business to the next level, contact us
          today. Our team is always ready to help you achieve your digital
          marketing goals.
        </p>
      </div>

      <div className="contact_form">
        <div className="form">
          <div className="masterblog">
            <img src={img} alt="" />
            <div className="blog_content">
              <h1>Contact Information</h1>
              <p>
                Contact Us Today By Filling Out The Form Or Calling To Start
                Optimizing Your Digital Ad Campaigns!
              </p>
              <div className="blog_phone">
                <span class=" material-symbols-outlined">phone_in_talk</span>
                <span>+100 00 000 000</span>
              </div>

              <div className="blog_email">
                <span class=" material-symbols-outlined">mail</span>
                <span>Demo@gmail.com</span>
              </div>

              <div className="blog_address">
                <span class=" material-symbols-outlined">location_on </span>
                <span>
                  2nd Floor, D-32. Street Number 2. Veer Savarkar Block, Block
                  D. Lax
                </span>
              </div>

              <div className="social_fonts">
                <div>
                  <BsFacebook />
                </div>
                <div>
                  <BsInstagram />
                </div>
                <div>
                  <BsTwitter />
                </div>
                <div>
                  <BsLinkedin />
                </div>
              </div>
            </div>
            <div className="design_blogs">
              <img src={img2} className="blog1" alt="" />
              <img src={img3} className="blog2" alt="" />
            </div>
          </div>
        </div>

        <div className="form_details">
          <form className="client_form">
            <div className="cont">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="firstName"
                  id="firstName"
                  required
                  placeholder="Sarthak"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="lastName"
                  id="lastName"
                  required
                  placeholder="Garg"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="email"
                  id="email"
                  required
                  placeholder="demo@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="phone"
                  id="phone"
                  required
                  placeholder="+10 0000000"
                />
              </div>
            </div>
            <div className="radio">
              <h3>Select Subject ?</h3>

              <input
                type="radio"
                name="subject"
                id="subject1"
                className="subject1"
              />
              <label htmlFor="subject1">General Inquiry</label>

              <input
                type="radio"
                name="subject"
                id="subject2"
                className="subject2"
              />
              <label htmlFor="subject2">General Inquiry</label>

              <input
                type="radio"
                name="subject"
                id="subject3"
                className="subject3"
              />
              <label htmlFor="subject3">General Inquiry</label>

              <input
                type="radio"
                name="subject"
                id="subject4"
                className="subject4"
              />
              <label htmlFor="subject4">General Inquiry</label>
            </div>

            <label htmlFor="message">Message</label>
            <input
              type="text"
              className="message"
              id="message"
              name="message"
              placeholder="Write your message..."
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
