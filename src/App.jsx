import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
//import Dishes from "./components/Dishes";//
import About from "./components/About";
import Mission from "./components/Mission";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ContactSection2 from "./components/ContactSection2";
import Bbqsauce from "./components/Bbqsauce";



const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Menu />
      <About />
      <Mission />
      <Reviews />
      <Bbqsauce/>
      <ContactSection2 />
      <Footer />
      </main>
  );
};

export default App;
