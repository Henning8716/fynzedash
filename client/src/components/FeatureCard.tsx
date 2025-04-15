import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "reveal-element reveal-scale",
      "relative p-6 rounded-xl overflow-hidden",
      "gradient-border blur-behind",
      "transition-all duration-300 hover:scale-[1.02]",
      "flex flex-col items-start gap-4",
      className
    )}>
      <div className="p-3 rounded-lg bg-slate-900/50 gradient-border-hover pulse-glow">
        <span className="text-2xl">{icon}</span>
      </div>
      
      <h3 className="text-xl font-bold gradient-text-blue-cyan">{title}</h3>
      
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  );
}