import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container d-flex justify-content-between">
          <h1 className="mb-0">Nisha Kashyap</h1>
          <nav>
            <a href="#about" className="text-white mx-2">About</a>
            <a href="#skills" className="text-white mx-2">Skills</a>
            <a href="#projects" className="text-white mx-2">Projects</a>
            <a href="#contact" className="text-white mx-2">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container my-5">
        <section id="about">
          <About />
        </section>

        <section id="skills" className="my-5">
          <Skills />
        </section>

        <section id="projects" className="my-5">
          <Projects />
        </section>

        <section id="contact" className="my-5">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-3">
        <p></p>
      </footer>
    </div>
  );
};

export default App;
