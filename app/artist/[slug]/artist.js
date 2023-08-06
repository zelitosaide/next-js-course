import "server-only";

import { cache } from "react";
// import { getArtist } from "@/app/utils/api";

export function preload(slug) {
  void getArtist(slug);
}

export const getArtist = cache(async function(slug) {
  const res = await fetch(`http://localhost:3001/artists/${slug}`);
  return res.json();
});

export async function Artist({ slug }) {
  const artist = await getArtist(slug);

  return <h1>Name: {artist.name}</h1>;
}