
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { asset } from '@/lib/asset';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleExperiencesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to home page first
    navigate('/');
    // Then scroll to experiences section after a brief delay
    setTimeout(() => {
      const experiencesSection = document.getElementById('experiences-section');
      if (experiencesSection) {
        experiencesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false); // Close mobile menu if open
  };

  const navItems = [
    { name: 'Experiences', href: '#experiences', onClick: handleExperiencesClick },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Now', href: '/booking' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2 md:gap-3">
              <img
                src={asset("/lovable-uploads/d5508ff5-43b6-40ee-87ff-7ea18083830d.png")}
                alt="Escape Box"
                className="h-6 md:h-8 w-auto"
              />
              <span className="text-lg md:text-2xl font-bold font-display text-[hsl(222.2,84%,4.9%)]">
                Escape Box
              </span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={item.onClick}
                  className="text-[hsl(222.2,84%,4.9%)] hover:text-kiwi-green transition-colors text-sm lg:text-base"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[hsl(222.2,84%,4.9%)] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg border-t">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    item.onClick(e);
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="block px-3 py-2 text-[hsl(222.2,84%,4.9%)] hover:text-kiwi-green transition-colors text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
