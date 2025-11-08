// src/utils/paths.ts
export const base = import.meta.env.BASE_URL || "/";

export const url = (p = "/") =>
  `${base}${String(p).replace(/^\/+/, "")}`;

export const enc = (p = "/") =>
  url(p).replace(/ /g, "%20");
