import Header from "@/components/Header";
  import ContactForm from "@/components/ContactForm";
  import CTA from "@/components/CTA";
  import Footer from "@/components/Footer";

  const AIVoiceAgents = () => {
    return (
      <div className="min-h-screen bg-background scanline">
        <Header />
        <main>
          {/* Hero Section */}
          <div className="bg-gradient-to-b from-black
  via-[hsl(0,0%,4%)] to-[hsl(0,0%,8%)]">
            <section className="container mx-auto px-4 py-20
  text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white
   mb-6">
                AI Voice Agent Development
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Build intelligent AI voice agents that handle phone
  calls, customer support,
                and sales conversations. Powered by Vapi AI and
  cutting-edge voice technology.
              </p>
            </section>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-b from-[hsl(0,0%,8%)]
  via-[hsl(0,0%,12%)] to-[hsl(0,0%,16%)]">
            <section className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-white mb-12
  text-center">
                Vapi AI Voice Agent Solutions
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg bg-black/30 border
  border-gray-800">
                  <h3 className="text-xl font-semibold text-white
  mb-3">AI Phone Agent</h3>
                  <p className="text-gray-400">
                    Deploy AI agents that make and receive phone calls
   with natural,
                    human-like conversation. Perfect for sales,
  support, and scheduling.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-black/30 border
  border-gray-800">
                  <h3 className="text-xl font-semibold text-white
  mb-3">AI Conversational Voice Agent</h3>
                  <p className="text-gray-400">
                    Advanced voice AI that understands context,
  handles interruptions,
                    and delivers personalized responses in real-time.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-black/30 border
  border-gray-800">
                  <h3 className="text-xl font-semibold text-white
  mb-3">Voice AI Automation</h3>
                  <p className="text-gray-400">
                    Automate entire call workflows from greeting to
  follow-up.
                    Integrate with your CRM and business tools
  seamlessly.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Features Section */}
          <div className="bg-gradient-to-b from-[hsl(0,0%,16%)]
  via-[hsl(0,0%,18%)] to-[hsl(0,0%,20%)]">
            <section className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-white mb-12
  text-center">
                AI Voice Bot for Businesses
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl
  mx-auto">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">AI Outbound Calling Agent</h3>
                    <p className="text-gray-400">Automate sales calls
  and lead follow-ups at scale</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">AI Call Routing System</h3>
                    <p className="text-gray-400">Intelligently route
  calls to the right department or agent</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">AI IVR System</h3>
                    <p className="text-gray-400">Replace outdated
  phone trees with intelligent voice AI</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">AI-Powered Phone Assistant</h3>
                    <p className="text-gray-400">24/7 voice assistant
  for customer inquiries and support</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">AI Lead Qualification</h3>
                    <p className="text-gray-400">Qualify leads through
   natural voice conversations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">AI Appointment Booking</h3>
                    <p className="text-gray-400">Schedule meetings
  directly through phone conversations</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA & Contact */}
          <div className="bg-gradient-to-b from-[hsl(0,0%,20%)]
  via-[hsl(0,0%,22%)] to-[hsl(0,0%,25%)]">
            <CTA />
            <ContactForm />
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default AIVoiceAgents;
