interface GameGridSkeletonProps {
  count: number;
}

export function GameGridSkeleton({ count }: GameGridSkeletonProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden animate-pulse"
        >
          <div className="h-44 bg-slate-800" />
          <div className="p-4 space-y-2">
            <div className="h-3 bg-slate-700 rounded w-3/4" />
            <div className="h-3 bg-slate-800 rounded w-1/2" />
            <div className="h-3 bg-slate-800 rounded w-full mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
