import { useState, useRef, useEffect, useCallback } from "react";
import { RawgFilterOption } from "../../../../api/rawg/types";
import { SelectGroup } from "./types";
import { isSelected } from "../../../../utils/utils";

interface UseMultiSelectOptions {
  options: RawgFilterOption[];
  groups?: SelectGroup[];
  value: RawgFilterOption[];
  onChange: (val: RawgFilterOption[]) => void;
}

export function useMultiSelect({
  options,
  groups,
  value,
  onChange,
}: UseMultiSelectOptions) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const flatOptions: RawgFilterOption[] = groups
    ? groups.flatMap((g) => g.items)
    : options;

  const filtered: RawgFilterOption[] = query
    ? flatOptions.filter((o) =>
        o.name.toLowerCase().includes(query.toLowerCase()),
      )
    : flatOptions;

  const displayGroups: SelectGroup[] = groups
    ? groups
        .map((g) => ({
          label: g.label,
          items: query
            ? g.items.filter((o) =>
                o.name.toLowerCase().includes(query.toLowerCase()),
              )
            : g.items,
        }))
        .filter((g) => g.items.length > 0)
    : [{ label: "", items: filtered }];

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const toggle = useCallback(
    (item: RawgFilterOption) => {
      onChange(
        isSelected(value, item)
          ? value.filter((v) => v.id !== item.id)
          : [...value, item],
      );
    },
    [value, onChange],
  );

  const selectAll = (e: React.MouseEvent) => {
    e.preventDefault();
    const merged = [...value];
    filtered.forEach((item) => {
      if (!isSelected(merged, item)) merged.push(item);
    });
    onChange(merged);
  };

  const selectNone = (e: React.MouseEvent) => {
    e.preventDefault();
    const ids = new Set(filtered.map((i) => i.id));
    onChange(value.filter((v) => !ids.has(v.id)));
  };

  const allSelected =
    filtered.length > 0 && filtered.every((item) => isSelected(value, item));

  const closeDropdown = () => {
    setOpen(false);
    setQuery("");
  };

  return {
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
  };
}
