interface GameDescriptionProps {
  description: string;
}

export function GameDescription({ description }: GameDescriptionProps) {
  if (!description) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-base font-semibold text-white mb-4">About</h2>
      <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line line-clamp-6 hover:line-clamp-none transition-all cursor-pointer">
        {description}
      </p>
    </div>
  );
}
