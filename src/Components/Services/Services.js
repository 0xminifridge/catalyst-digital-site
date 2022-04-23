import React, { Component } from 'react';
import './Services.css';

class Services extends Component {
    render(){
       return (
        <div className="services-page">
            <h1>What We Offer</h1>
            <div className="services-wrapper">
                <div className="web2-offerings">
                    <h3>Web2</h3>
                    <ul className="offerings-list">
                        <li>Custom Website</li>
                        <li>Metadata API</li>
                    </ul>
                </div>
                <div className="web3-offerings">
                    <h3>Web3</h3>
                    <ul className="offerings-list">
                        <li>Smart Contracts</li>
                        <li>Native Mint Engine</li>
                        <li></li>
                    </ul>
                </div>
                <div className="other-offerings">
                    <h3>Other</h3>
                    <ul className="offerings-list">
                        <li>Image Generation</li>
                        <li>Metadata Pinning</li>
                    </ul>
                </div>
            </div>
        </div>
       );
    }
}

export default Services;