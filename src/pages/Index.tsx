import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Results from "@/components/Results";
import About from "@/components/About";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scanline">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Results />
        <About />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
