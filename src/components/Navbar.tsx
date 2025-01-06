import React, { useState } from 'react';
import { Instagram, Menu, X, Mail, TwitterIcon } from 'lucide-react';
import logo from '/public/image/speach-logo.png';

const NavLinks = () => (
  <>
    <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Anasayfa</a>
    <a href="#basvuru" className="text-gray-700 hover:text-blue-600 transition">Başvuru</a>
    <a href="#konferans" className="text-gray-700 hover:text-blue-600 transition">Konferans Detayları</a>
    <a href="#hakkimizda" className="text-gray-700 hover:text-blue-600 transition">Hakkımızda</a>
  </>
);

const SocialIcons = () => (
  <>
    <a href="#" className="text-gray-600 hover:text-blue-600 transition">
      <Instagram size={20} />
    </a>
    <a href="#" className="text-gray-600 hover:text-blue-600 transition">
      <Mail size={20} />
    </a>
    <a href="#" className="text-gray-600 hover:text-blue-600 transition">
      <TwitterIcon size={20} />
    </a>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-600"><img src={logo} alt="Logo" height="70px" width="70px" /></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <SocialIcons />
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <div className="flex flex-col space-y-4 px-4 py-2">
              <NavLinks />
            </div>
            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200">
              <SocialIcons />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;