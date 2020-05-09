import React from 'react';

import TopImage from '../../images/top.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

function Title() {
    return(
        <div className="title-area" id="title-area">
            <div className="image-box">
                <img className="image" src={TopImage} alt="barber" />
            </div>
            <div className="title-box">
                <ScrollAnimation offset="0" animateIn="fadeIn" duration="5" animateOnce>
                    <div className="text-box">
                        <h1 className="title">
                            BJ Hair & Dream
                        </h1>
                        <p className="sub-title">
                            風呂あがりでもかっこいいスタイルを目指します 
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
            <div className="gradient-box"></div>
        </div>
    );
}

export default Title;