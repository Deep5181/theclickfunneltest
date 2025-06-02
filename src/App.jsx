import Clients from "./Components/Clients";
import Footer from "./Components/Footer";
import InfiniteScrollStrips from "./Components/InfiniteScrollStrips";
import Navbar from "./Components/Navbar";
import Process from "./Components/ProcessSection";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import GetInTouchForm from "./Components/get-in-touch-form";
import ImpactAndTestimonials from "./Pages/ImpactAndTestimonials";
import IndustriesServed from "./Pages/IndustriesServed";
import Portfolio from "./Components/portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <section id="/">
        <Home />
      </section>
      <Portfolio />
      <Clients />
      <section id="about">
        <About />
      </section>
      <InfiniteScrollStrips />
      <Process />
      <section id="services">
        <Services />
      </section>
      <section id="industries">
        <IndustriesServed />
      </section>
      <ImpactAndTestimonials />
      <GetInTouchForm />
      <Footer />
    </div>
  );
}

export default App;
