
import React from 'react';
import DocumentItem from './DocumentItem';

interface Document {
  id: string;
  name: string;
  tooltip: string;
  pages: number;
}

interface DocumentChecklistProps {
  documents: Document[];
  checkedItems: { [key: string]: boolean };
  onCheck: (id: string) => void;
  showTooltip: string | null;
  onShowTooltip: (id: string | null) => void;
}

const DocumentChecklist = ({ 
  documents, 
  checkedItems, 
  onCheck, 
  showTooltip, 
  onShowTooltip 
}: DocumentChecklistProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-[#2E003E] mb-4">Required Documents</h2>
      <div className="space-y-3">
        {documents.map((doc) => (
          <DocumentItem
            key={doc.id}
            document={doc}
            isChecked={checkedItems[doc.id]}
            onCheck={onCheck}
            showTooltip={showTooltip}
            onShowTooltip={onShowTooltip}
          />
        ))}
      </div>
    </div>
  );
};

export default DocumentChecklist;
