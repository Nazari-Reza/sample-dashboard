import { RawgFilterOption } from "../api/rawg/types";

export const ITEM_HEIGHT = 36;
export const MAX_ROWS = 3;
export const VIRTUAL_THRESH = 30;

export const isSelected = (value: RawgFilterOption[], item: RawgFilterOption) =>
  value.some((v) => v.id === item.id);
