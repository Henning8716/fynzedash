interface TestimonialCardProps {
  rating: number;
  text: string;
  author: {
    initials: string;
    name: string;
    color: string;
  };
}

export default function TestimonialCard({ rating, text, author }: TestimonialCardProps) {
  return (
    <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 group hover:border-primary/50 transition-colors">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`fas ${i < rating ? 'fa-star' : i + 0.5 === rating ? 'fa-star-half-alt' : 'fa-star'} text-primary`}
          ></i>
        ))}
      </div>
      <p className="text-zinc-400 italic mb-6">
        {text}
      </p>
      <div className="flex items-center">
        <div className={`h-10 w-10 rounded-full bg-${author.color} flex items-center justify-center`}>
          <span className="font-bold text-white">{author.initials}</span>
        </div>
        <div className="ml-3">
          <h4 className="font-medium">{author.name}</h4>
          <p className="text-sm text-zinc-400">Verified Customer</p>
        </div>
      </div>
    </div>
  );
}
