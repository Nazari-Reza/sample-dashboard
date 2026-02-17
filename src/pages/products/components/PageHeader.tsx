interface PageHeaderProps {
  total: number;
  activeCount: number;
  onResetFilters: () => void;
}

export function PageHeader({
  total,
  activeCount,
  onResetFilters,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h2 className="text-xl font-semibold text-white">Games</h2>
        <p className="text-sm text-slate-400 mt-0.5">
          {total > 0 ? `${total.toLocaleString()} games available` : "Loading…"}
          {activeCount > 0 && (
            <span className="ml-2 text-indigo-400 font-medium">
              · {activeCount} filter{activeCount > 1 ? "s" : ""} active
            </span>
          )}
        </p>
      </div>

      {activeCount > 0 && (
        <button
          onClick={onResetFilters}
          className="text-xs text-red-400 hover:text-red-300 px-3 py-1.5 rounded-lg border border-red-500/20 hover:border-red-500/40 transition"
        >
          ✕ Clear all filters
        </button>
      )}
    </div>
  );
}
