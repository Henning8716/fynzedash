import { useState } from "react";

export default function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const navItems = [
    { href: "#", text: "Dashboard" },
    { href: "#services", text: "Services" },
    { href: "#hwid-spoofer", text: "HWID Spoofer", active: true },
    { href: "#features", text: "Features" },
    { href: "#faq", text: "FAQ" },
    { href: "#testimonials", text: "Testimonials" }
  ];

  return (
    <div className="lg:hidden bg-zinc-900 border-b border-zinc-800 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-primary font-bold text-2xl tracking-tight font-mono">Fynze</div>
        <button 
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="px-4 py-2 pb-4">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className={`block py-2 ${item.active ? "text-primary" : "text-zinc-300"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
