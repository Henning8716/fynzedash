import { Link } from "wouter";

export default function Sidebar() {
  const navItems = [
    { href: "#", icon: "fa-tachometer-alt", text: "Dashboard" },
    { href: "#services", icon: "fa-server", text: "Services" },
    { href: "#hwid-spoofer", icon: "fa-shield-alt", text: "HWID Spoofer", active: true },
    { href: "#features", icon: "fa-list-check", text: "Features" },
    { href: "#faq", icon: "fa-question-circle", text: "FAQ" },
    { href: "#testimonials", icon: "fa-quote-right", text: "Testimonials" }
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-zinc-900 border-r border-zinc-800 z-10 hidden lg:block">
      <div className="flex items-center justify-center h-16 border-b border-zinc-800">
        <div className="text-primary font-bold text-2xl tracking-tight font-mono">Fynze</div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-4rem)]">
        <ul className="pt-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className={`flex items-center px-4 py-3 ${item.active ? "text-primary" : "text-zinc-300"} hover:bg-zinc-800`}
              >
                <i className={`fas ${item.icon} w-6`}></i>
                <span className="ml-2">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
        
        <div className="px-4 py-6 mt-6 border-t border-zinc-800">
          <div className="bg-zinc-950 rounded-lg p-4">
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="ml-2 text-sm text-zinc-400">Elite Support</span>
            </div>
            <p className="text-xs text-zinc-400 mt-2">24/7 Elite support available for all services</p>
            <button className="mt-3 w-full py-1.5 rounded bg-primary text-white text-xs hover:bg-primary/90 transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
