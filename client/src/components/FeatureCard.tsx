import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "reveal-element reveal-scale",
        "relative p-6 rounded-xl overflow-hidden",
        "bg-gradient-to-b from-slate-900/70 to-slate-950/90",
        "border border-slate-800/70 hover:border-blue-600/30",
        "transition-all duration-500 hover:shadow-lg hover:shadow-blue-900/10",
        "group",
        className
      )}
    >
      <div className="mb-5 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center
                     group-hover:bg-blue-500/20 transition-all duration-500">
        <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
      
      <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">{description}</p>
    </div>
  );
}