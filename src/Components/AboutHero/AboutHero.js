import React, { Component } from 'react';
import './AboutHero.css';

class AboutHero extends Component {
    render(){
       return (
        <div className="about-hero-page">
            <div className="about-hero-text-holder">
                <h3>What We Do</h3>
                <p className="about-hero-content">We help your achieve your NFT goals by creating smart contracts and sites to deploy your NFT ideas.</p>
            </div>
            <img src="./images/about-hero.png" className="about-hero-img"/>
        </div>
       );
    }
}

export default AboutHero;