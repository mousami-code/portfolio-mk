import { useState } from 'react';

import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/chatbot';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col'>
     

      <Header />

      <section id="about">
        <AboutMe />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      <Chatbot />
    </div>
  );
}

export default App;
