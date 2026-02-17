import { KeyboardEvent } from "react";
import { MultiSelectProps } from "./types";
import { useMultiSelect } from "./useMultiSelect";
import { DropdownSearch } from "./DropdownSearch";
import { SelectionToolbar } from "./SelectionToolbar";
import { OptionsList } from "./OptionsList";

export default function MultiSelect({
  label,
  placeholder = "Select…",
  options,
  groups,
  value,
  onChange,
  disabled = false,
}: MultiSelectProps) {
  const {
    open,
    setOpen,
    query,
    setQuery,
    containerRef,
    filtered,
    displayGroups,
    toggle,
    selectAll,
    selectNone,
    allSelected,
    closeDropdown,
  } = useMultiSelect({ options, groups, value, onChange });

  const buttonLabel =
    value.length === 0
      ? placeholder
      : value.length === 1
        ? value[0].name
        : `${value[0].name}  +${value.length - 1}`;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeDropdown();
  };

  return (
    <div ref={containerRef} className="relative" onKeyDown={handleKeyDown}>
      <p className="absolute -top-5 left-0 text-[10px] font-semibold uppercase tracking-wider text-slate-500 pointer-events-none">
        {label}
      </p>

      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`
          w-full flex items-center justify-between gap-2
          px-3 py-2 rounded-xl text-sm text-left
          bg-slate-800 border transition-all
          focus:outline-none focus:ring-2 focus:ring-indigo-500/60
          ${
            disabled
              ? "opacity-40 cursor-not-allowed"
              : "cursor-pointer hover:border-slate-500"
          }
          ${
            open
              ? "border-indigo-500/70 ring-2 ring-indigo-500/20"
              : value.length > 0
                ? "border-indigo-500/40 text-white"
                : "border-slate-700 text-slate-400"
          }
        `}
      >
        <span className="truncate flex-1 text-sm">{buttonLabel}</span>

        <div className="flex items-center gap-1.5 shrink-0">
          {value.length > 0 && (
            <span className="bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center leading-none">
              {value.length}
            </span>
          )}
          <svg
            className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {open && (
        <div
          role="listbox"
          aria-multiselectable="true"
          aria-label={label}
          className="
            absolute z-50 mt-1 w-full min-w-[220px]
            bg-slate-800 border border-slate-700 rounded-xl
            shadow-2xl shadow-black/50 overflow-hidden
          "
          style={{ animation: "dropdownIn 100ms ease-out" }}
        >
          <DropdownSearch label={label} query={query} onChange={setQuery} />

          <SelectionToolbar
            filteredCount={filtered.length}
            selectedCount={value.length}
            allSelected={allSelected}
            onSelectAll={selectAll}
            onSelectNone={selectNone}
          />

          <OptionsList
            query={query}
            filtered={filtered}
            displayGroups={displayGroups}
            value={value}
            onToggle={toggle}
          />
        </div>
      )}

      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateY(-4px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </div>
  );
}
