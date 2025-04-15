interface ServiceCardProps {
  image: string;
  title: string;
  tag: {
    text: string;
    color: string;
  };
  description: string;
  link: string;
}

export default function ServiceCard({ image, title, tag, description, link }: ServiceCardProps) {
  return (
    <div className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 transition-transform hover:scale-[1.02] relative group">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${title} Visualization`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className={`bg-${tag.color} text-white text-xs px-2 py-1 rounded-full`}>
            {tag.text}
          </span>
        </div>
        <p className="text-zinc-400">
          {description}
        </p>
        <div className="mt-5">
          <a href={link} className="text-primary flex items-center hover:text-primary/80">
            Learn more <i className="fas fa-arrow-right ml-2 text-xs"></i>
          </a>
        </div>
      </div>
      <div className="absolute inset-0 border border-primary/0 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:border-primary/50"></div>
    </div>
  );
}
