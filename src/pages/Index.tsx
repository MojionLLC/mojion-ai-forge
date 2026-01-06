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
        {/* Hero section - pure black */}
        <div className="bg-gradient-to-b from-black via-[hsl(0,0%,4%)] to-[hsl(0,0%,8%)]">
          <Hero />
        </div>
        
        {/* Audience & Stats */}
        <div className="bg-gradient-to-b from-[hsl(0,0%,8%)] via-[hsl(0,0%,10%)] to-[hsl(0,0%,12%)]">
          <Audience />
          <Stats />
        </div>
        
        {/* Services & Comparison */}
        <div className="bg-gradient-to-b from-[hsl(0,0%,12%)] via-[hsl(0,0%,14%)] to-[hsl(0,0%,16%)]">
          <Services />
          <Comparison />
        </div>
        
        {/* Results & Process */}
        <div className="bg-gradient-to-b from-[hsl(0,0%,16%)] via-[hsl(0,0%,18%)] to-[hsl(0,0%,20%)]">
          <Results />
          <Process />
        </div>
        
        {/* ResponsibleAI & CTA - ending in dark grey */}
        <div className="bg-gradient-to-b from-[hsl(0,0%,20%)] via-[hsl(0,0%,22%)] to-[hsl(0,0%,25%)]">
          <ResponsibleAI />
          <CTA />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
