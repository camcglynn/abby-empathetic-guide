
import { useEffect, useState } from 'react';

const DebugInfo = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Show debug info when pressing Ctrl+Shift+D
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setVisible(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  if (!visible) return null;
  
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white p-4 rounded-lg text-xs font-mono max-w-xs overflow-auto max-h-64 shadow-lg">
      <h3 className="font-bold mb-2">Debug Info</h3>
      <p>Window: {window.innerWidth}×{window.innerHeight}</p>
      <p>Scroll: {window.scrollX}×{window.scrollY}</p>
      <p>URL: {window.location.href}</p>
      <p>Path: {window.location.pathname}</p>
      <p>Body classes: {document.body.className}</p>
      <button 
        onClick={() => setVisible(false)}
        className="mt-2 px-2 py-1 bg-red-500 text-white rounded text-xs"
      >
        Close
      </button>
    </div>
  );
};

export default DebugInfo;
