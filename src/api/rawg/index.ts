import axios from "axios";
import {
  GamesFilters,
  RawgFilterResponse,
  RawgGameDetail,
  RawgGamesResponse,
} from "./types";

const RAWG_KEY = "7c44f30d6b4f41849f6967bbf3999949";
const rawg = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: RAWG_KEY },
});

export const apiGetGames = (
  page: number,
  pageSize: number,
  filters: Partial<GamesFilters>,
) => {
  const params: Record<string, string | number | undefined> = {
    page,
    page_size: pageSize,
    ordering: filters.ordering ?? "-rating",
    search: filters.search || undefined,
    genres: filters.genres?.map((g) => g.slug).join(",") || undefined,
    platforms: filters.platforms?.map((p) => p.id).join(",") || undefined,
    tags: filters.tags?.map((t) => t.slug).join(",") || undefined,
  };

  Object.keys(params).forEach(
    (k) => params[k] === undefined && delete params[k],
  );

  return rawg.get<RawgGamesResponse>("/games", { params });
};

export const apiGetGameDetail = (id: number | string) =>
  rawg.get<RawgGameDetail>(`/games/${id}`);

export const apiGetGenres = () =>
  rawg.get<RawgFilterResponse>("/genres?page_size=40");
export const apiGetPlatforms = () =>
  rawg.get<RawgFilterResponse>("/platforms?page_size=40");
export const apiGetTags = () =>
  rawg.get<RawgFilterResponse>("/tags?page_size=80");
