
import { ArrowRight, ShieldCheck, Heart, FileText, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ChatAnimation = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const demoMessages = [
    "How much does abortion cost?",
    "It varies by location and type. I can help you find specific information for your area.",
    "What are my options?",
    "You have several options including medication abortion and in-clinic procedures. Let me explain each one...",
    "Is it safe?",
    "Yes, when performed by qualified providers, abortion is very safe. I can share more details if you'd like."
  ];

  useEffect(() => {
    const addMessage = (index: number) => {
      if (index < demoMessages.length) {
        setMessages(prev => [...prev, demoMessages[index]]);
        setTimeout(() => addMessage(index + 1), 1500);
      } else {
        setTimeout(() => {
          setMessages([]);
          setTimeout(() => addMessage(0), 1000);
        }, 3000);
      }
    };

    setTimeout(() => addMessage(0), 1000);

    return () => {
      const highestId = window.setTimeout(() => {}, 0);
      for (let i = 0; i < highestId; i++) {
        clearTimeout(i);
      }
    };
  }, []);

  return (
    <a 
      href="http://abby-alb-1572042320.us-east-2.elb.amazonaws.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full max-w-[350px]"
    >
      <div className="bg-white rounded-xl shadow-soft border border-slate-100 w-full h-[400px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
        <div className="bg-abby-600 text-white p-3 flex items-center">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
            <MessageSquare className="h-4 w-4" />
          </div>
          <div>Chat with Abby</div>
        </div>
        <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-2">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`max-w-[80%] p-3 rounded-2xl ${
                index % 2 === 0
                  ? 'bg-slate-100 self-end rounded-tr-none'
                  : 'bg-abby-100 text-abby-800 self-start rounded-tl-none'
              }`}
            >
              {message}
            </motion.div>
          ))}
        </div>
      </div>
    </a>
  );
};

const Index = () => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  const getAssetPath = (path: string) => {
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${baseUrl}${cleanPath}`;
  };
  
  console.log('Index - Base URL:', baseUrl);
  
  return (
    <div className="flex flex-col w-full">
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-abby-50/50 to-white pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-abby-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-abby-100 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 md:mb-0 md:flex-1"
            >
              <span className="px-4 py-2 rounded-full bg-abby-100 text-abby-700 text-sm font-medium inline-block mb-6">
                Private • Supportive • Informative
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Meet <span className="text-abby-600 flex items-center justify-center md:justify-start gap-3 inline-flex">
                  <img 
                    src={getAssetPath('lovable-uploads/b0b7e8e4-a927-4d73-96e5-e52e6f6fa413.png')} 
                    alt="Abby Logo" 
                    className="h-12 w-12 inline"
                  />
                  Abby
                </span>, your personal guide to reproductive health
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto md:mx-0 mb-8">
                Private, judgment-free information about abortion and reproductive health, with emotional support along your journey.
              </p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Button asChild size="lg" className="rounded-full px-8 text-base shadow-soft bg-abby-600 hover:bg-abby-600/90">
                  <a href="http://abby-alb-1572042320.us-east-2.elb.amazonaws.com/" target="_blank" rel="noopener noreferrer">
                    Chat with Abby <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base border-slate-200">
                  <a href="/about">Learn More</a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="md:flex-1 flex justify-center md:justify-end"
            >
              <ChatAnimation />
            </motion.div>
          </div>
        </div>
      </section>

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

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Simple Steps to Get Support
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 relative">
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
              <a href="http://abby-alb-1572042320.us-east-2.elb.amazonaws.com/" target="_blank" rel="noopener noreferrer">
                Start Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
