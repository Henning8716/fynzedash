interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
        <i className={`fas ${icon} text-primary`}></i>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}
