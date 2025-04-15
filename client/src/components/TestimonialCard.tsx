import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  rating: number;
  text: string;
  author: {
    initials: string;
    name: string;
    color: string;
  };
  className?: string;
}

export default function TestimonialCard({ rating, text, author, className }: TestimonialCardProps) {
  return (
    <div className={cn(
      "reveal-element reveal-scale",
      "rounded-xl p-6 gradient-border",
      "transition-all duration-300 hover:scale-[1.02]",
      className
    )}>
      {/* Star Rating */}
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={cn(
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600",
              "transition-all duration-300"
            )}
          />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-slate-200 mb-4 italic">"{text}"</p>
      
      {/* Author */}
      <div className="flex items-center gap-3 mt-4">
        <div 
          className={cn(
            "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold",
            author.color
          )}
        >
          {author.initials}
        </div>
        <div className="text-sm text-slate-300">{author.name}</div>
      </div>
    </div>
  );
}