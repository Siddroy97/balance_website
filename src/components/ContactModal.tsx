import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    clinicName: '',
    clinicType: '',
    specialty: ''
  });

  useEffect(() => {
    const handleOpenModal = (event: Event) => {
      console.log('ContactModal: openContactModal event received', event);
      setIsOpen(true);
    };
    
    // Use a more specific event type
    window.addEventListener('openContactModal', handleOpenModal as EventListener);
    
    return () => {
      window.removeEventListener('openContactModal', handleOpenModal as EventListener);
    };
  }, []);

  // Handle body scroll lock properly - only when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      
      document.body.style.overflow = 'hidden';
      
      // Cleanup function to restore original styles
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  console.log('ContactModal: isOpen =', isOpen);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-modal-fade-in"
      onClick={handleClose}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        zIndex: 999999
      }}
    >
      <div 
        className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-modal-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{ 
          zIndex: 1000000,
          transform: 'translateZ(0)'
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-plus-jakarta font-bold text-[#2E003E]">Get Started</h2>
          <button 
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form 
          action="https://formspree.io/f/mnnvdoed"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-plus-jakarta font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6C2E5] font-plus-jakarta"
            />
          </div>

          <div>
            <label className="block text-sm font-plus-jakarta font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6C2E5] font-plus-jakarta"
            />
          </div>

          <div>
            <label className="block text-sm font-plus-jakarta font-medium text-gray-700 mb-1">
              Clinic Name
            </label>
            <input
              type="text"
              name="clinicName"
              value={formData.clinicName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6C2E5] font-plus-jakarta"
            />
          </div>

          <div>
            <label className="block text-sm font-plus-jakarta font-medium text-gray-700 mb-1">
              Type of Clinic
            </label>
            <select
              name="clinicType"
              value={formData.clinicType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6C2E5] font-plus-jakarta"
            >
              <option value="">Select clinic type</option>
              <option value="independent">Independent Practice</option>
              <option value="group">Group Practice</option>
              <option value="hospital">Hospital-Based</option>
              <option value="urgent-care">Urgent Care</option>
              <option value="specialty">Specialty Clinic</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-plus-jakarta font-medium text-gray-700 mb-1">
              Specialty
            </label>
            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6C2E5] font-plus-jakarta"
            >
              <option value="">Select specialty</option>
              <option value="family-medicine">Family Medicine</option>
              <option value="internal-medicine">Internal Medicine</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="cardiology">Cardiology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="dermatology">Dermatology</option>
              <option value="psychiatry">Psychiatry</option>
              <option value="other">Other</option>
            </select>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#D6C2E5] to-[#2E003E] hover:from-[#2E003E] hover:to-[#D6C2E5] text-white font-plus-jakarta font-semibold py-3"
          >
            Request Demo
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
