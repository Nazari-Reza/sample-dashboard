export interface RawgGenre {
  id: number;
  name: string;
  slug: string;
}
export interface RawgPlatformInfo {
  platform: { id: number; name: string; slug: string };
}

export interface RawgTag {
  id: number;
  name: string;
  slug: string;
  language: string;
}

export interface RawgRating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface RawgGame {
  id: number;
  name: string;
  slug: string;
  background_image: string | null;
  released: string | null;
  rating: number;
  rating_top: number;
  ratings_count: number;
  metacritic: number | null;
  playtime: number;
  genres: RawgGenre[];
  platforms: RawgPlatformInfo[] | null;
  tags: RawgTag[];
  ratings: RawgRating[];
  esrb_rating: { id: number; name: string } | null;
}

export interface RawgGamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: RawgGame[];
}
export interface RawgGameDetail extends RawgGame {
  description_raw: string;
  website: string;
  developers: { id: number; name: string }[];
  publishers: { id: number; name: string }[];
  stores: { store: { id: number; name: string; domain: string } }[];
  parent_platforms: RawgPlatformInfo[];
  achievements_count: number;
  screenshots_count: number;
}

export interface RawgFilterOption {
  id: number;
  name: string;
  slug: string;
  games_count?: number;
}

export interface RawgFilterResponse {
  count: number;
  results: RawgFilterOption[];
}
export interface GamesFilters {
  search: string;
  genres: RawgFilterOption[];
  platforms: RawgFilterOption[];
  tags: RawgFilterOption[];
  ordering: string;
}
