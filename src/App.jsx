import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ContactSection2 from "./components/ContactSection2";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Reviews />
      <ContactSection2 />
      <Footer />
    </main>
  );
};

export default App;
