import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SiDiscord } from "react-icons/si";
import { 
  ArrowLeftRight, 
  Home, 
  Shield, 
  Zap, 
  FileText, 
  HelpCircle, 
  MessageSquare,
  Menu,
  X
} from "lucide-react";

import logoImg from "../assets/logo.png";

// Define navigation items with section IDs
const navItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: Shield, label: "HWID Spoofer", href: "#product" },
  { icon: Zap, label: "Features", href: "#features" },
  { icon: ArrowLeftRight, label: "Pricing", href: "#pricing" },
  { icon: FileText, label: "FAQ", href: "#faq" },
  { icon: HelpCircle, label: "Support", href: "#contact" },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isMobileOpen) setIsMobileOpen(false);
    
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
      // Update URL hash without scroll jump
      window.history.pushState(null, '', sectionId);
      
      // Update active section
      setActiveSection(sectionId);
    }
  };

  // Intersection observer to update active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50%',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get the id of the section
          const id = `#${entry.target.id}`;
          setActiveSection(id);
          
          // Update URL without scroll
          if (window.location.hash !== id) {
            window.history.replaceState(null, '', id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Target all sections with IDs
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="gradient-border-hover"
        >
          {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-40 lg:hidden" 
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 z-40 h-full gradient-bg-dark border-r border-slate-800",
          "transition-all duration-300 ease-in-out",
          "flex flex-col gap-1 py-4",
          isExpanded ? "w-52" : "w-16",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="px-2 mb-6">
          <div 
            className={cn(
              "flex items-center justify-center h-12 rounded-md",
              "cursor-pointer transition-all duration-300",
              isExpanded ? "justify-start pl-2" : "justify-center"
            )}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <img 
              src={logoImg} 
              alt="Fynze"
              className="h-10 w-auto object-contain"
            />
            {isExpanded && (
              <span className="ml-2 font-bold text-lg gradient-text">Fynze</span>
            )}
          </div>
        </div>

        {/* Nav Items */}
        <div className="flex-1 flex flex-col gap-0.5 px-2">
          <TooltipProvider>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;
              
              return (
                <Tooltip key={item.href} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <a 
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={cn(
                        "w-full flex items-center py-2 px-3 rounded-md",
                        "transition-all duration-300 ease-in-out",
                        "font-medium text-sm",
                        "hover:bg-slate-800/50 text-slate-400 hover:text-slate-200",
                        isExpanded ? "justify-start" : "justify-center"
                      )}
                    >
                      <div className="relative">
                        <Icon 
                          size={18} 
                          className={cn(
                            "transition-all duration-300", 
                            isExpanded ? "mr-2" : "mx-auto",
                            "text-slate-400 group-hover:text-blue-400"
                          )} 
                        />
                        <span className="absolute -inset-1 bg-blue-400/10 rounded-full blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
                      </div>
                      {isExpanded && <span>{item.label}</span>}
                    </a>
                  </TooltipTrigger>
                  {!isExpanded && (
                    <TooltipContent side="right">
                      {item.label}
                    </TooltipContent>
                  )}
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>

        {/* Discord Link */}
        <div className="mt-auto px-2">
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <a 
                  href="https://discord.gg/gxw4GaKkGp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center h-10 px-3 rounded-md",
                    "text-blue-400 hover:text-blue-300",
                    "transition-all duration-300",
                    "bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-blue-700/30",
                    isExpanded ? "justify-start" : "justify-center"
                  )}
                >
                  <div className="relative">
                    <SiDiscord size={18} className={isExpanded ? "mr-2" : "mx-auto"} />
                    <span className="absolute -inset-1 bg-blue-400/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </div>
                  {isExpanded && <span>Discord</span>}
                </a>
              </TooltipTrigger>
              {!isExpanded && (
                <TooltipContent side="right">
                  Join Discord
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>
      </aside>
    </>
  );
}