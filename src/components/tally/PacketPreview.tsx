
import React from 'react';
import { FileText, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Document {
  id: string;
  name: string;
  tooltip: string;
  pages: number;
}

interface PacketPreviewProps {
  checkedDocs: Document[];
  totalPages: number;
  onRemoveDoc: (id: string) => void;
}

const PacketPreview = ({ checkedDocs, totalPages, onRemoveDoc }: PacketPreviewProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[#2E003E]">Packet Preview</h2>
        <div className="text-sm text-gray-600">
          {checkedDocs.length} docs • {totalPages} pages
        </div>
      </div>
      
      {checkedDocs.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <FileText size={48} className="mx-auto mb-4 text-gray-300" />
          <p>Select documents to preview packet</p>
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          {checkedDocs.map((doc, index) => (
            <div key={doc.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-12 h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                PDF
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">{index + 1}. {doc.name}</div>
                <div className="text-xs text-gray-500">{doc.pages} page{doc.pages > 1 ? 's' : ''}</div>
              </div>
              <button
                onClick={() => onRemoveDoc(doc.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {checkedDocs.length > 0 && (
        <div className="space-y-3">
          <Button 
            className="w-full bg-gradient-to-r from-[#2E003E] to-[#D6C2E5] text-white hover:from-[#D6C2E5] hover:to-[#2E003E] transition-all duration-200"
            size="lg"
          >
            <Download size={16} className="mr-2" />
            Build Packet ({totalPages} pages)
          </Button>
          <div className="text-center">
            <button className="text-sm text-[#2E003E] hover:underline">
              ← Back to Scout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PacketPreview;
