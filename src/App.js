import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
/*import About from "./components/AboutOld";*/
import About from "./components/About";
/*import Services from "./components/ServicesOld";*/
import Services from "./components/Services";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProcessSection from "./components/ProcessSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <ProcessSection/>
      <Services/>
      <Projects/>
      <Blogs/>
      <Contact/>
      <Footer/>
      <ScrollToTop/>
      
    </>
  );
}

export default App;
