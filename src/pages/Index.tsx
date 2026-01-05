import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Results from "@/components/Results";
import Process from "@/components/Process";
import ResponsibleAI from "@/components/ResponsibleAI";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scanline">
      <Header />
      <main>
        <Hero />
        <Audience />
        <Stats />
        <Services />
        <Comparison />
        <Results />
        <Process />
        <ResponsibleAI />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
