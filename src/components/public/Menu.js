import React from 'react';
import Menus from '../../menus'
import ScrollAnimation from 'react-animate-on-scroll';
const Menu = () => {
    const menus = Menus
    return(
        <div className="menu-area" id= "menu-area">
            <div className="menu-box">
                <div className="title-box">
                    <ScrollAnimation offset="5000" animateIn="flipInY" duration="1.5">
                        <h2 className="title">Menu</h2>
                    </ScrollAnimation>
                </div>
                <div className="content-box">
                    <table>
                        <tbody>
                            {Object.keys(menus).map(key => {
                                const value = menus[key]
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <th>{value.name}</th> 
                                            <td>{value.price}</td>
                                        </tr>
                                        <br></br>
                                    </React.Fragment>
                                )
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Menu;