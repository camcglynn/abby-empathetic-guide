
import { ArrowRight, ShieldCheck, Heart, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Index = () => {
  // Get the base URL from the import.meta object to handle both development and production
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-abby-50/50 to-white pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-abby-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-abby-100 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex justify-center mb-6">
              <img 
                src={`${baseUrl}lovable-uploads/676c58ad-1642-48e0-8b17-24b9c18d22c4.png`} 
                alt="Abby Logo" 
                className="h-24 w-auto mb-4" 
              />
            </div>
            <span className="px-4 py-2 rounded-full bg-abby-100 text-abby-700 text-sm font-medium inline-block mb-6">
              Private • Supportive • Informative
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Meet <span className="text-abby-600">Abby</span>, your personal guide to reproductive health
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Private, judgment-free information about abortion and reproductive health, with emotional support along your journey.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="rounded-full px-8 text-base shadow-soft bg-abby-600 hover:bg-abby-600/90">
              <Link to="/chat">
                Chat with Abby <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base border-slate-200">
              <Link to="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Abby Can Help You
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Whether you need legal information, healthcare support, or just someone to listen, Abby is here for you 24/7.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <ShieldCheck className="h-10 w-10 text-abby-600" />,
                title: "Data Privacy",
                description: "Your data privacy is our top priority. All conversations are completely confidential.",
              },
              {
                icon: <Heart className="h-10 w-10 text-abby-600" />,
                title: "Compassionate Care",
                description: "Receive caring, judgment-free support when you need it most.",
              },
              {
                icon: <FileText className="h-10 w-10 text-abby-600" />,
                title: "Reliable Information",
                description: "Access accurate, up-to-date information about reproductive healthcare and legal policies in your state.",
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-abby-50 rounded-xl inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Steps Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Simple Steps to Get Support
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connected line for desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-abby-200"></div>
            
            {[
              {
                number: "01",
                title: "Start a conversation",
                description: "Begin chatting with Abby about your questions or concerns.",
              },
              {
                number: "02",
                title: "Share what you need",
                description: "Tell Abby what information or support you're looking for.",
              },
              {
                number: "03",
                title: "Get personalized help",
                description: "Receive tailored information and compassionate guidance.",
              },
            ].map((step, index) => (
              <div 
                key={index}
                className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-soft z-10"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-abby-600 text-white flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="h-0.5 flex-grow bg-abby-200 ml-4 md:hidden"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full px-8 text-base shadow-soft bg-abby-600 hover:bg-abby-600/90">
              <Link to="/chat">
                Start Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
