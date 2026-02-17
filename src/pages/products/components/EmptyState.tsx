interface EmptyStateProps {
  onResetFilters: () => void;
}

export function EmptyState({ onResetFilters }: EmptyStateProps) {
  return (
    <div className="text-center py-20">
      <p className="text-4xl mb-3">🎮</p>
      <p className="text-slate-400">No games match your filters.</p>
      <button
        onClick={onResetFilters}
        className="mt-3 text-indigo-400 hover:text-indigo-300 text-sm underline"
      >
        Reset filters
      </button>
    </div>
  );
}
