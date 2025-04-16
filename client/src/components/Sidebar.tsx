import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import logoImg from "../assets/logo.png";

// Define navigation items with section IDs
const navItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: Zap, label: "Features", href: "#features" },
  { icon: Shield, label: "HWID Spoofer", href: "#product" },
  { icon: ArrowLeftRight, label: "Pricing", href: "#pricing" },
  { icon: FileText, label: "FAQ", href: "#faq" },
  { icon: HelpCircle, label: "Support", href: "#contact" },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  
  const sidebarRef = useRef(null);
  const timeoutRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (e, sectionId) => {
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
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 50);
      setIsScrollingDown(currentScrollY > prevScrollY);
      setPrevScrollY(currentScrollY);
      
      // Auto-collapse sidebar on scroll down on mobile
      if (window.innerWidth < 1024 && isExpanded && currentScrollY > prevScrollY && currentScrollY > 100) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY, isExpanded]);

  // Handle click outside to close mobile sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileOpen]);

  // Auto-close timeout for mobile
  useEffect(() => {
    if (isMobileOpen && window.innerWidth < 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsMobileOpen(false);
      }, 5000);  // Auto close after 5 seconds
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isMobileOpen]);

  // Animation variants
  const sidebarVariants = {
    expanded: { width: "240px", transition: { type: "spring", stiffness: 300, damping: 30 } },
    collapsed: { width: "72px", transition: { type: "spring", stiffness: 300, damping: 30 } },
    mobileOpen: { x: "0%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    mobileClosed: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const navItemVariants = {
    active: { 
      color: "#3b82f6", 
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      borderRight: "2px solid #3b82f6",
      fontWeight: 600
    },
    inactive: { 
      color: "#94a3b8", 
      backgroundColor: "transparent",
      borderRight: "2px solid transparent",
      fontWeight: 400
    },
    hoverActive: { 
      backgroundColor: "rgba(59, 130, 246, 0.2)", 
      color: "#60a5fa",
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 20 }
    },
    hoverInactive: { 
      backgroundColor: "rgba(30, 41, 59, 0.5)", 
      color: "#cbd5e1",
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 20 }
    }
  };

  const iconVariants = {
    active: { color: "#3b82f6", scale: 1.1 },
    inactive: { color: "#94a3b8", scale: 1 },
    hover: { color: "#60a5fa", scale: 1.15 }
  };

  const logoTextVariants = {
    visible: { opacity: 1, x: 0, transition: { delay: 0.1 } },
    hidden: { opacity: 0, x: -10 }
  };

  const labelVariants = {
    visible: { opacity: 1, x: 0, transition: { delay: 0.05 } },
    hidden: { opacity: 0, x: -10 }
  };

  const discordVariants = {
    initial: { y: 0, boxShadow: "0 0 0 rgba(59, 130, 246, 0)" },
    hover: { 
      y: -2, 
      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  // Beautiful particle button effect component
  const ParticleEffect = () => {
    return (
      <div className="absolute inset-0 overflow-hidden rounded-md pointer-events-none">
        <div className="particle-container">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full bg-blue-400 opacity-0 particle-${i}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.div 
        className="fixed top-5 left-5 z-50 lg:hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: isScrollingDown && hasScrolled ? -60 : 0
        }}
        transition={{ 
          duration: 0.3,
          opacity: { duration: 0.2 },
          y: { type: "spring", stiffness: 300, damping: 30 }
        }}
      >
        <motion.button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/90 backdrop-blur-lg border border-slate-800 shadow-lg shadow-black/30"
          whileTap={{ scale: 0.9 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
            borderColor: "rgba(59, 130, 246, 0.5)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <motion.div
            initial={false}
            animate={isMobileOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {isMobileOpen ? <X size={18} className="text-blue-400" /> : <Menu size={18} className="text-blue-400" />}
          </motion.div>
          <ParticleEffect />
        </motion.button>
      </motion.div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" 
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside 
        ref={sidebarRef}
        className={cn(
          "fixed top-0 left-0 z-40 h-full bg-slate-900/95 backdrop-blur-md",
          "border-r border-slate-800/50",
          "flex flex-col gap-1 py-5 px-2",
          "shadow-xl shadow-black/30",
          "lg:translate-x-0"
        )}
        variants={sidebarVariants}
        initial={window.innerWidth < 1024 ? "mobileClosed" : "collapsed"}
        animate={
          window.innerWidth < 1024
            ? isMobileOpen ? "mobileOpen" : "mobileClosed"
            : isExpanded ? "expanded" : "collapsed"
        }
      >
        {/* Expand/Collapse button for desktop */}
        <motion.div 
          className="absolute top-5 -right-3 hidden lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 border border-slate-700 shadow-md"
            whileHover={{ scale: 1.1, backgroundColor: "#1e293b", borderColor: "#3b82f6" }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <ChevronLeft size={14} className="text-blue-400" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Logo */}
        <div className="px-2 mb-8">
          <motion.div 
            className={cn(
              "flex items-center h-12 rounded-lg",
              "cursor-pointer overflow-hidden"
            )}
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="flex items-center justify-center w-10 h-10"
              whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={logoImg} 
                alt="Fynze"
                className="w-auto h-8 object-contain"
              />
            </motion.div>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.span 
                  className="ml-3 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
                  variants={logoTextVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  Fynze
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Nav Items */}
        <div className="flex-1 flex flex-col gap-1.5 px-1">
          <TooltipProvider>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;
              
              return (
                <Tooltip key={item.href} delayDuration={100}>
                  <TooltipTrigger asChild>
                    <motion.a 
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={cn(
                        "relative w-full flex items-center py-2.5 px-3 rounded-lg",
                        "font-medium text-sm",
                        "overflow-hidden transition-all duration-200"
                      )}
                      variants={navItemVariants}
                      initial="inactive"
                      animate={isActive ? "active" : "inactive"}
                      whileHover={isActive ? "hoverActive" : "hoverInactive"}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <motion.div 
                        className="relative flex items-center justify-center w-8 h-8"
                        variants={iconVariants}
                        initial="inactive"
                        animate={isActive ? "active" : "inactive"}
                        whileHover="hover"
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <Icon size={isActive ? 19 : 18} />
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: [0, 0.2, 0],
                              scale: [1, 1.8, 2.2],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          />
                        )}
                      </motion.div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.span 
                            className="ml-3 whitespace-nowrap"
                            variants={labelVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
                            {item.label}
                          </motion.span>
                        )}
                      </AnimatePresence>

                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-blue-500/10 rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layoutId="activeBackground"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.a>
                  </TooltipTrigger>
                  {!isExpanded && (
                    <TooltipContent 
                      side="right"
                      className="bg-slate-800 text-slate-200 border-slate-700 px-3 py-1.5 text-sm rounded-lg shadow-lg"
                    >
                      {item.label}
                    </TooltipContent>
                  )}
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>

        {/* Discord Link */}
        <div className="mt-auto px-1 pt-4">
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <motion.a 
                  href="https://discord.gg/gxw4GaKkGp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "relative flex items-center justify-center h-12 px-3 rounded-xl",
                    "transition-all duration-300",
                    "bg-gradient-to-r from-blue-600/20 to-indigo-600/20",
                    "border border-blue-500/30",
                    "overflow-hidden",
                    isExpanded ? "justify-start" : "justify-center"
                  )}
                  variants={discordVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <motion.div className="relative z-10 flex items-center">
                    <SiDiscord 
                      size={20} 
                      className={cn(
                        "text-blue-400 flex-shrink-0",
                        isExpanded ? "mr-3" : ""
                      )} 
                    />
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.span 
                          className="font-semibold text-blue-300 whitespace-nowrap"
                          variants={labelVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          Join Discord
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  
                  <ParticleEffect />
                </motion.a>
              </TooltipTrigger>
              {!isExpanded && (
                <TooltipContent 
                  side="right"
                  className="bg-slate-800 text-slate-200 border-slate-700 px-3 py-1.5 text-sm rounded-lg shadow-lg"
                >
                  Join Discord
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>
      </motion.aside>

      {/* Add global styles for particles */}
      <style jsx global>{`
        @keyframes particle {
          0% { 
            transform: translate(0, 0) scale(0); 
            opacity: 0;
          }
          50% { 
            opacity: 0.5;
          }
          100% { 
            transform: translate(var(--tx), var(--ty)) scale(1.2); 
            opacity: 0;
          }
        }
        
        .particle-0 { --tx: -10px; --ty: -20px; animation: particle 2s ease-out infinite; }
        .particle-1 { --tx: 10px; --ty: -20px; animation: particle 2.2s ease-out 0.2s infinite; }
        .particle-2 { --tx: 20px; --ty: -10px; animation: particle 1.8s ease-out 0.4s infinite; }
        .particle-3 { --tx: 20px; --ty: 10px; animation: particle 2.4s ease-out 0.6s infinite; }
        .particle-4 { --tx: 10px; --ty: 20px; animation: particle 2s ease-out 0.8s infinite; }
        .particle-5 { --tx: -10px; --ty: 20px; animation: particle 2.2s ease-out 1s infinite; }
        .particle-6 { --tx: -20px; --ty: 10px; animation: particle 1.8s ease-out 1.2s infinite; }
        .particle-7 { --tx: -20px; --ty: -10px; animation: particle 2.4s ease-out 1.4s infinite; }
      `}</style>
    </>
  );
}
