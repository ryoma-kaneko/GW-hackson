import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
function Footer() {
    return(
        <footer>
            <h2 className="f-title">BJ Hair & Dream</h2>
            <ScrollAnimation offset="5000" animateIn="flipInY" duration="1.5">
                <nav className="f-nav">
                    <ul className="f-ul">
                        <li className="f-li"><a href="#title-area" className="nav-box-item">Top</a></li>
                        <li className="f-li"><a href="#menu-area" className="nav-box-item">Menu</a></li>
                        <li className="f-li"><a href="#menu-area" className="nav-box-item">Price</a></li>
                        <li className="f-li"><a href="#member-area" className="nav-box-item">Member</a></li>
                        <li className="f-li"><a href="#information-area" className="nav-box-item">Information</a></li>
                    </ul>
                </nav>
            </ScrollAnimation>
            
        </footer>
    );
}

export default Footer;