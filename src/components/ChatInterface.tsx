
import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'abby';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Hi, I'm Abby! I provide private, judgment-free information about abortion and reproductive health while offering emotional support along your journey. How can I help you today?",
    sender: 'abby',
    timestamp: new Date(),
  },
];

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    
    // Simulate Abby typing
    setIsTyping(true);
    
    // Simulate response (in a real app this would be an API call)
    setTimeout(() => {
      const abbyMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thank you for reaching out. I'm here to support you with information and resources. What specific questions do you have about reproductive health or abortion care?",
        sender: 'abby',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, abbyMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-h-[80vh] bg-white rounded-xl border border-slate-100 shadow-soft overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center">
        <div className="w-8 h-8 rounded-full bg-abby-100 flex items-center justify-center text-abby-600 mr-3">
          A
        </div>
        <div>
          <h3 className="font-medium text-slate-900">Abby</h3>
          <p className="text-xs text-slate-500">Your reproductive health guide</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-slate-50/50">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-abby-500 text-white rounded-tr-none'
                    : 'bg-white border border-slate-100 shadow-sm rounded-tl-none'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-abby-100' : 'text-slate-400'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 flex justify-start"
            >
              <div className="bg-white border border-slate-100 shadow-sm p-3 rounded-2xl rounded-tl-none">
                <div className="flex space-x-1 items-center">
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-slate-100 bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-end gap-2"
        >
          <Textarea
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="min-h-[60px] resize-none rounded-xl border-slate-200 focus-visible:ring-abby-500"
          />
          <Button
            type="submit"
            size="icon"
            className="rounded-full h-10 w-10 bg-abby-500 hover:bg-abby-600 shrink-0"
            disabled={!input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
        <p className="text-xs text-slate-400 mt-2 text-center">
          Your conversations are private and confidential.
        </p>
      </div>
    </div>
  );
}
