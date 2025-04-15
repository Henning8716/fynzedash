import { useEffect, useState } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Check, Star, Shield, Zap, Award, Clock, Cpu, Database, X } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import FaqItem from "@/components/FaqItem";
import PolicyDialog from "@/components/PolicyDialog";
import setupScrollReveal from "@/lib/scrollReveal";

// Import product images
import loginScreen from "../assets/login_screen.png";
import spoofScreen from "../assets/spoof_screen.png";
import logoBg from "../assets/logo_bg.png";

export default function Dashboard() {
  // State for policy dialogs
  const [policyDialog, setPolicyDialog] = useState<{
    isOpen: boolean;
    type: 'terms' | 'privacy' | 'refund';
  }>({
    isOpen: false,
    type: 'terms'
  });

  // Function to open policy dialog
  const openPolicyDialog = (type: 'terms' | 'privacy' | 'refund') => {
    setPolicyDialog({
      isOpen: true,
      type
    });
  };

  // Function to close policy dialog
  const closePolicyDialog = () => {
    setPolicyDialog(prev => ({
      ...prev,
      isOpen: false
    }));
  };

  // Initialize scroll reveal animations once component is mounted
  useEffect(() => {
    const scrollReveal = setupScrollReveal();
    return () => {
      // Cleanup if needed
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Permanent Protection",
      description: "Our spoofer permanently changes your hardware IDs, ensuring long-term protection against HWID bans and VPN kicks."
    },
    {
      icon: Zap,
      title: "Undetectable Technology",
      description: "Advanced spoofing methods that remain undetected by anti-cheat systems and hardware scanners."
    },
    {
      icon: Clock,
      title: "24/7 Elite Support",
      description: "Our dedicated team provides around-the-clock assistance for any questions or issues you might have."
    },
    {
      icon: Database,
      title: "Secure Implementation",
      description: "Fynze's technology is designed with security in mind, ensuring your system remains protected and stable."
    },
    {
      icon: Award,
      title: "Regular Updates",
      description: "Continuous updates to stay ahead of detection methods and ensure permanent effectiveness."
    },
    {
      icon: Cpu,
      title: "Instant Activation",
      description: "One-click activation gets you protected immediately with no complicated setup process."
    }
  ];

  const testimonials = [
    {
      rating: 5,
      text: "After trying multiple HWID spoofers with no success, Fynze's solution finally worked for me. I can now play without getting kicked, and their support team was incredibly helpful throughout the process.",
      author: {
        initials: "MG",
        name: "Marcus G.",
        color: "bg-blue-600"
      }
    },
    {
      rating: 5,
      text: "Fynze's Permanent HWID Spoofer is truly permanent. I've gone through several Windows updates and it's still working perfectly. Best investment for my online privacy and security.",
      author: {
        initials: "JT",
        name: "Jordan T.",
        color: "bg-cyan-600"
      }
    },
    {
      rating: 5,
      text: "Their 24/7 support team is the real deal. Had a technical issue at 3 AM and they helped me resolve it within minutes. The product works as advertised without affecting my system's performance.",
      author: {
        initials: "AL",
        name: "Alex L.",
        color: "bg-indigo-600"
      }
    }
  ];

  const faqs = [
    {
      value: "faq-1",
      question: "What is an HWID Spoofer and why do I need it?",
      answer: "An HWID (Hardware ID) Spoofer is a tool that changes how your computer's hardware is identified by software and online services. You might need it if you've received a hardware ban from a service, game, or simply want to protect your privacy when using VPN services that might otherwise get detected and result in kicks or restrictions."
    },
    {
      value: "faq-2",
      question: "How does Fynze's HWID Spoofer resolve VPN kicks?",
      answer: "Many services detect VPNs by analyzing hardware identifiers alongside network data. Our HWID Spoofer modifies these identifiers, making it impossible for services to correlate your hardware profile with VPN usage patterns. This prevents the automatic VPN detection that often leads to kicks or restrictions."
    },
    {
      value: "faq-3",
      question: "Is using an HWID Spoofer legal?",
      answer: "Yes! HWID Spoofers are legal tools for privacy protection. They function similarly to other privacy tools like VPNs or browser privacy extensions. Our software is designed for legitimate privacy enhancement and protecting users from unfair restrictions. We're proud to offer a solution that helps users maintain their digital rights and privacy."
    },
    {
      value: "faq-4",
      question: "What makes Fynze's HWID Spoofer \"permanent\"?",
      answer: "Unlike temporary solutions that need to be reapplied after each reboot, our HWID Spoofer makes permanent modifications to how your system reports hardware identifiers. These changes persist through system updates and reboots. Additionally, we provide lifetime updates to ensure continued compatibility with evolving detection methods."
    },
    {
      value: "faq-5",
      question: "Will the HWID Spoofer affect my system performance?",
      answer: "No. Fynze's HWID Spoofer is engineered to have minimal impact on system performance. Unlike competitors that run resource-intensive processes in the background, our solution works by modifying system identifiers directly, requiring no continuous background processes. Most users report zero noticeable performance difference."
    }
  ];

  return (
    <div className="flex min-h-screen gradient-bg-dark">
      <Sidebar />
      
      <main className="flex-1 lg:ml-16">
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden grid-pattern py-16 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-indigo-950/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight reveal-element reveal-left">
                  <span className="gradient-text">Fynze Permanent</span> <br />
                  HWID Spoofer
                </h1>
                <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 reveal-element reveal-left">
                  The definitive solution for <span className="gradient-text font-semibold">resolving HWID bans</span> and 
                  <span className="gradient-text font-semibold"> VPN detection kicks</span>. Our cutting-edge technology
                  provides unmatched protection with 24/7 elite support.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 reveal-element reveal-bottom">
                  <button className="relative overflow-hidden group rounded-lg">
                    <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-blue-400 to-cyan-400 blur-sm opacity-75 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                    <div className="relative z-10 py-3 px-7 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-500 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-300/20 to-blue-600/0 opacity-0 group-hover:opacity-100 duration-500 bg-[length:50%_100%] bg-no-repeat bg-left group-hover:bg-right transition-all"></div>
                      <span className="font-medium text-white flex items-center">
                        Get Started Now
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </button>
                  
                  <a href="#features" className="relative overflow-hidden group rounded-lg">
                    <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
                    <div className="relative z-10 py-3 px-7 rounded-lg bg-transparent border border-blue-600/50 group-hover:border-blue-500 transition-all duration-300">
                      <span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300 flex items-center">
                        View Features
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
                
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 reveal-element reveal-bottom">
                  <div className="p-4 rounded-lg gradient-border hover:shadow-md hover:shadow-blue-900/20 transition-all duration-300 hover:border-blue-500/30">
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                        <Check className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-slate-200">100% Undetectable</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg gradient-border hover:shadow-md hover:shadow-blue-900/20 transition-all duration-300 hover:border-blue-500/30">
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                        <Check className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-slate-200">Lifetime Updates</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg gradient-border hover:shadow-md hover:shadow-blue-900/20 transition-all duration-300 hover:border-blue-500/30">
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                        <Check className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-slate-200">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 mt-10 lg:mt-0 reveal-element reveal-right">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30"></div>
                  <div className="relative overflow-hidden rounded-xl border border-slate-800">
                    <img 
                      src={loginScreen} 
                      alt="HWID Spoofer Dashboard" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quote Section */}
        <section id="quote" className="py-14 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="absolute inset-0 opacity-5">
            <img 
              src={logoBg} 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-indigo-950/10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
            <div className="reveal-element reveal-scale">
              <p className="text-xl md:text-2xl font-medium text-slate-300 italic">
                "Other spoofers only hide your hardware temporarily. 
                <span className="gradient-text font-bold"> Fynze is the only solution that permanently changes your HWID</span>, 
                making it truly undetectable and immune to future bans."
              </p>
              <div className="mt-6">
                <div className="flex justify-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="mt-2 text-blue-400 font-medium">- Founder & Lead Developer</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 reveal-element reveal-bottom">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Cutting-Edge <span className="gradient-text">Features</span>
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Our HWID Spoofer provides comprehensive protection against hardware ID tracking
                and bans with our advanced technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Comparison Section */}
        <section id="comparison" className="py-16 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-indigo-950/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="text-center mb-16 reveal-element reveal-bottom">
              <h2 className="text-3xl sm:text-4xl font-bold">
                How We <span className="gradient-text">Compare</span>
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                See why our technology outperforms competitors with our permanent hardware ID modification
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {/* Competitors Column */}
              <div className="relative p-6 rounded-xl bg-gradient-to-b from-slate-800/30 to-slate-900/70 border border-slate-700 reveal-element reveal-left">
                <div className="absolute -top-4 -left-4 p-0.5 rounded-full bg-gradient-to-r from-red-600 to-red-400">
                  <div className="px-4 py-1 rounded-full bg-slate-950/95 text-red-300 text-sm font-medium">
                    COMPETITORS
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-200 mb-6 mt-2">Temporary Masking Solutions</h3>
                
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mr-3 mt-0.5">
                      <X className="h-3 w-3 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-300">Only Mask Hardware IDs</h4>
                      <p className="text-sm text-slate-400 mt-1">Simply hide identifiers temporarily rather than permanently modifying them</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mr-3 mt-0.5">
                      <X className="h-3 w-3 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-300">Reset After Reboot</h4>
                      <p className="text-sm text-slate-400 mt-1">Protection is lost after system restart, requiring reapplication</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mr-3 mt-0.5">
                      <X className="h-3 w-3 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-300">Detectable by Advanced Scans</h4>
                      <p className="text-sm text-slate-400 mt-1">Modern anti-cheat systems can detect masking attempts</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mr-3 mt-0.5">
                      <X className="h-3 w-3 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-300">Limited Support</h4>
                      <p className="text-sm text-slate-400 mt-1">Often provide minimal documentation and customer assistance</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Fynze Column */}
              <div className="relative p-6 rounded-xl bg-gradient-to-b from-blue-950/40 to-slate-900/90 border border-blue-800/30 reveal-element reveal-right">
                <div className="absolute -top-4 -left-4 p-0.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400">
                  <div className="px-4 py-1 rounded-full bg-blue-950/95 text-blue-200 text-sm font-medium">
                    FYNZE
                  </div>
                </div>
                
                {/* Subtle animated glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-xl blur-md opacity-50 pulse-glow"></div>
                
                <div className="relative">
                  <h3 className="text-xl font-bold text-blue-200 mb-6 mt-2">Permanent Modification Technology</h3>
                  
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-100">Permanently Changes Hardware IDs</h4>
                        <p className="text-sm text-blue-200/80 mt-1">Uses advanced technology to modify your hardware identifiers at the system level</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-100">Survives System Updates</h4>
                        <p className="text-sm text-blue-200/80 mt-1">Changes persist through reboots, Windows updates, and driver installations</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-100">100% Undetectable</h4>
                        <p className="text-sm text-blue-200/80 mt-1">Makes your system appear genuinely new to all detection methods</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-100">Detailed Documentation & Support</h4>
                        <p className="text-sm text-blue-200/80 mt-1">Includes comprehensive guides and 24/7 support from hardware ID experts</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Screenshot Section */}
        <section id="product" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-indigo-950/10 to-slate-900/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2 reveal-element reveal-left">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30"></div>
                  <div className="relative overflow-hidden rounded-xl border border-slate-800">
                    <img 
                      src={spoofScreen} 
                      alt="HWID Spoofer Interface" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 reveal-element reveal-right">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  <span className="gradient-text">Powerful</span> & Easy to Use
                </h2>
                <p className="mt-4 text-slate-300">
                  Our intuitive interface lets you take control of your hardware identity with just a few clicks.
                  Designed for both beginners and advanced users, Fynze HWID Spoofer delivers powerful protection
                  without complicated setup.
                </p>
                
                <div className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium gradient-text-blue-cyan">Complete Protection</h3>
                      <p className="text-slate-400">Modifies all hardware identifiers including CPU, GPU, motherboard, and disk drives</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Zap className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium gradient-text-blue-cyan">Instant Results</h3>
                      <p className="text-slate-400">Changes take effect immediately without requiring multiple system reboots</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Award className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium gradient-text-blue-cyan">Premium Support</h3>
                      <p className="text-slate-400">24/7 expert assistance for any questions or issues you might encounter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 reveal-element reveal-bottom">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Affordable <span className="gradient-text">Pricing</span>
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Premium protection at a fraction of the cost of our competitors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative">
              {/* Gradient connection between plans */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-40 hidden md:block bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>
              
              {/* 24H Plan */}
              <div className="reveal-element reveal-left">
                <div className="relative p-6 rounded-xl bg-gradient-to-b from-slate-800/30 to-slate-900/70 border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:shadow-md hover:shadow-blue-900/20 group">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-slate-50 transition-colors duration-300">24H One-Time Plan</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-4xl font-extrabold gradient-text">€9.98</span>
                      <span className="ml-1 text-slate-400">/one-time</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">
                      Competitor price: <span className="line-through">€20</span>
                    </p>
                  </div>
                  
                  <ul className="mt-6 space-y-4">
                    <li className="flex">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center mr-2">
                        <Check className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-slate-300">Full HWID spoofing capabilities</span>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center mr-2">
                        <Check className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-slate-300">Same spoofing technology as lifetime</span>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center mr-2">
                        <Check className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-slate-300">Permanent ID changes</span>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center mr-2">
                        <Check className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-slate-300">24 hours of support</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <button 
                      className="w-full group/btn relative py-3 px-4 rounded-lg overflow-hidden transition-all duration-300"
                      data-billgang-product-path="24h"
                      data-billgang-domain="fynze.bgng.io"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border border-slate-600/50 transition-all duration-300"></div>
                      <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500/20 to-transparent transition-all duration-500 group-hover/btn:w-full"></div>
                      <span className="relative z-10 text-blue-300 group-hover/btn:text-blue-200 transition-colors duration-300 flex items-center justify-center">
                        Select 24-Hour Plan
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Lifetime Plan - Enhanced */}
              <div className="reveal-element reveal-right">
                <div className="relative p-8 rounded-xl bg-gradient-to-b from-blue-950/40 to-slate-900/90 border border-blue-800/30 group hover:border-blue-700/40 transition-all duration-500 hover:shadow-lg hover:shadow-blue-900/30 transform">
                  {/* Best Value Label */}
                  <div className="absolute -top-4 -right-4 p-0.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400">
                    <div className="px-4 py-1 rounded-full bg-blue-950/95 text-blue-200 text-sm font-medium">
                      BEST VALUE
                    </div>
                  </div>
                  
                  {/* Subtle animated glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-700 pulse-glow"></div>
                  
                  <div className="relative">
                    <div className="mb-5">
                      <h3 className="text-2xl font-bold text-slate-50 group-hover:text-white transition-colors duration-300">Lifetime Plan</h3>
                      <div className="mt-3 flex items-baseline">
                        <span className="text-5xl font-extrabold gradient-text">€19.98</span>
                        <span className="ml-1 text-blue-300">/lifetime</span>
                      </div>
                      <p className="mt-2 text-sm text-blue-300/80">
                        Competitor price: <span className="line-through">€60</span> <span className="text-blue-200 font-medium">Save €40.02</span>
                      </p>
                    </div>
                    
                    <ul className="mt-7 space-y-4">
                      <li className="flex">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                          <Check className="h-4 w-4 text-blue-400" />
                        </div>
                        <span className="text-slate-200">Full HWID spoofing capabilities</span>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                          <Check className="h-4 w-4 text-blue-400" />
                        </div>
                        <span className="text-slate-200">Lifetime 24/7 support</span>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                          <Check className="h-4 w-4 text-blue-400" />
                        </div>
                        <span className="text-slate-200">Unlimited updates</span>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                          <Check className="h-4 w-4 text-blue-400" />
                        </div>
                        <span className="text-slate-200">Priority 1-on-1 assistance</span>
                      </li>

                      <li className="flex">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                          <Check className="h-4 w-4 text-blue-400" />
                        </div>
                        <span className="text-slate-200">Full hardware ID mask customization</span>
                      </li>
                    </ul>
                    
                    <div className="mt-8">
                      <button 
                        className="relative w-full overflow-hidden group/btn"
                        data-billgang-product-path="perm"
                        data-billgang-domain="fynze.bgng.io"
                      >
                        <div className="absolute inset-0 w-3 bg-gradient-to-r from-blue-400 to-cyan-400 blur-sm opacity-75 group-hover/btn:w-full transition-all duration-500"></div>
                        <div className="relative z-10 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 group-hover/btn:from-blue-500 group-hover/btn:to-blue-600 transition-all duration-300 shadow-md">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-300/20 to-blue-600/0 opacity-0 group-hover/btn:opacity-100 duration-500 bg-[length:50%_100%] bg-no-repeat bg-left group-hover/btn:bg-right transition-all"></div>
                          <span className="font-medium text-white flex items-center justify-center">
                            Get Lifetime Access
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Showcase Section replacing Testimonials */}
        <section id="technology" className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-cyan-950/5 to-indigo-950/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="text-center mb-16 reveal-element reveal-bottom">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Advanced <span className="gradient-text">Technology</span>
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Unmatched security features that set us apart from competitors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Technology Item 1 */}
              <div className="reveal-element reveal-scale bg-gradient-to-b from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-all duration-300">
                  <Cpu className="w-7 h-7 text-blue-400 group-hover:text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 gradient-text-blue-cyan">Deep Hardware Modification</h3>
                <p className="text-slate-300">Our technology modifies your hardware IDs at the firmware level, creating permanent changes that persist through updates and reboots.</p>
                
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Modification Depth</span>
                    <span className="text-sm text-blue-400">Firmware Level</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Technology Item 2 */}
              <div className="reveal-element reveal-scale bg-gradient-to-b from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-all duration-300">
                  <Shield className="w-7 h-7 text-blue-400 group-hover:text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 gradient-text-blue-cyan">Intelligent HWID Randomization</h3>
                <p className="text-slate-300">Our AI-driven algorithm creates believable, consistent hardware profiles that appear genuine to even the most sophisticated detection systems.</p>
                
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Detection Evasion</span>
                    <span className="text-sm text-blue-400">99.8% Success</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" style={{width: '97%'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Technology Item 3 */}
              <div className="reveal-element reveal-scale bg-gradient-to-b from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-all duration-300">
                  <Database className="w-7 h-7 text-blue-400 group-hover:text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 gradient-text-blue-cyan">Quantum-Resistant Encryption</h3>
                <p className="text-slate-300">All your hardware data is secured with future-proof encryption that protects against even next-generation cracking attempts.</p>
                
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Security Level</span>
                    <span className="text-sm text-blue-400">Military Grade</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 reveal-element reveal-bottom">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Everything you need to know about our HWID Spoofer
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FaqItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  value={faq.value}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section id="contact" className="py-16 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-indigo-950/20"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
            <div className="text-center reveal-element reveal-scale">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Ready to <span className="gradient-text">Get Started?</span>
              </h2>
              <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                Join thousands of satisfied users who trust Fynze for their HWID spoofing needs.
                Our solution includes <span className="gradient-text font-semibold">insane, detailed documentation</span> and
                is the last HWID spoofer you'll ever need.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 reveal-element reveal-bottom">
                <a 
                  href="#plans" 
                  className="relative overflow-hidden group rounded-lg"
                >
                  <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-blue-400 to-cyan-400 blur-sm opacity-75 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                  <div className="relative z-10 py-4 px-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-500 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-300/20 to-blue-600/0 opacity-0 group-hover:opacity-100 duration-500 bg-[length:50%_100%] bg-no-repeat bg-left group-hover:bg-right transition-all"></div>
                    <span className="font-medium text-lg text-white flex items-center">
                      Get Fynze HWID Spoofer
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </a>
                
                <button className="relative overflow-hidden group rounded-lg">
                  <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-30 group-hover:opacity-100 blur-sm transition-opacity duration-300 group-hover:blur"></div>
                  <div className="relative z-10 py-4 px-8 rounded-lg bg-slate-900 border border-blue-600/50 group-hover:border-blue-500 transition-all duration-300">
                    <span className="font-medium text-lg text-blue-400 group-hover:text-blue-300 transition-colors duration-300 flex items-center">
                      Join Discord
                      <SiDiscord className="ml-2 h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        

        {/* Footer with Policy Links */}
        <footer className="py-8 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-bold gradient-text-blue-cyan">Fynze Services</h3>
                <p className="text-slate-400 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
              </div>
              
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => openPolicyDialog('terms')}
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => openPolicyDialog('privacy')}
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => openPolicyDialog('refund')}
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Refund Policy
                </button>
                
                <a 
                  href="https://discord.gg/gxw4GaKkGp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <SiDiscord className="text-lg" />
                  <span>Discord</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
      
      {/* Policy dialog */}
      <PolicyDialog 
        type={policyDialog.type}
        isOpen={policyDialog.isOpen}
        onClose={closePolicyDialog}
      />
    </div>
  );
}