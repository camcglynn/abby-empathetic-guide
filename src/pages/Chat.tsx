
import { motion } from 'framer-motion';
import ChatInterface from '@/components/ChatInterface';

const Chat = () => {
  return (
    <div className="pt-12 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-abby-100 text-abby-700 text-sm font-medium inline-block mb-4">
              Private & Secure
            </span>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Chat with Abby
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ask Abby any questions about abortion care, reproductive health, or emotional support. 
              Your conversation is private and confidential.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ChatInterface />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-100"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Your privacy matters</h3>
          <p className="text-slate-600 text-sm">
            Abby is designed with your privacy in mind. We don't store personally identifiable information, 
            and all conversations are confidential. For more information, please see our{' '}
            <a href="/privacy" className="text-abby-600 hover:text-abby-700 underline">
              privacy policy
            </a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Chat;
