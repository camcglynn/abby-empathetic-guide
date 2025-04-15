import TeamMember from '@/components/TeamMember';

const About = () => {
  const teamMembers = [
    {
      name: 'Sahana Sankar',
      role: 'Product Specialist',
      bio: 'Sahana has robust professional experience in product management, research, and design from successful tech companies like TikTok and Robinhood. Her leadership skills and education in ML/GenAI methods prepared her to lead the RAG model vision and technical implementation approach for Abby.',
    },
    {
      name: 'Nicole McNabb',
      role: 'Senior Data Scientist',
      bio: 'Nicole is a professional Data Scientist with prior experience developing and deploying chatbot tools for client use. As programming lead on the project, Nicole refined Abby\'s model to ensure a high-degree of data privacy and informational accuracy for users.',
    },
    {
      name: 'Chloe McGlynn',
      role: 'Public Health Research Analyst',
      bio: 'Chloe is a Research Analyst with experience supporting federal adolescent pregnancy prevention initiatives and conducting statistical analyses of public health program outcomes for US citizens. Her background in health policy research, technical writing, and Machine Learning allowed her to support each step of Abby\'s design and implementation.',
    }
  ];

  return (
    <div className="pt-12 pb-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-16">
          <span className="px-4 py-2 rounded-full bg-abby-100 text-abby-700 text-sm font-medium inline-block mb-4">
            About Us
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Meet the Team Behind Abby
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We are a small team of graduate students completing our Master's degrees in Information and Data Science at the University of California, Berkeley.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-6">
            Abby's goal is to streamline abortion care information for any US-based person in one secure and conversational platform. With little information from users, Abby speaks with emotionally supportive and accessible language to provide up-to-date legal policies, scientifically-accurate healthcare information, and provider recommendations.
          </p>
          <div className="bg-abby-50 rounded-2xl p-8 border border-abby-100 text-abby-900 text-center">
            <h3 className="font-semibold mb-2 text-lg">Our Commitment</h3>
            <p>
              Abby was created as the result of our acquired skills over the course of the program and shared interest in supporting people's well-being, autonomy over their bodies, and reproductive choices.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-6">Who We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
