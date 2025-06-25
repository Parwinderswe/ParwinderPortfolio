import { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import ProjectCard from './components/MyPortfolio/ProjectCard'
import GetInTouch from './components/GetInTouch/GetInTouch';
import HeroSection from './components/HeroSection/HeroSection';
import CopyRights from './components/CopyRights';

function App() {
    useEffect(() => {
 
  window.scrollTo(0, 0);

  if (window.location.hash) {
    window.history.replaceState(null, document.title, window.location.pathname);
  }
}, []);

  return (
    <div className=" App">
     <Header/>
     <HeroSection/>
      {/* Section anchors */}
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="portfolio"><ProjectCard /></div>
      <div id="contact"><GetInTouch /></div>
     <Footer/>
     <CopyRights/>
    </div>
  );
}

export default App;
