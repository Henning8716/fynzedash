import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import FaqItem from "@/components/FaqItem";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Permanent HWID Spoofer",
      tag: { text: "Premium", color: "primary" },
      description: "Our advanced HWID spoofing technology prevents bans and ensures your privacy online.",
      link: "#hwid-spoofer"
    },
    {
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Fynze Secure VPN",
      tag: { text: "Popular", color: "secondary" },
      description: "Enterprise-grade encryption with optimized routing for gaming and streaming.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Account Recovery",
      tag: { text: "Standard", color: "zinc-500" },
      description: "Professional assistance to recover and secure compromised accounts.",
      link: "#"
    }
  ];

  const features = [
    {
      icon: "fa-microchip",
      title: "Hardware ID Masking",
      description: "Completely masks all hardware identifiers including serial numbers, MAC addresses, and device IDs."
    },
    {
      icon: "fa-network-wired",
      title: "Network Signature Cloaking",
      description: "Modifies network signatures to prevent tracking and identification based on connection patterns."
    },
    {
      icon: "fa-memory",
      title: "Registry Cleansing",
      description: "Removes all traces of previous hardware identifiers from the Windows Registry."
    },
    {
      icon: "fa-fingerprint",
      title: "Browser Fingerprint Protection",
      description: "Prevents browser fingerprinting methods from identifying your system across websites."
    },
    {
      icon: "fa-shield-alt",
      title: "Anti-Cheat Compatibility",
      description: "Specially designed to work alongside anti-cheat systems without triggering false flags."
    },
    {
      icon: "fa-cloud",
      title: "Cloud Configuration",
      description: "Securely stores your spoofing configurations in the cloud for easy restoration and updates."
    }
  ];

  const testimonials = [
    {
      rating: 5,
      text: "\"After trying multiple HWID spoofers with no success, Fynze's solution finally worked for me. I can now use my VPN without getting kicked. Their support team was incredibly helpful.\"",
      author: {
        initials: "MG",
        name: "Marcus G.",
        color: "primary"
      }
    },
    {
      rating: 5,
      text: "\"Fynze's Permanent HWID Spoofer is truly permanent. I've gone through several Windows updates and it's still working perfectly. Best investment for my online privacy.\"",
      author: {
        initials: "JT",
        name: "Jordan T.",
        color: "secondary"
      }
    },
    {
      rating: 4.5,
      text: "\"Their 24/7 support team is the real deal. Had a technical issue at 3 AM and they helped me resolve it within minutes. The product works as advertised and hasn't affected my system performance.\"",
      author: {
        initials: "AL",
        name: "Alex L.",
        color: "blue-700"
      }
    }
  ];

  const faqs = [
    {
      question: "What is an HWID Spoofer and why do I need it?",
      answer: "An HWID (Hardware ID) Spoofer is a tool that changes how your computer's hardware is identified by software and online services. You might need it if you've received a hardware ban from a service or game, want to protect your privacy, or need to prevent VPN detection that results in kicks or restrictions."
    },
    {
      question: "How does Fynze's HWID Spoofer resolve VPN kicks?",
      answer: "Many services detect VPNs by analyzing hardware identifiers alongside network data. Our HWID Spoofer modifies these identifiers, making it impossible for services to correlate your hardware profile with VPN usage patterns. This prevents the automatic VPN detection that often leads to kicks or restrictions."
    },
    {
      question: "Is using an HWID Spoofer legal?",
      answer: "HWID Spoofers themselves are legal tools for privacy protection. However, their use may violate the terms of service of certain platforms or games. Our software is designed for legitimate privacy enhancement and protection against unfair bans. We advise users to review the terms of service for any platform they use with our tools."
    },
    {
      question: "What makes Fynze's HWID Spoofer \"permanent\"?",
      answer: "Unlike temporary solutions that need to be reapplied after each reboot, our HWID Spoofer makes permanent modifications to how your system reports hardware identifiers. These changes persist through system updates and reboots. Additionally, we provide lifetime updates to ensure continued compatibility with evolving detection methods."
    },
    {
      question: "Will the HWID Spoofer affect my system performance?",
      answer: "No. Fynze's HWID Spoofer is engineered to have minimal impact on system performance. Unlike competitors that run resource-intensive processes in the background, our solution works by modifying system identifiers directly, requiring no continuous background processes. Most users report zero noticeable performance difference."
    }
  ];

  return (
    <>
      <Sidebar />
      <MobileNavigation />
      
      <main className="lg:pl-64 pt-16 lg:pt-0">
        {/* Hero Section */}
        <section className="relative overflow-hidden grid-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
            <div className="text-center md:text-left md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 md:pr-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Advanced <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Digital Security</span> Solutions
                </h1>
                <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto md:mx-0">
                  Fynze provides cutting-edge digital services with unmatched security and 24/7 elite support.
                  Stay ahead with our advanced protection technologies.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                  <a href="#services" className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-white font-medium shadow-[0_0_15px_rgba(47,180,255,0.5)] hover:bg-primary/90 transition">
                    Explore Services
                  </a>
                  <a href="#hwid-spoofer" className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-zinc-900 border border-primary text-primary font-medium hover:bg-zinc-800 transition">
                    HWID Spoofer Details
                  </a>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2 mt-10 md:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Digital Security Dashboard" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <div className="flex items-center">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <i className="fas fa-lock text-primary text-xl"></i>
                  </div>
                  <h3 className="ml-4 text-lg font-semibold">Enhanced Security</h3>
                </div>
                <p className="mt-4 text-zinc-400">State-of-the-art security to protect your digital identity and assets.</p>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <div className="flex items-center">
                  <div className="bg-purple-600/20 p-3 rounded-lg">
                    <i className="fas fa-headset text-purple-600 text-xl"></i>
                  </div>
                  <h3 className="ml-4 text-lg font-semibold">24/7 Elite Support</h3>
                </div>
                <p className="mt-4 text-zinc-400">Round-the-clock assistance from our experienced technical specialists.</p>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <div className="flex items-center">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <i className="fas fa-bolt text-primary text-xl"></i>
                  </div>
                  <h3 className="ml-4 text-lg font-semibold">Maximum Performance</h3>
                </div>
                <p className="mt-4 text-zinc-400">Optimized solutions that don't compromise on system performance.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="bg-zinc-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">Our Digital Services</h2>
              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                Cutting-edge solutions tailored to your digital security and privacy needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  image={service.image}
                  title={service.title}
                  tag={service.tag}
                  description={service.description}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* HWID Spoofer Section */}
        <section id="hwid-spoofer" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-bold">Fynze Permanent HWID Spoofer</h2>
                <p className="mt-4 text-zinc-400">
                  Our cutting-edge HWID Spoofer provides unparalleled protection against hardware bans and tracking.
                  Developed by security experts, it's the ultimate solution for maintaining privacy and avoiding unfair restrictions.
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <i className="fas fa-check-circle text-emerald-500 mt-1"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium">Resolves VPN Kicks</h3>
                      <p className="text-zinc-400">Our technology prevents VPN detection and associated kicks from games and services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <i className="fas fa-check-circle text-emerald-500 mt-1"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium">Bypasses HWID Bans</h3>
                      <p className="text-zinc-400">Complete hardware ID masking to evade bans across all major platforms and services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <i className="fas fa-check-circle text-emerald-500 mt-1"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium">Truly Permanent Solution</h3>
                      <p className="text-zinc-400">Unlike competitors, our spoofer maintains changes even through system updates</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a href="#" className="px-8 py-3 rounded-md bg-primary text-white font-medium shadow-[0_0_15px_rgba(47,180,255,0.5)] hover:bg-primary/90 transition">
                    Get Fynze HWID Spoofer
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2 mt-10 lg:mt-0">
                <div className="bg-zinc-900 rounded-xl p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="HWID Spoofer Dashboard" 
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Why Our HWID Spoofer Is Superior</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400">Permanent Changes</span>
                        <div className="w-1/2 bg-zinc-950 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400">Undetectable</span>
                        <div className="w-1/2 bg-zinc-950 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{width: '98%'}}></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400">Performance Impact</span>
                        <div className="w-1/2 bg-zinc-950 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{width: '5%'}}></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400">Compatibility</span>
                        <div className="w-1/2 bg-zinc-950 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-16 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">Advanced Feature Set</h2>
              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                Our comprehensive HWID spoofing solution provides multiple layers of protection
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
        
        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="mt-4 text-zinc-400">
                Get answers to the most common questions about our services
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FaqItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">What Our Clients Say</h2>
              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                Hear from users who have experienced the Fynze difference
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  rating={testimonial.rating}
                  text={testimonial.text}
                  author={testimonial.author}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Get the best, get Fynze</h3>
              <p className="mt-4 text-zinc-400 max-w-3xl mx-auto">
                Join thousands of satisfied customers who trust Fynze for their digital security needs.
                Our advanced solutions and dedicated support team ensure you get the best experience possible.
              </p>
              <div className="mt-8">
                <a href="#" className="px-8 py-3 rounded-md bg-primary text-white font-medium shadow-[0_0_15px_rgba(47,180,255,0.5)] hover:bg-primary/90 transition">
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 bg-zinc-950 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 bg-primary opacity-10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 bg-purple-600 opacity-10 rounded-full"></div>
              
              <div className="relative z-10 md:flex md:items-center md:justify-between">
                <div className="md:w-3/5">
                  <h2 className="text-2xl md:text-3xl font-bold">Ready to secure your digital presence?</h2>
                  <p className="mt-3 text-zinc-400">
                    Fynze offers the most advanced HWID spoofing technology with 24/7 elite support.
                    Join thousands of satisfied customers today.
                  </p>
                </div>
                <div className="mt-8 md:mt-0 md:ml-6">
                  <a href="#" className="inline-block w-full md:w-auto px-8 py-3 rounded-md bg-primary text-white font-medium shadow-[0_0_15px_rgba(47,180,255,0.5)] hover:bg-primary/90 transition text-center">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-zinc-900 border-t border-zinc-800 pt-12 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="md:col-span-1">
                <div className="text-primary font-bold text-2xl tracking-tight font-mono mb-4">Fynze</div>
                <p className="text-zinc-400 text-sm">
                  Advanced digital security solutions with 24/7 elite support. Protecting your digital identity since 2018.
                </p>
                <div className="mt-6 flex space-x-4">
                  <a href="#" className="text-zinc-400 hover:text-primary">
                    <i className="fab fa-discord"></i>
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-primary">
                    <i className="fab fa-telegram"></i>
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-primary">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-primary">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-4">Products</h3>
                <ul className="space-y-3">
                  <li><a href="#hwid-spoofer" className="text-zinc-400 hover:text-primary">HWID Spoofer</a></li>
                  <li><a href="#" className="text-zinc-400 hover:text-primary">Secure VPN</a></li>
                  <li><a href="#" className="text-zinc-400 hover:text-primary">Account Recovery</a></li>
                  <li><a href="#" className="text-zinc-400 hover:text-primary">Privacy Suite</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-4">Support</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-zinc-400 hover:text-primary">Help Center</a></li>
                  <li><a href="#" className="text-zinc-400 hover:text-primary">Contact Support</a></li>
                  <li><a href="#faq" className="text-zinc-400 hover:text-primary">FAQ</a></li>
                  <li><a href="#" className="text-zinc-400 hover:text-primary">System Status</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-4">Legal</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-zinc-400 hover:text-primary">Privacy Policy</a></li>
                  <li><a href="#" className="text-zinc-400 hover:text-primary">Terms of Service</a></li>
                  <li><a href="#" className="text-zinc-400 hover:text-primary">Refund Policy</a></li>
                  <li><a href="#" className="text-zinc-400 hover:text-primary">Acceptable Use</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-zinc-400 text-sm">&copy; {new Date().getFullYear()} Fynze Services. All rights reserved.</p>
              <p className="text-zinc-400 text-sm mt-4 md:mt-0">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent font-medium">Get the best, get Fynze</span>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
