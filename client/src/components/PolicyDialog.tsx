import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PolicyDialogProps {
  type: 'terms' | 'privacy' | 'refund';
  onClose: () => void;
  isOpen: boolean;
}

export default function PolicyDialog({ type, onClose, isOpen }: PolicyDialogProps) {
  const [policyContent, setPolicyContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      
      // Fetch policy content based on type
      fetch(`/src/assets/policies/terms.txt`)
        .then(response => response.text())
        .then(text => {
          // Convert the markdown-like content to HTML
          const formattedContent = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Bold text
            .replace(/\*(.*?)\*/g, '<em>$1</em>')  // Italic text
            .replace(/\n\n/g, '</p><p>')  // Paragraphs
            .replace(/\n\*\s+(.*)/g, '<li>$1</li>')  // List items
          
          setPolicyContent(formattedContent);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error loading policy content:', error);
          setPolicyContent('<p>Error loading content. Please try again later.</p>');
          setIsLoading(false);
        });
    }
  }, [isOpen, type]);

  // Generate policy title based on type
  const getPolicyTitle = () => {
    switch (type) {
      case 'terms':
        return 'Terms of Service';
      case 'privacy':
        return 'Privacy Policy';
      case 'refund':
        return 'Refund Policy';
      default:
        return 'Legal Information';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-lg shadow-blue-900/20 border border-slate-800">
        <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900">
          <h2 className="text-xl font-bold gradient-text">{getPolicyTitle()}</h2>
          <button 
            onClick={onClose}
            className="rounded-full w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X size={18} className="text-slate-300" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
            </div>
          ) : (
            <div 
              className="prose prose-invert prose-headings:text-blue-400 prose-strong:text-blue-300 max-w-none"
              dangerouslySetInnerHTML={{ __html: `<p>${policyContent}</p>` }}
            />
          )}
        </div>

        <div className="p-4 border-t border-slate-800 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-white font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}