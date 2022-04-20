import React, { Component } from 'react';
import './TeamHero.css';

class TeamHero extends Component {
    render(){
       return (
        <div className="team-hero-page">
            <img src="./images/team-dev.png" className="team-hero-img"/>
            <div className="team-hero-text-holder">
                <h3>Who We Are</h3>
                <p className="team-hero-content">We help your achieve your NFT goals by creating smart contracts and sites to deploy your NFT ideas.</p>
            </div>
        </div>
       );
    }
}

export default TeamHero;