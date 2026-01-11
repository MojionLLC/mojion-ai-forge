import Header from "@/components/Header";
  import ContactForm from "@/components/ContactForm";
  import CTA from "@/components/CTA";
  import Footer from "@/components/Footer";

  const AIReceptionist = () => {
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
                AI Receptionist Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Never miss a call again. Our AI phone receptionist
  answers calls 24/7,
                books appointments, and handles customer inquiries —
  just like a human receptionist,
                but available around the clock.
              </p>
            </section>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-b from-[hsl(0,0%,8%)]
  via-[hsl(0,0%,12%)] to-[hsl(0,0%,16%)]">
            <section className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-white mb-12
  text-center">
                Why Choose an AI Virtual Receptionist?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg bg-black/30 border
  border-gray-800">
                  <h3 className="text-xl font-semibold text-white
  mb-3">24/7 AI Call Answering</h3>
                  <p className="text-gray-400">
                    Your AI receptionist never sleeps. Handle calls at
   midnight, on weekends,
                    and during holidays without paying overtime.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-black/30 border
  border-gray-800">
                  <h3 className="text-xl font-semibold text-white
  mb-3">Instant Call Handling</h3>
                  <p className="text-gray-400">
                    No hold times. Our AI phone receptionist answers
  immediately and handles
                    multiple calls simultaneously.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-black/30 border
  border-gray-800">
                  <h3 className="text-xl font-semibold text-white
  mb-3">Smart Appointment Booking</h3>
                  <p className="text-gray-400">
                    Automatically schedule appointments, send
  confirmations, and sync with
                    your calendar in real-time.
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
                AI Receptionist Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl
  mx-auto">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">AI Inbound Call Handling</h3>
                    <p className="text-gray-400">Answer every call
  professionally with natural conversation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">AI Customer Support Voice Agent</h3>
                    <p className="text-gray-400">Handle FAQs and
  support requests automatically</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">AI Call Center Automation</h3>
                    <p className="text-gray-400">Route calls, take
  messages, and escalate when needed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">Automated Phone Answering AI</h3>
                    <p className="text-gray-400">Customized greetings
  and responses for your business</p>
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

  export default AIReceptionist;
