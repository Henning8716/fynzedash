import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Example service data - since this is a dashboard with static content,
// we can serve the data from a simple API endpoint
const services = [
  {
    id: 1,
    name: "Permanent HWID Spoofer",
    description: "Our advanced HWID spoofing technology prevents bans and ensures your privacy online.",
    price: 59.99,
    category: "premium",
    features: [
      "Resolves VPN Kicks",
      "Bypasses HWID Bans",
      "Truly Permanent Solution",
      "Regular Updates"
    ],
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Fynze Secure VPN",
    description: "Enterprise-grade encryption with optimized routing for gaming and streaming.",
    price: 14.99,
    category: "popular",
    features: [
      "No Logs Policy",
      "Low Latency Connections",
      "Global Server Network",
      "Unlimited Bandwidth"
    ],
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Account Recovery",
    description: "Professional assistance to recover and secure compromised accounts.",
    price: 29.99,
    category: "standard",
    features: [
      "Quick Recovery Process",
      "Security Assessment",
      "Improved Account Protection",
      "Personalized Support"
    ],
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Marcus G.",
    rating: 5,
    text: "After trying multiple HWID spoofers with no success, Fynze's solution finally worked for me. I can now use my VPN without getting kicked. Their support team was incredibly helpful.",
    date: "2023-05-15"
  },
  {
    id: 2,
    name: "Jordan T.",
    rating: 5,
    text: "Fynze's Permanent HWID Spoofer is truly permanent. I've gone through several Windows updates and it's still working perfectly. Best investment for my online privacy.",
    date: "2023-06-22"
  },
  {
    id: 3,
    name: "Alex L.",
    rating: 4.5,
    text: "Their 24/7 support team is the real deal. Had a technical issue at 3 AM and they helped me resolve it within minutes. The product works as advertised and hasn't affected my system performance.",
    date: "2023-04-03"
  }
];

const faqs = [
  {
    id: 1,
    question: "What is an HWID Spoofer and why do I need it?",
    answer: "An HWID (Hardware ID) Spoofer is a tool that changes how your computer's hardware is identified by software and online services. You might need it if you've received a hardware ban from a service or game, want to protect your privacy, or need to prevent VPN detection that results in kicks or restrictions."
  },
  {
    id: 2,
    question: "How does Fynze's HWID Spoofer resolve VPN kicks?",
    answer: "Many services detect VPNs by analyzing hardware identifiers alongside network data. Our HWID Spoofer modifies these identifiers, making it impossible for services to correlate your hardware profile with VPN usage patterns. This prevents the automatic VPN detection that often leads to kicks or restrictions."
  },
  {
    id: 3,
    question: "Is using an HWID Spoofer legal?",
    answer: "HWID Spoofers themselves are legal tools for privacy protection. However, their use may violate the terms of service of certain platforms or games. Our software is designed for legitimate privacy enhancement and protection against unfair bans. We advise users to review the terms of service for any platform they use with our tools."
  },
  {
    id: 4,
    question: "What makes Fynze's HWID Spoofer \"permanent\"?",
    answer: "Unlike temporary solutions that need to be reapplied after each reboot, our HWID Spoofer makes permanent modifications to how your system reports hardware identifiers. These changes persist through system updates and reboots. Additionally, we provide lifetime updates to ensure continued compatibility with evolving detection methods."
  },
  {
    id: 5,
    question: "Will the HWID Spoofer affect my system performance?",
    answer: "No. Fynze's HWID Spoofer is engineered to have minimal impact on system performance. Unlike competitors that run resource-intensive processes in the background, our solution works by modifying system identifiers directly, requiring no continuous background processes. Most users report zero noticeable performance difference."
  }
];

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.get('/api/services', (req, res) => {
    res.json(services);
  });

  app.get('/api/services/:id', (req, res) => {
    const service = services.find(s => s.id === parseInt(req.params.id));
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  });

  app.get('/api/testimonials', (req, res) => {
    res.json(testimonials);
  });

  app.get('/api/faqs', (req, res) => {
    res.json(faqs);
  });

  const httpServer = createServer(app);

  return httpServer;
}
