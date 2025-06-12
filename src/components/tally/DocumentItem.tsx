
import React from 'react';
import { CheckCircle, Circle, HelpCircle, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Document {
  id: string;
  name: string;
  tooltip: string;
  pages: number;
}

interface DocumentItemProps {
  document: Document;
  isChecked: boolean;
  onCheck: (id: string) => void;
  showTooltip: string | null;
  onShowTooltip: (id: string | null) => void;
}

const DocumentItem = ({ document, isChecked, onCheck, showTooltip, onShowTooltip }: DocumentItemProps) => {
  return (
    <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
      <button
        onClick={() => onCheck(document.id)}
        className="flex-shrink-0"
      >
        {isChecked ? (
          <CheckCircle className="text-green-500" size={20} />
        ) : (
          <Circle className="text-gray-400" size={20} />
        )}
      </button>
      
      <div className="flex-1">
        <div className="font-medium text-gray-900">{document.name}</div>
        <div className="text-sm text-gray-500">{document.pages} page{document.pages > 1 ? 's' : ''}</div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative">
          <button
            onMouseEnter={() => onShowTooltip(document.id)}
            onMouseLeave={() => onShowTooltip(null)}
            className="text-[#D6C2E5] hover:text-[#2E003E] transition-colors"
          >
            <HelpCircle size={16} />
          </button>
          {showTooltip === document.id && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-gray-900 text-white text-xs rounded-lg p-2 z-10">
              {document.tooltip}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          )}
        </div>
        <Button size="sm" variant="outline" className="text-xs">
          <Upload size={12} className="mr-1" />
          Auto-Upload
        </Button>
      </div>
    </div>
  );
};

export default DocumentItem;
