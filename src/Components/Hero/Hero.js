import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

class Hero extends Component {
    render(){
       return (
        <div className="hero-page">
            <img src="./images/hero-bg.png" className='hero-img'/> 
            <p class="hero-text">Building Blockchain Solutions</p>
            <div className="hero-buttons">
                <Link to="/contact" className="project-btn"><p>Start Your Project</p></Link>
                {/* <Link to="/contact" className="project-btn"><p>Start Your Project</p></Link> */}
            </div>
            
        </div>
       );
    }
}

export default Hero;