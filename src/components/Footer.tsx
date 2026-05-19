
import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '@/lib/asset';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold font-display text-kiwi-green flex items-center gap-3">
              <img 
                src={asset("/lovable-uploads/0e38d572-9fea-4220-9311-125cb221237f.png")}
                alt="Escape Box"
                className="h-6 w-auto"
              />
              Escape Box
            </Link>
            <p className="mt-2 text-sm text-[hsl(222.2,84%,4.9%)]">
              Join the Escape Box community
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 flex-wrap justify-center md:justify-end">
            <Link to="/experiences" className="text-[hsl(222.2,84%,4.9%)] hover:text-kiwi-green transition-colors">
              Experiences
            </Link>
            <Link to="/team-building" className="text-[hsl(222.2,84%,4.9%)] hover:text-kiwi-green transition-colors">
              Team Building
            </Link>
            <Link to="/faq" className="text-[hsl(222.2,84%,4.9%)] hover:text-kiwi-green transition-colors">
              FAQ
            </Link>
            <Link to="/booking" className="text-[hsl(222.2,84%,4.9%)] hover:text-kiwi-green transition-colors">
              Book Now
            </Link>
            <Link to="/about" className="text-[hsl(222.2,84%,4.9%)] hover:text-kiwi-green transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-[hsl(222.2,84%,4.9%)] hover:text-kiwi-green transition-colors">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-[hsl(222.2,84%,4.9%)]">
          <p>© {new Date().getFullYear()} Escape Box. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
