import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Home from "./Components/Home";

export default function App() {
  const Routing = () => {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/services" component={Services} />
        </Switch>
        <Footer />
      </Router>
    );
  };

  return (
    <>
      <Router>
        <Routing />
      </Router>
    </>
  );
}
