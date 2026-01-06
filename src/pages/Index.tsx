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
        {/* Hero section - deep dark base */}
        <div className="bg-gradient-to-b from-[hsl(350,25%,4%)] via-background to-[hsl(350,35%,10%)]">
          <Hero />
        </div>
        
        {/* Audience & Stats - warmer wine tones */}
        <div className="bg-gradient-to-b from-[hsl(350,35%,10%)] via-[hsl(350,40%,12%)] to-[hsl(350,30%,8%)]">
          <Audience />
          <Stats />
        </div>
        
        {/* Services & Comparison - deeper contrast */}
        <div className="bg-gradient-to-b from-[hsl(350,30%,8%)] via-[hsl(340,35%,6%)] to-[hsl(350,40%,11%)]">
          <Services />
          <Comparison />
        </div>
        
        {/* Results & Process - rich undertones */}
        <div className="bg-gradient-to-b from-[hsl(350,40%,11%)] via-[hsl(345,35%,9%)] to-[hsl(350,30%,7%)]">
          <Results />
          <Process />
        </div>
        
        {/* ResponsibleAI & CTA - dramatic finish */}
        <div className="bg-gradient-to-b from-[hsl(350,30%,7%)] via-[hsl(350,45%,10%)] to-[hsl(350,50%,8%)]">
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
