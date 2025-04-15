import { useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Check, Star, Shield, Zap, Award, Clock, Cpu, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import FaqItem from "@/components/FaqItem";
import setupScrollReveal from "@/lib/scrollReveal";

// Import product images
import loginScreen from "../assets/login_screen.png";
import spoofScreen from "../assets/spoof_screen.png";
import logoBg from "../assets/logo_bg.png";

export default function Dashboard() {
  // Initialize scroll reveal animations once component is mounted
  useEffect(() => {
    const scrollReveal = setupScrollReveal();
    return () => {
      // Cleanup if needed
    };
  }, []);

  const features = [
    {
      icon: "🛡️",
      title: "Hardware ID Masking",
      description: "Completely masks all hardware identifiers including serial numbers, MAC addresses, and device IDs."
    },
    {
      icon: "🔌",
      title: "Network Signature Cloaking",
      description: "Modifies network signatures to prevent tracking and identification based on connection patterns."
    },
    {
      icon: "🧹",
      title: "Registry Cleansing",
      description: "Removes all traces of previous hardware identifiers from the Windows Registry."
    },
    {
      icon: "👆",
      title: "Browser Fingerprint Protection",
      description: "Prevents browser fingerprinting methods from identifying your system across websites."
    },
    {
      icon: "🎮",
      title: "Anti-Cheat Compatibility",
      description: "Specially designed to work alongside anti-cheat systems without triggering false flags."
    },
    {
      icon: "☁️",
      title: "Cloud Configuration",
      description: "Securely stores your spoofing configurations in the cloud for easy restoration and updates."
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
        <section className="relative overflow-hidden grid-pattern py-16 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>
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
                  <Button className="gradient-bg-button pulse-glow px-8">
                    Get Started Now
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-400">
                    View Features
                  </Button>
                </div>
                
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 reveal-element reveal-bottom">
                  <div className="p-4 rounded-lg gradient-border">
                    <div className="flex items-center justify-center lg:justify-start">
                      <Check className="w-5 h-5 text-emerald-400 mr-2" />
                      <span className="text-slate-200">100% Undetectable</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg gradient-border">
                    <div className="flex items-center justify-center lg:justify-start">
                      <Check className="w-5 h-5 text-emerald-400 mr-2" />
                      <span className="text-slate-200">Lifetime Updates</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg gradient-border">
                    <div className="flex items-center justify-center lg:justify-start">
                      <Check className="w-5 h-5 text-emerald-400 mr-2" />
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
        <section className="py-14 relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0 opacity-5">
            <img 
              src={logoBg} 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
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
        
        {/* Product Screenshot Section */}
        <section className="py-20 relative overflow-hidden bg-slate-900">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 24H Plan */}
              <div className="reveal-element reveal-left">
                <div className="relative p-6 rounded-xl gradient-border hover:scale-[1.02] transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">24H One-Time Plan</h3>
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
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mr-2" />
                      <span>Full HWID spoofing capabilities</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mr-2" />
                      <span>24 hours of support</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mr-2" />
                      <span>Changes persist through reboots</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mr-2" />
                      <span>One-time payment</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <Button className="w-full gradient-bg-button">
                      <span>Select Plan</span>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Lifetime Plan */}
              <div className="reveal-element reveal-right">
                <div className="relative p-6 rounded-xl gradient-border hover:scale-[1.02] transition-all duration-300">
                  <div className="absolute -top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    MOST POPULAR
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">Lifetime Plan</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-4xl font-extrabold gradient-text">€19.98</span>
                      <span className="ml-1 text-slate-400">/lifetime</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">
                      Competitor price: <span className="line-through">€60</span>
                    </p>
                  </div>
                  
                  <ul className="mt-6 space-y-4">
                    <li className="flex">
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mr-2" />
                      <span>Full HWID spoofing capabilities</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mr-2" />
                      <span>Lifetime 24/7 support</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mr-2" />
                      <span>Unlimited updates</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mr-2" />
                      <span>Priority assistance</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mr-2" />
                      <span>Multi-device support</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <Button className="w-full gradient-bg-button pulse-glow">
                      <span>Select Plan</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 reveal-element reveal-bottom">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Client <span className="gradient-text">Testimonials</span>
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Don't just take our word for it - hear what our users have to say
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  rating={testimonial.rating}
                  text={testimonial.text}
                  author={testimonial.author}
                />
              ))}
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
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
            <div className="text-center reveal-element reveal-scale">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Ready to <span className="gradient-text">Get Started?</span>
              </h2>
              <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                Join thousands of satisfied users who trust Fynze for their HWID spoofing needs.
                Our solution is the last one you'll ever need.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button className="gradient-bg-button pulse-glow px-8 py-6 text-lg">
                  Get Fynze HWID Spoofer
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-400 px-8 py-6 text-lg">
                  Join Discord
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} Fynze Services. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://discord.gg/gxw4GaKkGp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition"
              >
                Discord
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-blue-400 transition"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-blue-400 transition"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}