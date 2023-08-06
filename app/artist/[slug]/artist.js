import { getArtist } from "@/app/utils/api";

export function preload(slug) {
  void getArtist(slug);
}

export async function Artist({ slug }) {
  const artist = await getArtist(slug);

  return <h1>Name: {artist.name}</h1>;
}