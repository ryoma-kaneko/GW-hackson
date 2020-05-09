import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPosition: 0,
            headerBackgroundColor: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', event => this.watchCurrentPosition(), true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }

    watchCurrentPosition() {
        this.setState({ currentPosition: this.scrollTop() })
        if (this.state.currentPosition >= 280) { 
            if (this.state.headerBackgroundColor === false) this.setState({ headerBackgroundColor: true })
        } else {
            if (this.state.headerBackgroundColor === true) this.setState({ headerBackgroundColor: false })
        }
    }

    scrollTop() {
        return Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
        );
    }

    render() {
        return(
            <>
                <header>
                    <div className="content-area">
                        <div className="store-name-box content-item">
                            {/* <ScrollAnimation offset="0" animateIn="bounceInRight" duration="2.5" animateOnce>
                                <a href="#title-area">BJ Hair & Dream</a>
                            </ScrollAnimation> */}
                        </div>
                        <div className="nav-list-box content-item">
                            <ScrollAnimation offset="0" animateIn="bounceInLeft" duration="2" animateOnce>
                                <a href="#title-area" className="nav-box-item">Top</a>
                                <a href="#menu-area" className="nav-box-item">Menu</a>
                                <a href="#menu-area" className="nav-box-item">Price</a>
                                <a href="#member-area" className="nav-box-item">Member</a>
                                <a href="#information-area" className="nav-box-item">Information</a>
                            </ScrollAnimation>
                        </div>
                    </div>
                </header>
                <header className={['background-color-on', this.state.headerBackgroundColor ? 'display-on' : 'display-off'].join(' ')}>
                    <div className="content-area">
                        <div className="store-name-box content-item">
                            <a href="#title-area">BJ Hair & Dream</a>
                        </div>
                        <div className="nav-list-box content-item">
                            <a href="#title-area" className="nav-box-item">Top</a>
                            <a href="#menu-area" className="nav-box-item">Menu</a>
                            <a href="#menu-area" className="nav-box-item">Price</a>
                            <a href="#member-area" className="nav-box-item">Member</a>
                            <a href="#information-area" className="nav-box-item">Information</a>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default Header