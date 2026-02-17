import { OptionRowProps } from "./types";

export function OptionRow({ item, selected, onToggle, style }: OptionRowProps) {
  return (
    <div
      role="option"
      aria-selected={selected}
      style={style}
      onMouseDown={(e) => {
        e.preventDefault();
        onToggle(item);
      }}
      className={`
        flex items-center gap-2.5 px-3 h-9 cursor-pointer select-none transition-colors
        ${
          selected
            ? "bg-indigo-600/20 text-indigo-300"
            : "text-slate-300 hover:bg-slate-700/70"
        }
      `}
    >
      <span
        className={`
          w-4 h-4 rounded border flex items-center justify-center
          shrink-0 text-[10px] transition-colors
          ${selected ? "bg-indigo-600 border-indigo-500 text-white" : "border-slate-500"}
        `}
      >
        {selected && "✓"}
      </span>

      <span className="truncate text-sm flex-1">{item.name}</span>

      {item.games_count != null && (
        <span className="text-xs text-slate-500 shrink-0 tabular-nums">
          {item.games_count.toLocaleString()}
        </span>
      )}
    </div>
  );
}
