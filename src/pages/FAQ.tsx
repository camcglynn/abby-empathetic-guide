
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ResourceCard from '@/components/ResourceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');

  const categories = [
    { id: 'general', label: 'General Questions' },
    { id: 'legal', label: 'Legal Information' },
    { id: 'healthcare', label: 'Healthcare Resources' },
    { id: 'emotional', label: 'Emotional Support' },
  ];

  const faqs = {
    general: [
      {
        question: "What is Abby?",
        answer: "Abby is a conversational assistant designed to provide private, judgment-free information about abortion and reproductive health while offering emotional support. Abby can answer questions about legal policies, healthcare options, and connect you with resources.",
      },
      {
        question: "Is my conversation with Abby private?",
        answer: "Yes, all conversations with Abby are private and confidential. We do not store personally identifiable information, and your data privacy is our top priority. For more details, please see our privacy policy.",
      },
      {
        question: "How does Abby work?",
        answer: "Abby uses advanced conversational AI to understand your questions and provide helpful, accurate information. Abby is trained on reliable reproductive healthcare information and can direct you to appropriate resources based on your needs.",
      },
    ],
    legal: [
      {
        question: "How can I find out if abortion is legal in my state?",
        answer: "Abby can quickly provide you with specific and up-to-date legal policies for your state. You can also visit AbortionFinder.org for policy guides for all US states and territories.",
      },
      {
        question: "What are my rights regarding reproductive healthcare?",
        answer: "Reproductive rights vary by state. Abby can provide information specific to your location, including waiting periods, gestational limits, and required counseling. For legal advice, please consult with a lawyer specializing in reproductive rights.",
      },
      {
        question: "How do I find legal help related to abortion access?",
        answer: "Organizations like the ACLU, If/When/How, and the National Advocates for Pregnant Women offer legal resources. Abby can help connect you with these resources based on your needs.",
      },
    ],
    healthcare: [
      {
        question: "How do I pay for an abortion?",
        answer: "There are financial assistance options available, including abortion funds and sliding scale payment options at some clinics. Organizations like the National Abortion Federation and the National Network of Abortion Funds can help with funding.",
      },
      {
        question: "What can I expect from a medication abortion or in-clinic procedure?",
        answer: "Medication abortion typically involves taking two different medications to end a pregnancy up to 10-11 weeks. In-clinic procedures vary depending on the gestational age. Abby can provide more detailed information about each option.",
      },
      {
        question: "What does recovery from an abortion look like?",
        answer: "Recovery varies by person and procedure type. After a medication abortion, you may experience cramping and bleeding similar to a heavy period for several days. After an in-clinic procedure, recovery may include light bleeding, cramping, and fatigue. Your provider will give you specific aftercare instructions.",
      },
    ],
    emotional: [
      {
        question: "I need help with feelings of anxiety, sadness, or fear around getting an abortion.",
        answer: "Having a range of emotions is completely normal. Resources like All-Options, Exhale Pro-Voice, and Faith Aloud offer nonjudgmental emotional support. Abby can also provide supportive conversation and validation for what you're feeling.",
      },
      {
        question: "How do I talk to my partner, friends, or family about my decision?",
        answer: "This is a personal choice, and you should only share with people you trust to be supportive. Resources like Backline and All-Options can help you navigate these conversations. Abby can also provide guidance on how to approach these discussions.",
      },
      {
        question: "Will getting an abortion affect my mental health?",
        answer: "Research consistently shows that having an abortion does not increase the risk of mental health problems. However, stigma, lack of support, and prior mental health conditions can affect how you feel afterward. Resources are available to support your emotional wellbeing.",
      },
    ],
  };

  const resources = [
    {
      title: "Is abortion legal in my state?",
      description: "AbortionFinder.org shares policy guides for all US states and territories.",
      link: "https://www.abortionfinder.org",
    },
    {
      title: "How do I pay for an abortion?",
      description: "The National Network of Abortion Funds can help connect you with financial resources.",
      link: "https://abortionfunds.org",
    },
    {
      title: "What can I expect from an abortion?",
      description: "Planned Parenthood provides detailed information about abortion procedures and what to expect.",
      link: "https://www.plannedparenthood.org",
    },
    {
      title: "Emotional support resources",
      description: "All-Options provides judgment-free support for people making reproductive decisions.",
      link: "https://www.all-options.org",
    },
  ];

  return (
    <div className="pt-12 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <span className="px-4 py-2 rounded-full bg-abby-100 text-abby-700 text-sm font-medium inline-block mb-4">
            Resources & Information
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Find answers to common questions about abortion care, reproductive health, and support resources.
          </p>
        </div>

        <div className="mb-12 flex items-center justify-center flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full text-sm ${
                activeCategory === category.id ? "bg-abby-500" : "border-slate-200"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-soft mb-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-slate-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Other Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard
                key={index}
                title={resource.title}
                description={resource.description}
                link={resource.link}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="text-center bg-abby-50 rounded-2xl p-8 border border-abby-100">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Any other questions? Abby can help.
          </h2>
          <Button asChild size="lg" className="rounded-full px-8 shadow-soft">
            <Link to="/chat">Chat with Abby</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
