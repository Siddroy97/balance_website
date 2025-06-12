import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-[#2E003E] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              
              
            </div>
            
          </div>

          {/* Products */}
          <div>
            
            
          </div>

          {/* Use Cases */}
          

          {/* Contact */}
          
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-gray-300 font-roboto text-sm">
              <div>© 2024 Balance Health. All rights reserved.</div>
              
              
            </div>
            
            <div className="flex items-center space-x-4">
              
              
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;