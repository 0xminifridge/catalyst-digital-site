import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Project';
import Services from './Components/Services/Services';

const Routing = () => {
  return(
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects}/>
        <Route path="/services" component={Services}/>
      </Switch>
      <Footer/>
    </Router>
  )
}

ReactDOM.render(
    <Router>
    <Routing/>
    </Router>,
  document.getElementById('root')
);