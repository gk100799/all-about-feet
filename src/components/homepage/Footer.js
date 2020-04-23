import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div style={{paddingTop:'50px'}}>
            <footer id="colorlib-footer" role="contentinfo">
			<div className="container">
				<div className="row row-pb-md">
					<div className="col footer-col colorlib-widget">
						<h5 style={{cursor: 'default'}}>ABOUT FOOTWEAR</h5>
						<p className="paddingTop" style={{cursor: 'default', color:'#7b7b7b', lineHeight:'28px', fontSize:'17px',paddingRight:'14px'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
						<p>
							<ul className="colorlib-social-icons">
								<li><a href="#"><i className="icon-twitter"></i></a></li>
								<li><a href="#"><i className="icon-facebook"></i></a></li>
								<li><a href="#"><i className="icon-linkedin"></i></a></li>
								<li><a href="#"><i className="icon-dribbble"></i></a></li>
							</ul>
						</p>
					</div>
					<div className="col footer-col colorlib-widget" style={{textAlign:'left'}}>
						<h5 style={{cursor: 'default'}}>Customer Care</h5>
						<p className="paddingTop">
							<ul className="colorlib-footer-links color7b" style={{margin:'0px',padding:'0px'}}>
								<li><a href="#">CONTACT</a></li>
								<li><a href="#">RETURNS/EXCHANGE</a></li>
								<li><a href="#">GIFT VOUCHER</a></li>
								<li><a href="#">WISHLIST</a></li>
								<li><a href="#">SPECIAL</a></li>
								<li><a href="#">CUSTOMER SERVICES</a></li>
								<li><a href="#">SITE MAPS</a></li>
							</ul>
						</p>
					</div>
					<div className="col footer-col colorlib-widget">
						<h5 style={{cursor: 'default'}}>INFORMATION</h5>
						<p className="paddingTop">
							<ul className="colorlib-footer-links color7b" style={{margin:'0px',padding:'0px'}}>
								<li><a href="#">ABOUT US</a></li>
								<li><a href="#">DELIVERY INFORMATION</a></li>
								<li><a href="#">PRIVACY POLICY</a></li>
								<li><a href="#">SUPPORT</a></li>
								<li><a href="#">ORDER TRACKING</a></li>
							</ul>
						</p>
					</div>

					<div className="col footer-col">
						<h5 style={{cursor: 'default'}}>NEWS</h5>
						<ul className="colorlib-footer-links paddingTop color7b" style={{margin:'0px',padding:'30px 0px 0px 0px'}}>
							<li><a href="blog.html">BLOG</a></li>
							<li><a href="#">PRESS</a></li>
							<li><a href="#">EXHIBITIONS</a></li>
						</ul>
					</div>

					<div className="col footer-col">
						<h5 style={{cursor: 'default'}}>CONTACT INFORMATION</h5>
						<ul className="colorlib-footer-links paddingTop color7b" style={{margin:'0px',padding:'30px 0px 0px 0px'}}>
							<li style={{cursor: 'default'}}>291 SOUTH 21TH STREET, <br /> SUITE 721 NEW YORK NY 10016</li>
							<li><a href="tel://1234567920">+ 1235 2355 98</a></li>
							<li><a href="mailto:info@yoursite.com">INFO@YOURSITE.COM</a></li>
							<li><a href="#">YOURSITE.COM</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	</div>

    )
}
