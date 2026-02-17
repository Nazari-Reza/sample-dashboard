interface SelectionToolbarProps {
  filteredCount: number;
  selectedCount: number;
  allSelected: boolean;
  onSelectAll: (e: React.MouseEvent) => void;
  onSelectNone: (e: React.MouseEvent) => void;
}

export function SelectionToolbar({
  filteredCount,
  selectedCount,
  allSelected,
  onSelectAll,
  onSelectNone,
}: SelectionToolbarProps) {
  return (
    <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-700/50 bg-slate-900/40">
      <span className="text-xs text-slate-500">
        {filteredCount} option{filteredCount !== 1 ? "s" : ""}
        {selectedCount > 0 && (
          <span className="text-indigo-400 ml-1">· {selectedCount} selected</span>
        )}
      </span>
      <div className="flex gap-2">
        <button
          onMouseDown={onSelectAll}
          disabled={allSelected || filteredCount === 0}
          className="text-xs text-indigo-400 hover:text-indigo-300 disabled:opacity-30 disabled:cursor-default transition"
        >
          All
        </button>
        <span className="text-slate-600 text-xs">|</span>
        <button
          onMouseDown={onSelectNone}
          disabled={selectedCount === 0}
          className="text-xs text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-default transition"
        >
          None
        </button>
      </div>
    </div>
  );
}
