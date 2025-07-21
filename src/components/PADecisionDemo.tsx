import React, { useState } from 'react';
import { Search, CheckCircle, AlertCircle, Clock, User, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PADecisionDemo = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const mockPatients = [
    {
      id: 1,
      name: 'John Smith',
      dob: '03/15/1985',
      patientId: '12345',
      insurance: 'Blue Cross Blue Shield',
      policyNumber: 'BC123456789',
      groupNumber: 'EMP001',
      eligible: true,
      paRequired: false,
      lastChecked: '2:34pm'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      dob: '07/22/1992',
      patientId: '67890',
      insurance: 'Aetna',
      policyNumber: 'AET987654321',
      groupNumber: 'CORP002',
      eligible: true,
      paRequired: true,
      lastChecked: '2:28pm'
    },
    {
      id: 3,
      name: 'Michael Brown',
      dob: '11/05/1978',
      patientId: '54321',
      insurance: 'Cigna',
      policyNumber: 'CIG456789123',
      groupNumber: 'UNION003',
      eligible: false,
      paRequired: false,
      lastChecked: '2:15pm'
    }
  ];

  const handlePatientSearch = (patient) => {
    setIsChecking(true);
    setSelectedPatient(null);
    
    // Simulate 5-second API call
    setTimeout(() => {
      setSelectedPatient(patient);
      setIsChecking(false);
    }, 3000);
  };

  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.patientId.includes(searchQuery)
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-6" style={{ paddingBottom: 'env(safe-area-inset-bottom, 2rem)' }}>
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2E003E] to-[#D6C2E5] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BH</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#2E003E]">Balance Health</h1>
                <p className="text-sm text-gray-600">PA Decision Engine</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock size={16} />
              <span>Real-time eligibility in &lt;5s</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by patient name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D6C2E5] focus:border-transparent"
            />
          </div>

          {/* Patient Suggestions */}
          {searchQuery && (
            <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-40 overflow-y-auto">
              {filteredPatients.map((patient) => (
                <button
                  key={patient.id}
                  onClick={() => handlePatientSearch(patient)}
                  className="w-full text-left p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center space-x-3">
                    <User size={16} className="text-gray-400" />
                    <div>
                      <div className="font-medium">{patient.name}</div>
                      <div className="text-sm text-gray-600">ID: {patient.patientId} | DOB: {patient.dob}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Loading State */}
        {isChecking && (
          <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
            <div className="flex items-center justify-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#D6C2E5]"></div>
              <span className="text-lg text-gray-600">Checking eligibility...</span>
            </div>
            <div className="mt-4 bg-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-600 space-y-2">
                <div>✓ Pinging insurance provider...</div>
                <div>✓ Verifying coverage...</div>
                <div>✓ Checking PA requirements...</div>
              </div>
            </div>
          </div>
        )}

        {/* Patient Result Card */}
        {selectedPatient && !isChecking && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6 flex-1 overflow-auto" style={{ marginBottom: 'env(safe-area-inset-bottom, 2rem)' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <User size={24} className="text-[#2E003E]" />
                <div>
                  <h2 className="text-xl font-bold text-[#2E003E]">Patient: {selectedPatient.name}</h2>
                  <p className="text-gray-600">DOB: {selectedPatient.dob} | ID: {selectedPatient.patientId}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Checked: {selectedPatient.lastChecked}</span>
                </div>
              </div>
            </div>

            {/* Insurance Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield size={16} className="text-[#D6C2E5]" />
                  <span className="font-medium">Insurance Information</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div>Insurance: {selectedPatient.insurance}</div>
                  <div>Policy #: {selectedPatient.policyNumber}</div>
                  <div>Group #: {selectedPatient.groupNumber}</div>
                </div>
              </div>

              {/* Eligibility Status */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  {selectedPatient.eligible ? (
                    <CheckCircle size={16} className="text-green-500" />
                  ) : (
                    <AlertCircle size={16} className="text-red-500" />
                  )}
                  <span className="font-medium">Coverage Status</span>
                </div>
                <div className="space-y-2">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    selectedPatient.eligible 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {selectedPatient.eligible ? 'ELIGIBLE' : 'NOT ELIGIBLE'}
                  </div>
                  <div className={`text-sm ${
                    selectedPatient.paRequired ? 'text-orange-600' : 'text-green-600'
                  }`}>
                    PA Required: {selectedPatient.paRequired ? 'YES' : 'NO'}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Recommendations */}
            <div className="bg-gradient-to-r from-[#2E003E] to-[#D6C2E5] p-4 rounded-lg text-white">
              <div className="flex items-center justify-between">
                <div>
                  {selectedPatient.eligible && !selectedPatient.paRequired && (
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={20} className="text-green-300" />
                      <span className="font-medium">✓ Proceed with treatment</span>
                    </div>
                  )}
                  {selectedPatient.eligible && selectedPatient.paRequired && (
                    <div className="flex items-center space-x-2">
                      <AlertCircle size={20} className="text-orange-300" />
                      <span className="font-medium">⚠ Prior Authorization Required</span>
                    </div>
                  )}
                  {!selectedPatient.eligible && (
                    <div className="flex items-center space-x-2">
                      <AlertCircle size={20} className="text-red-300" />
                      <span className="font-medium">❌ Contact insurance provider</span>
                    </div>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Print Summary
                  </Button>
                </div>
              </div>
            </div>

            {/* Time and Cost Savings */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-lg font-bold text-green-600">&lt;5s</div>
                <div className="text-sm text-gray-600">Decision Time</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-lg font-bold text-blue-600">10 min</div>
                <div className="text-sm text-gray-600">Time Saved</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="text-lg font-bold text-purple-600">$11</div>
                <div className="text-sm text-gray-600">Cost Saved</div>
              </div>
            </div>
          </div>
        )}

        {/* Demo Instructions */}
        <div className="bg-[#D6C2E5]/20 p-4 rounded-lg">
          <h3 className="font-medium text-[#2E003E] mb-2">Demo Instructions</h3>
          <p className="text-sm text-gray-600">
            Type a patient name (John, Sarah, or Michael) in the search box above to see the real-time PA decision engine in action. 
            Each search simulates the 5-second eligibility check process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PADecisionDemo;
