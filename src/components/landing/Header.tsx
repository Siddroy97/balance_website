import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Radar, FileText, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll lock for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const productItems = [
    { name: 'Scout', description: 'PA requirement detection', path: '/scout', icon: Radar },
    { name: 'Tally', description: 'Document bundling', path: '/tally', icon: FileText },
    { name: 'Nora', description: 'AI scribe for claims', path: '/nora', comingSoon: true, icon: PenTool }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-[10px]' 
            : 'bg-white/95 backdrop-blur-lg'
        } ${!isScrolled ? 'shadow-md border-b border-gray-200/50' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/b7217f96-2a4c-431c-bfd3-8584b9837cfd.png" 
                alt="Balance Health Logo" 
                className="w-8 h-8 rounded-full"
              />
            </div>

            {/* Centered Brand Name */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link to="/" className={`text-xl font-plus-jakarta font-bold transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-[#2E003E]'
              }`}>
                Balance Health
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 mr-8">
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className={`flex items-center space-x-1 font-plus-jakarta font-medium transition-colors duration-300 py-4 ${
                  isScrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-700 hover:text-[#2E003E]'
                }`}>
                  <span>Products</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsOpen && (
                  <div className="absolute top-full left-0 pt-1 w-64 z-[10001]">
                    <div className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg animate-scale-in">
                      {productItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <div key={item.name} className="flex items-center px-4 py-3 hover:bg-gray-50/80 border-b border-gray-100 last:border-b-0 transition-colors duration-200 group">
                            <div className="w-8 h-8 flex items-center justify-center mr-3">
                              <IconComponent size={18} className="text-[#2E003E]" />
                            </div>
                            {item.comingSoon ? (
                              <div className="flex-1">
                                <div className="font-plus-jakarta font-medium text-[#2E003E]">{item.name}</div>
                                <div className="text-sm text-gray-600 font-plus-jakarta">{item.description}</div>
                                <span className="mt-2 inline-block text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full font-plus-jakarta font-semibold">
                                  Coming Soon
                                </span>
                              </div>
                            ) : (
                              <Link to={item.path} className="flex-1">
                                <div className="font-plus-jakarta font-medium text-[#2E003E]">{item.name}</div>
                                <div className="text-sm text-gray-600 font-plus-jakarta">{item.description}</div>
                                {item.name === 'Tally' && (
                                  <span className="mt-2 inline-block text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full font-plus-jakarta font-semibold">
                                    Coming Soon
                                  </span>
                                )}
                              </Link>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Mission Link */}
              <Link 
                to="/mission" 
                className={`font-plus-jakarta font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-700 hover:text-[#2E003E]'
                }`}
              >
                Mission
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 z-[10000] relative ${
                isScrolled ? 'text-white' : 'text-gray-700'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-lg z-[9999] transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          <div className="space-y-6">
            <div>
              <div className="font-plus-jakarta font-semibold text-lg text-[#2E003E] mb-4">Products</div>
              <div className="space-y-4">
                {productItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.name} className="flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-3">
                        <IconComponent size={18} className="text-[#2E003E]" />
                      </div>
                      {item.comingSoon ? (
                        <div className="py-2 flex-1">
                          <div className="font-plus-jakarta font-medium text-[#2E003E]">{item.name}</div>
                          <div className="text-sm text-gray-600 font-plus-jakarta mb-2">{item.description}</div>
                          <span className="inline-block text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full font-plus-jakarta font-semibold">
                            Coming Soon
                          </span>
                        </div>
                      ) : (
                        <Link 
                          to={item.path} 
                          className="block py-2 transition-colors duration-300 flex-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="font-plus-jakarta font-medium text-[#2E003E]">{item.name}</div>
                          <div className="text-sm text-gray-600 font-plus-jakarta">{item.description}</div>
                          {item.name === 'Tally' && (
                            <span className="mt-2 inline-block text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full font-plus-jakarta font-semibold">
                              Coming Soon
                            </span>
                          )}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <Link 
                to="/mission" 
                className="font-plus-jakarta font-semibold text-lg text-[#2E003E] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
