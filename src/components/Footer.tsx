import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">SPEACH</h3>
            <p className="text-gray-400">
              Geleceğin liderlerini bugünden yetiştiriyoruz.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Anasayfa</a></li>
              <li><a href="#basvuru" className="text-gray-400 hover:text-white transition">Başvuru</a></li>
              <li><a href="#konferans" className="text-gray-400 hover:text-white transition">Konferans Detayları</a></li>
              <li><a href="#hakkimizda" className="text-gray-400 hover:text-white transition">Hakkımızda</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Sosyal Medya</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SPEACH. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;