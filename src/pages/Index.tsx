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
        {/* Hero section - base gradient */}
        <div className="bg-gradient-to-b from-background via-background to-[hsl(350,30%,8%)]">
          <Hero />
        </div>
        
        {/* Audience & Stats - slightly warmer */}
        <div className="bg-gradient-to-b from-[hsl(350,30%,8%)] via-[hsl(350,25%,9%)] to-[hsl(350,20%,10%)]">
          <Audience />
          <Stats />
        </div>
        
        {/* Services & Comparison - mid tone */}
        <div className="bg-gradient-to-b from-[hsl(350,20%,10%)] via-[hsl(350,18%,11%)] to-[hsl(350,15%,12%)]">
          <Services />
          <Comparison />
        </div>
        
        {/* Results & Process - deeper */}
        <div className="bg-gradient-to-b from-[hsl(350,15%,12%)] via-[hsl(350,12%,10%)] to-[hsl(350,10%,8%)]">
          <Results />
          <Process />
        </div>
        
        {/* ResponsibleAI & CTA - rich wine undertones */}
        <div className="bg-gradient-to-b from-[hsl(350,10%,8%)] via-[hsl(350,15%,7%)] to-[hsl(350,20%,6%)]">
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
