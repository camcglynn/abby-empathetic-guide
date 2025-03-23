
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  link?: string;
  index: number;
}

const ResourceCard = ({ title, description, link, index }: ResourceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft hover:shadow-md transition-all duration-300"
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-abby-600 hover:text-abby-700 text-sm font-medium"
        >
          Learn More <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      )}
    </motion.div>
  );
};

export default ResourceCard;
