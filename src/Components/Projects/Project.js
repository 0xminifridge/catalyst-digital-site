import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
import {ProjectInfo} from './ProjectInfo';
import { FaTwitter } from 'react-icons/fa';

class Projects extends Component {
    render(){
       return (
        <div className="project-page">
            <h1>Featured Works</h1>
            {ProjectInfo.map((item,index) =>{
                return(
                    <div className="project-item-wrapper">
                        <div className="project-content">
                            <h2>{item.name}</h2>
                            <p className="project-description">{item.description}</p>
                            <Link className="twitter-link" to={{pathname: `https://www.twitter.com/${item.twitterHandle}`}} target="_blank"><FaTwitter/> @{item.twitterHandle}</Link>
                        </div>
                        <div className="project-img">
                            <Link to={{pathname: item.website}} target="_blank">
                                <img src={item.image}/>    
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
       );
    }
}

export default Projects;