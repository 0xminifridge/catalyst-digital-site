import React, { Component } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

class Contact extends Component {
    static defaultProps = {
        TeamInfo: [
            {name: "Roby Liebbe", title: "CEO", imagePath: "./images/CEO.png"},
            {name: "Robert Hails", title: "CTO", imagePath: "./images/CTO.png"},
        ]
    };
    render(){
       return (
        <div className="contact-page">
            <div className="contact-wrapper">
                <div className="contact-text-wrapper">
                <h1 className="contact-header">CONTACT US</h1>
                    <p>Please contact us by phone or email to request our services and for a free consultation.</p>
                </div>
                <div className="contact-info-wrapper">
                    <div className="office-wrapper">
                        <h4>Office</h4>
                        <div>901 N Pollard St,
                            <br/>
                            Arlington, VA 22203
                        </div>
                    </div>
                    <div className="phone-wrapper">
                    <h4>Contact</h4>
                    <div>
                        <a href="mailto:catalystdigital3000@gmail.com" target="_blank"><FaEnvelope/> catalystdigital3000@gmail.com</a><br/><FaPhone/> 214-906-1893
                    </div>
                    </div>
                </div>
            </div>

            <div className="team-wrapper">
                {this.props.TeamInfo.map((p) => (
                    <div>
                        <img src={p.imagePath} className="team-img" loading='eager'/>
                        <div>
                            <h3 className="team-title">{p.title}</h3>
                            <p className="team-name">{p.name}</p>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
       );
    }
}

export default Contact;