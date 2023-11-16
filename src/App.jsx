import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/portfolio";

const App = () => {
  return (
    <div className=' scroll-smooth '>
      <section
        className='h-screen snap-start'
        id='home'
      >
        <Navbar />
        <Hero />
      </section>
      <section
        className='h-screen snap-start'
        id='about'
      >
        <Parallax type='about' />
      </section>
      <About />
      <section
        className='h-screen snap-start'
        id='portfolio'
      >
        <Parallax type='portfolio' />
      </section>

      <section className='snap-start'>
        <Portfolio />
      </section>
      <section
        className='h-screen snap-start'
        id='contact'
      >
        <Contact />
      </section>
    </div>
  );
};

export default App;
