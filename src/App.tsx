import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
// import { Brands } from "./components/sections/Brands"; // Deactivated temporarily
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Testimonials } from "./components/sections/Testimonials";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <Layout title="CJM Ventilation">
      <Hero />
  {/** <Brands /> Deactivated: Trusted by Industry Leaders section hidden */}
      <Services />
      <AboutUs />
  <Pricing />
  <Testimonials />
  <CTA />
    </Layout>
  );
}

export default App;
