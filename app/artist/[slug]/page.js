import { Suspense } from "react";
import Albums from "./albums";
import { getArtist, getArtistAlbums } from "../api";

export default async function Page({ params: { slug }}) {
  // Initiate both requests in parallel
  const artistData = getArtist(slug);
  const albumsData = getArtistAlbums(slug);

  // Wait for the promises to resolve
  // const [artist, albums] = await Promise.all([artistData, albumsData]);

  // Wait for the artist's promise to resolve first
  const artist = await artistData

  return (
    <>
      <h1>Name: {artist.name}</h1>
      {/* Send the artist information first, and wrap albums in a suspense boundary */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Albums list={albums} /> */}
        <Albums promise={albumsData} />
      </Suspense>
    </>
  );
}