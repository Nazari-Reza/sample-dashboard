import { FixedSizeList } from "react-window";
import { RawgFilterOption } from "../../../../api/rawg/types";
import { SelectGroup } from "./types";
import { OptionRow } from "./OptionRow";
import {
  isSelected,
  ITEM_HEIGHT,
  MAX_ROWS,
  VIRTUAL_THRESH,
} from "../../../../utils/utils";

interface OptionsListProps {
  query: string;
  filtered: RawgFilterOption[];
  displayGroups: SelectGroup[];
  value: RawgFilterOption[];
  onToggle: (item: RawgFilterOption) => void;
}

export function OptionsList({
  query,
  filtered,
  displayGroups,
  value,
  onToggle,
}: OptionsListProps) {
  const useVirtual = filtered.length > VIRTUAL_THRESH;
  const listHeight = Math.min(filtered.length, MAX_ROWS) * ITEM_HEIGHT;

  if (filtered.length === 0) {
    return (
      <div className="px-3 py-6 text-center text-sm text-slate-500">
        No results for "{query}"
      </div>
    );
  }

  if (useVirtual) {
    return (
      <FixedSizeList
        height={listHeight}
        itemCount={filtered.length}
        itemSize={ITEM_HEIGHT}
        width="100%"
      >
        {({ index, style }) => (
          <OptionRow
            key={filtered[index].id}
            item={filtered[index]}
            selected={isSelected(value, filtered[index])}
            onToggle={onToggle}
            style={style}
          />
        )}
      </FixedSizeList>
    );
  }

  return (
    <div
      className="overflow-y-auto"
      style={{ maxHeight: `${MAX_ROWS * ITEM_HEIGHT}px` }}
    >
      {displayGroups.map((group) => (
        <div key={group.label || "__default"}>
          {group.label && (
            <div
              className="
                px-3 py-1.5 sticky top-0 z-10
                text-[10px] font-bold uppercase tracking-widest
                text-slate-500 bg-slate-900/80 backdrop-blur-sm
                border-b border-slate-700/40
              "
            >
              {group.label}
            </div>
          )}
          {group.items.map((item) => (
            <OptionRow
              key={item.id}
              item={item}
              selected={isSelected(value, item)}
              onToggle={onToggle}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
