
import { Fragment } from 'react';

const Privacy = () => {
  const sections = [
    {
      title: "Data Privacy",
      content: "This data privacy policy describes how Abby collects, uses, and protects information that you may provide while interacting with the service. We are committed to ensuring that your privacy is protected and that all data handling complies with applicable privacy regulations."
    },
    {
      title: "Information Collection",
      content: [
        "The chatbot processes the text of your questions and statements to provide relevant and up-to-date reproductive healthcare information.",
        "When you voluntarily provide your state location, this information is used solely to provide accurate state-specific policy information.",
        "The system detects the language of your input to ensure the service can properly respond (this system is currently limited to English).",
        "The system may analyze your emotional state by detecting keywords in your messages. This allows Abby to provide appropriate support or detect crisis situations."
      ]
    },
    {
      title: "Information NOT Collected",
      content: [
        "The chatbot is designed to actively discourage and filter out personally identifiable information (PII), including:",
        "Full names",
        "Complete addresses",
        "Phone numbers",
        "Email addresses",
        "Medical record numbers",
        "Any other personal identifiers"
      ]
    },
    {
      title: "How Information is Used",
      content: [
        "Your questions are analyzed to categorize them by appropriate topic (Policy, Abortion FAQ, Emotional Support, etc.) to provide relevant responses.",
        "Location data (state) is used to query the Abortion Policy API to retrieve specific state regulations and policies.",
        "Questions may be processed for semantic similarity against a database of reproductive healthcare information to find relevant answers.",
        "Input is analyzed to detect and suggest corrections for potential typographical errors.",
        "Messages are analyzed for signs of crisis to provide appropriate support resources when needed."
      ]
    },
    {
      title: "Technical Data Processing",
      content: [
        "Vector Embeddings: Text queries are converted into numerical vectors (embeddings) for the purpose of finding similar information in our knowledge base.",
        "When location data is provided, the system makes calls to the Abortion Policy API using only the state abbreviation to retrieve relevant policy information.",
        "The system utilizes GPT-4 to analyze and generate appropriate, empathetic responses.",
        "The system actively scans for patterns that may indicate personally identifiable information and prevents processing of such data."
      ]
    },
    {
      title: "Data Storage and Retention",
      content: [
        "Individual user conversations are not stored after the session ends.",
        "The chatbot does not require user accounts or persistent user identification.",
        "The chatbot does not use cookies or tracking technologies to identify users across sessions.",
        "Information sent to external APIs (such as the Abortion Policy API) includes only state abbreviations, not personal information."
      ]
    },
    {
      title: "Data Security",
      content: [
        "The system actively detects and filters potential PII in real-time before processing.",
        "Users are explicitly advised not to share personal identifying information.",
        "A \"quick exit\" functionality is provided for users who need to rapidly leave the interface for privacy or safety reasons."
      ]
    },
    {
      title: "External APIs and Services",
      content: [
        "When providing state-specific information, the chatbot queries the Abortion Policy API using a secure token-based authentication system.",
        "The system utilizes OpenAI's GPT-4 model for natural language processing capabilities."
      ]
    },
    {
      title: "User Rights",
      content: [
        "Since personal user data is not stored after the session ends, there is no need for data access, correction, or deletion requests.",
        "All location information is provided voluntarily and used only for the duration of the conversation to provide relevant information.",
        "Users can interact with the chatbot without providing any identifying information."
      ]
    },
    {
      title: "Children's Privacy",
      content: "The chatbot is designed for users seeking reproductive healthcare information. We do not collect or process data from children under 18."
    }
  ];

  return (
    <div className="pt-12 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-left">
          <span className="px-4 py-2 rounded-full bg-abby-100 text-abby-700 text-sm font-medium inline-block mb-4">
            Privacy Policy
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-6 text-left">
            Your Privacy Is Our Priority
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-left">
            Learn how we protect your data and ensure your conversations remain private and secure.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-soft mb-16">
          {sections.map((section, sIndex) => (
            <div key={sIndex} className={`mb-8 ${sIndex !== 0 ? 'pt-6 border-t border-slate-100' : ''}`}>
              <h2 className="text-xl font-bold text-slate-900 mb-4 text-left">{section.title}</h2>
              {typeof section.content === 'string' ? (
                <p className="text-slate-600 text-left">{section.content}</p>
              ) : (
                <ul className="text-slate-600 space-y-2 list-disc pl-5 text-left">
                  {section.content.map((item, iIndex) => (
                    <li key={iIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="text-center bg-abby-50 rounded-2xl p-8 border border-abby-100">
          <h2 className="text-xl font-bold text-slate-900 mb-4 text-left">
            Have questions about our privacy policy?
          </h2>
          <p className="text-slate-600 mb-6 text-left">
            If you have any questions or concerns about how we handle your data, please contact us.
          </p>
          <div className="inline-block px-5 py-3 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-600 text-left">
            contact@abbychatbot.org
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
