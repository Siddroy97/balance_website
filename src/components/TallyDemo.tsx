
import React, { useState } from 'react';
import TallyHeader from './tally/TallyHeader';
import DocumentChecklist from './tally/DocumentChecklist';
import PacketPreview from './tally/PacketPreview';

const TallyDemo = () => {
  const [checkedItems, setCheckedItems] = useState({
    'referral-form': false,
    'insurance-card': false,
    'medical-records': false,
    'prior-auth-form': false,
    'clinical-notes': false
  });

  const [showTooltip, setShowTooltip] = useState(null);

  const documents = [
    {
      id: 'referral-form',
      name: 'Physician Referral Form',
      tooltip: 'Required by Aetna for all specialist referrals over $500',
      pages: 2
    },
    {
      id: 'insurance-card',
      name: 'Insurance Card Copy',
      tooltip: 'Front and back copy to verify current coverage',
      pages: 1
    },
    {
      id: 'medical-records',
      name: 'Last 6 Months Medical Records',
      tooltip: 'Demonstrates medical necessity for the procedure',
      pages: 12
    },
    {
      id: 'prior-auth-form',
      name: 'Aetna PA Request Form',
      tooltip: 'Payer-specific form required for this CPT code',
      pages: 3
    },
    {
      id: 'clinical-notes',
      name: 'Clinical Assessment Notes',
      tooltip: 'Supporting documentation for treatment plan',
      pages: 4
    }
  ];

  const handleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checkedDocs = documents.filter(doc => checkedItems[doc.id]);
  const totalPages = checkedDocs.reduce((sum, doc) => sum + doc.pages, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <TallyHeader 
          currentStep={2}
          totalSteps={3}
          patientName="Sarah Johnson"
          cptCode="99214"
          payer="Aetna"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DocumentChecklist
            documents={documents}
            checkedItems={checkedItems}
            onCheck={handleCheck}
            showTooltip={showTooltip}
            onShowTooltip={setShowTooltip}
          />

          <PacketPreview
            checkedDocs={checkedDocs}
            totalPages={totalPages}
            onRemoveDoc={handleCheck}
          />
        </div>

        <div className="mt-6 bg-[#D6C2E5]/20 p-4 rounded-lg">
          <h3 className="font-medium text-[#2E003E] mb-2">Demo Instructions</h3>
          <p className="text-sm text-gray-600">
            Click the checkboxes to add documents to your PA packet. Hover over the "?" icons to see why each document is required. 
            The packet preview updates in real-time as you select documents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TallyDemo;
