import { Link, useLocation } from "wouter";
import { useState } from "react";
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

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Shield, label: "HWID Spoofer", href: "/spoofer" },
  { icon: Zap, label: "Features", href: "/features" },
  { icon: ArrowLeftRight, label: "Pricing", href: "/pricing" },
  { icon: FileText, label: "FAQ", href: "/faq" },
  { icon: MessageSquare, label: "Testimonials", href: "/testimonials" },
  { icon: HelpCircle, label: "Support", href: "/support" },
];

export default function Sidebar() {
  const [location] = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
          isExpanded ? "w-56" : "w-16",
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
              const isActive = location === item.href;
              
              return (
                <Tooltip key={item.href} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link href={item.href}>
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        className={cn(
                          "w-full justify-start flex items-center",
                          "h-10 px-2 font-medium",
                          isActive && !isExpanded && "gradient-bg-button glow-effect",
                          isActive && isExpanded && "gradient-bg-button glow-effect"
                        )}
                      >
                        <Icon size={18} className={cn("transition-all", isExpanded ? "mr-2" : "mx-auto")} />
                        {isExpanded && <span>{item.label}</span>}
                      </Button>
                    </Link>
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
                    "flex items-center h-10 px-2 rounded-md",
                    "text-cyan-400 hover:text-cyan-300",
                    "transition-all duration-200",
                    "gradient-border-hover",
                    isExpanded ? "justify-start" : "justify-center"
                  )}
                >
                  <SiDiscord size={18} className={isExpanded ? "mr-2" : "mx-auto"} />
                  {isExpanded && <span>Join Discord</span>}
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