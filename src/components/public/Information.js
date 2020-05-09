import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
function Information() {
    return(
        <div className="information-area" id= "information-area">
            <div className="information-box">
                <div className="title-box">
                    <ScrollAnimation offset="5000" animateIn="flipInY" duration="1.5">
                    <h2 className="title">Slon Info</h2>
                    </ScrollAnimation>
                </div>
                <hr></hr>
                <div className="content-box">
                        <h2 className="tenpo">BJ Hair & Dream</h2>
                    <div className = "accsess-wrap">
                            <div className="access-map">
                                <iframe className="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.866453433135!2d139.70871141526018!3d35.72950278018302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5d4043e0dd%3A0x213775d25d2b034d!2z5rGg6KKL6aeF!5e0!3m2!1sja!2sjp!4v1580955395690!5m2!1sja!2sjp"
                                allowFullScreen=""></iframe>
                            </div>
                            
                            <div className="access-info">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>adress</th>
                                            <td>東京都豊島区南池袋１丁目</td>
                                        </tr>
                                        <tr>
                                            <th>Tel</th>
                                            <td>000-0000-0000</td>
                                        </tr>
                                        <tr>
                                            <th>Open</th>
                                            <td>10:00~19:00</td>
                                        </tr>
                                        <tr>
                                            <th>Close</th>
                                            <td>第一・第三月曜日</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;