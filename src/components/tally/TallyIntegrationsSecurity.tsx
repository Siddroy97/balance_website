
import React from 'react';
import { FileText, Upload, Shield, Eye } from 'lucide-react';

const TallyIntegrationsSecurity = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-plus-jakarta font-bold text-[#2E003E] mb-6">
            Integrations & Security
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <FileText className="text-[#D6C2E5] mb-4 mx-auto" size={40} />
            <h3 className="font-plus-jakarta font-semibold text-[#2E003E] mb-2">Any EHR</h3>
            <p className="text-gray-600 font-plus-jakarta text-sm">Via widget or portal link</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <Upload className="text-[#D6C2E5] mb-4 mx-auto" size={40} />
            <h3 className="font-plus-jakarta font-semibold text-[#2E003E] mb-2">API Ready</h3>
            <p className="text-gray-600 font-plus-jakarta text-sm">Clearing-house & FHIR API ready</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <Shield className="text-[#D6C2E5] mb-4 mx-auto" size={40} />
            <h3 className="font-plus-jakarta font-semibold text-[#2E003E] mb-2">HIPAA Compliant</h3>
            <p className="text-gray-600 font-plus-jakarta text-sm">Secure data handling</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <Eye className="text-[#D6C2E5] mb-4 mx-auto" size={40} />
            <h3 className="font-plus-jakarta font-semibold text-[#2E003E] mb-2">Security Standards</h3>
            <p className="text-gray-600 font-plus-jakarta text-sm">HITRUST on roadmap</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TallyIntegrationsSecurity;
