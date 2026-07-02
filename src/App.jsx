import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedArticles from "./components/FeaturedArticles";
import Timeline from "./components/Timeline";
import Quote from "./components/Quote";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contribute from "./components/Contribute";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContributePage from "./pages/Contribute";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedArticles />
      <Timeline />
      <Quote />
      <Events />
      <Gallery />
      <Contribute />
      <Contact />
      <Footer />
    </>
  );
}

export default App;