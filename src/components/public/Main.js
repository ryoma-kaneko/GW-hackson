import React from 'react'
import MediaQuery from "react-responsive";

import Header from '../common/Header';
import Footer from '../common/Footer';
import Title from './Title';
import Menu from './Menu';
import Member from './Member';
import Information from './Information';

class Main extends React.Component {
    render(){
        return(
            <>
                <MediaQuery query="(max-width: 767px)">
                    <div className="main-area-sp">
                        <Header />
                        <main className="main-wrap">
                            <Title />
                            <Menu />
                            <Member />
                            <Information />
                        </main>
                        <Footer />
                    </div>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <div className="main-area-pc">
                        <Header />
                        <main className="main-wrap">
                            <Title />
                            <Menu />
                            <Member />
                            <Information />
                        </main>
                        <Footer />
                    </div>
                </MediaQuery>
            </>
        );
    }
}

export default Main;