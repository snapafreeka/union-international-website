import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import logoImage from '@/imports/logo.png.png';
import { trackPhoneClick, trackEmailClick } from '@/app/components/Analytics';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logoImage}
                alt="Union International Limited"
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-bold text-white">Union International</span>
                <span className="text-xs">Limited</span>
              </div>
            </div>
            <p className="text-sm mb-4">
              Uniting Borders, Inspiring Growth - Shaping the Future of Security and Technology with Innovation
            </p>
            <p className="text-xs mb-4 text-gray-400">
              Est. 2013 | General Bond for Security of Warehoused Goods 2024-2026
            </p>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/union-international-ltd" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/unionintl" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.facebook.com/unioninternational" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/unioninternational" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@unioninternational" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-400 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-400 transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Core Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Imports & Exports (Customs Agent License #1)</li>
              <li className="text-sm">Electronic Sealing Solutions</li>
              <li className="text-sm">Electronic Cargo Tracking System</li>
              <li className="text-sm">Fleet Management System</li>
              <li className="text-sm">Managed Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">Postbank Building, 16th Floor<br/>Market Street, P.O Box 420 - 80113<br/>Mariakani, Kenya</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <a
                  href="tel:+254769021111"
                  onClick={() => trackPhoneClick('0769021111', 'call')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  0769021111
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:info@unioninternational.co.ke"
                  onClick={() => trackEmailClick('info@unioninternational.co.ke')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  info@unioninternational.co.ke
                </a>
              </li>
              <li className="text-xs text-gray-400 mt-2">
                Office Hours:<br/>
                Mon-Fri: 8:00 AM - 6:00 PM<br/>
                Saturday: 9:00 AM - 1:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Union International Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
