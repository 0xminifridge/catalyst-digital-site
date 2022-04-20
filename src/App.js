import './App.css';
import Hero from "./Components/Hero/Hero";
import Navbar from './Components/Navbar/Navbar';
import AboutHero from './Components/AboutHero/AboutHero';
import TeamHero from './Components/TeamHero/TeamHero';
import Contact from './Components/Contact/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Hero/>
      <AboutHero/>
      <TeamHero/>
    </div>
  );
}

export default App;
