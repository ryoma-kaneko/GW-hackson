import React from 'react';

function MemberCard(props) {
    return(
        <div className="member-card-box">
            <div className="icon-box">
                <img src={props.icon} className="icon" />
            </div>
            <div className="name-box">
                {props.name}
            </div>
            <div className="description-box">
                {props.description}
            </div>
        </div>
    )
}

export default MemberCard;