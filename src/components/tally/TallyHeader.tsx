
import React from 'react';

interface TallyHeaderProps {
  currentStep: number;
  totalSteps: number;
  patientName: string;
  cptCode: string;
  payer: string;
}

const TallyHeader = ({ currentStep, totalSteps, patientName, cptCode, payer }: TallyHeaderProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#2E003E] to-[#D6C2E5] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">BH</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#2E003E]">Tally: Doc Checklist & Packet</h1>
            <p className="text-sm text-gray-600">Patient: {patientName} | CPT: {cptCode} | Payer: {payer}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600 mb-2">Step {currentStep} of {totalSteps}</div>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div className="bg-[#D6C2E5] h-2 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TallyHeader;
