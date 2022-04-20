import {React, Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {MenuItems} from './MenuItems';

class Navbar extends Component{
  render(){
    return(
        <nav className="navbar-items">
            <Link to="/">
                <img src="./images/logo-nav.png" className="logo-img"/> 
            </Link>
            <ul className="nav-links">
                {MenuItems.map((item,index) =>{
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={{pathname: item.tlink}} target="_blank"><p>{item.title}</p></Link>
                        </li>
                    );
                })}
            </ul>
            <Link to="/contact" className="contact-btn">
                <div>Contact</div>
            </Link>
        </nav>
    );
  }
}


export default Navbar;