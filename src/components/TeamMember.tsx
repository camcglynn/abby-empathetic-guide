
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  index: number;
}

const TeamMember = ({ name, role, bio, index }: TeamMemberProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="bg-white rounded-2xl p-8 border border-slate-100 shadow-soft text-left"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-abby-100 flex items-center justify-center text-abby-700 text-lg font-medium">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
          <p className="text-sm text-abby-600">{role}</p>
        </div>
      </div>
      <p className="text-slate-600">{bio}</p>
    </motion.div>
  );
};

export default TeamMember;
