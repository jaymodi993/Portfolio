import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience'; // <-- Import this
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <hr />
        <About />
        <hr />
        <Education />
        <hr />
        <Experience /> {/* <-- Add this line */}
        <hr />
        <Skills />
        <hr />
        <Services />
        <hr />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;