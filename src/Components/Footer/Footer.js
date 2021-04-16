import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer id="footer" className="footer">
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                  <div className="full">
                     <div className="footer-widget">
                        <div className="footer-logo">
                           <a href="#"><img src="images/footer-logo.png" alt="#" /></a>
                        </div>
                        <p>Most of our events have hard and easy route choices as we are always keen to encourage new riders.</p>
                        <ul className="social-icons style-4 pull-left">
                           <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                           <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                           <li><a className="youtube" href="#"><i className="fa fa-youtube-play"></i></a></li>
                           <li><a className="pinterest" href="#"><i className="fa fa-pinterest-p"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-md-2">
                  <div className="full">
                     <div className="footer-widget">
                        <h3>Menu</h3>
                        <ul className="footer-menu">
                           <li><a href="about.html">About Us</a></li>
                           <li><a href="team.html">Our Team</a></li>
                           <li><a href="news.html">Latest News</a></li>
                           <li><a href="matche.html">Recent Matchs</a></li>
                           <li><a href="blog.html">Our Blog</a></li>
                           <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="full">
                     <div className="footer-widget">
                        <h3>Contact us</h3>
                        <ul className="address-list">
                           <li><i className="fa fa-map-marker"></i> Lorem Ipsum is simply dummy text of the printing..</li>
                           <li><i className="fa fa-phone"></i> 123 456 7890</li>
                           <li><i style={{fontSize:"20px", marginTop:"5px"}} className="fa fa-envelope"></i> rugby-federation@gmail.com</li>
                        </ul>
                     </div>
                  </div>
               </div>               
            </div>
         </div>
         <div className="footer-bottom">
            <div className="container">
               <p>Copyright © 2021 Rugby Federation.All rights reserved.</p>
            </div>
         </div>
      </footer>
        </div>
    );
};

export default Footer;