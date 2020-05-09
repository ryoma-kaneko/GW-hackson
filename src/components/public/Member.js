import React from 'react';

import MemberCard from './MemberCard';
import member1 from '../../images/member-1.jpg';
import member2 from '../../images/member-2.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

function Member() {

    const members = [
        { 
            icon: member1, 
            memberName: '安部　晋三',
            description: 'ここに簡単な紹介文。お客様の心と髪に正直に向き合い、出来る限りのご要望にお応えします。"bj hair&dream"で髪を切ることが楽しいイベントになりますように。',
        },
        { 
            icon: member2, 
            memberName: 'Abe Shinzou',
            description: 'Here sample description. Use Replacer as a starting point in your next project or choose predesigned elements to customize',
        }
    ]

    return(
        <div className="member-area" id="member-area">
            <div className="member-box">
                <div className="title-box">
                    <h3 className="title">
                        <ScrollAnimation offset="5000" animateIn="flipInY" duration="1.5">
                            Members
                        </ScrollAnimation>
                    </h3>
                </div>
                <div className="flex-members-area">
                    {
                        members.map((member, index)=> {
                            return (
                                <ScrollAnimation animateIn="fadeIn" duration="2" animateOut="fadeOut">
                                    <MemberCard key={index} 
                                               icon={member.icon} 
                                               name={member.memberName} 
                                               description={member.description} 
                                    />
                                </ScrollAnimation>
                            )
                        })
                    }
                </div> 
                <div className="contact-us">
                    
                </div>
            </div>
        </div>
    );
}

export default Member;