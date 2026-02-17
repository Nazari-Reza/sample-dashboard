export function GameDetailSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-72 bg-slate-800 rounded-2xl" />
      <div className="h-8 bg-slate-800 rounded w-1/3" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-20 bg-slate-800 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
