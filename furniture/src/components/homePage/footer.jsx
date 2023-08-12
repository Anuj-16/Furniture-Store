import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div className='abid-footer-container'>
      <div className='footer-one-abid'>
        <div id='fst-abid-clock'>
          <div id='abid-clock'>
            <img src="https://i.pinimg.com/originals/9a/22/b7/9a22b792f2b21a0c7832de476895704c.png" alt="" />
          </div>
          <div id="detail-inside">
            <p>Working</p>
            <p>24*7</p>
            <p>from 8.00 - 9.00</p>
          </div>
        </div>

        <div id='fst-abid-clock'>
          <div id='abid-clock'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8VAVcIvkDs0RQp7RIR83VH4sh6SqpDRm6lg&usqp=CAU" alt="" />
          </div>
          <div id="detail-inside">
            <p>Free Delivery</p>
            <p>WorldWide</p>
            <p>from $2.500</p>
          </div>
        </div>
        <div id='fst-abid-clock'>
          <div id='abid-clock'>
            <img style={{ marginTop: "0px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7azER2rBWaqPcK0v_VgMrxXdcbEfPddJYw&usqp=CAU" alt="" />
          </div>
          <div id="detail-inside">
            <p>Support</p>
            <p>Documentation</p>
            <p>All collection</p>
          </div>
        </div>
      </div>
      <div className='second-color-part'>
        <div className='footer-two-abid'>
          <div className='abid-contact-footer'>
            <p>0332 253 3535</p>
            <p>Online Store helpline</p>
          </div>
          <div className='abid-footer-opt'>
            Delivery Information
            Refund & Exchanges
            Privacy & Policies
            Term & Conditions
          </div>
        </div>
        <div className='footer-three-abid'>
          <div>@ 2023 AAMM All Right Reserved</div>
          <div className='abid-social-modes'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="abid-payment-modes">
            accepting payment methods
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-paypal"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
