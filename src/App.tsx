import './assets/css/style.css';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Technologies from './components/sections/Technologies';
import Experience from './components/sections/Testimonials';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF8F5]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
