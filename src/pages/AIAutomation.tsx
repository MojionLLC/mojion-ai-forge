import Header from "@/components/Header";
  import ContactForm from "@/components/ContactForm";
  import CTA from "@/components/CTA";
  import Footer from "@/components/Footer";

  const AIAutomation = () => {
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
                AI Automation Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Streamline your business with custom AI automation
  solutions. We build
                intelligent workflows that eliminate repetitive tasks
  and let your team
                focus on what matters.
              </p>
            </section>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-b from-[hsl(0,0%,8%)]
  via-[hsl(0,0%,12%)] to-[hsl(0,0%,16%)]">
            <section className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-white mb-12
  text-center">
                Business Process Automation with AI
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg bg-black/30 border
  border-gray-800">
                  <h3 className="text-xl font-semibold text-white
  mb-3">AI Workflow Automation</h3>
                  <p className="text-gray-400">
                    Connect your apps and automate complex workflows.
  From lead capture
                    to customer onboarding, we build systems that run
  themselves.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-black/30 border
  border-gray-800">
                  <h3 className="text-xl font-semibold text-white
  mb-3">n8n Automation</h3>
                  <p className="text-gray-400">
                    Expert n8n workflow automation and custom
  integrations. We create
                    powerful automations using n8n's flexible
  platform.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-black/30 border
  border-gray-800">
                  <h3 className="text-xl font-semibold text-white
  mb-3">No-Code AI Automation</h3>
                  <p className="text-gray-400">
                    Get powerful automation without the complexity.
  Our solutions are
                    easy to maintain and scale as your business grows.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Services Section */}
          <div className="bg-gradient-to-b from-[hsl(0,0%,16%)]
  via-[hsl(0,0%,18%)] to-[hsl(0,0%,20%)]">
            <section className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-white mb-12
  text-center">
                AI-Powered Automation Solutions
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl
  mx-auto">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">API Automation Services</h3>
                    <p className="text-gray-400">Connect any software
  with custom API integrations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">AI CRM Automation</h3>
                    <p className="text-gray-400">Automate lead
  management and customer follow-ups</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">Webhook Automation</h3>
                    <p className="text-gray-400">Trigger actions
  instantly based on real-time events</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">SaaS Automation Solutions</h3>
                    <p className="text-gray-400">Integrate and
  automate your entire software stack</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">AI Task Automation</h3>
                    <p className="text-gray-400">Eliminate repetitive
  work with intelligent automation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-500
  rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold
  text-white">End-to-End Automation</h3>
                    <p className="text-gray-400">Complete automation
  solutions from start to finish</p>
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

  export default AIAutomation;
