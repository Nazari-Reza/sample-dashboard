import { RawgFilterOption } from "../../../../api/rawg/types";

export interface SelectGroup {
  label: string;
  items: RawgFilterOption[];
}

export interface MultiSelectProps {
  label: string;
  placeholder?: string;
  options: RawgFilterOption[];
  groups?: SelectGroup[];
  value: RawgFilterOption[];
  onChange: (val: RawgFilterOption[]) => void;
  disabled?: boolean;
}

export interface OptionRowProps {
  item: RawgFilterOption;
  selected: boolean;
  onToggle: (item: RawgFilterOption) => void;
  style?: React.CSSProperties;
}
