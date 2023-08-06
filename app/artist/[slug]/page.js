import { Suspense } from "react";

import Albums from "./albums";
import { getArtist, getArtistAlbums, getArtistPlaylists, preload } from "../../utils/api";
import { Artist } from "./artist";

async function Playlists({ artistID }) {
  // Wait for the playlists
  const playlists = await getArtistPlaylists(artistID);

  return (
    <>
      <h1>Playlists:</h1>
      <ul>
        {playlists.map(function(playlist) {
          return (
            <li key={playlist.id}>{playlist.name}</li>
            );
          })}
      </ul>
    </>
  );
}

export default async function Page({ params: { slug }}) {
  // Initiate both requests in parallel
  // const artistData = getArtist(slug);
  // const albumsData = getArtistAlbums(slug);

  // Wait for the promises to resolve
  // const [artist, albums] = await Promise.all([artistData, albumsData]);

  // Wait for the artist's promise to resolve first
  // const artist = await artistData

  // const artist = await getArtist(slug);

  // starting loading item data
  preload(slug);

  // perform another asynchronous task
  const albums = await getArtistAlbums(slug);

  return (
    <>
      {!!albums ? (
        <>
          <Artist slug={slug} />
          <hr />
          <Albums list={albums} />
        </>
      ) : null}
      
      {/* <h1>Name: {artist.name}</h1> */}
      {/* Send the artist information first, and wrap albums in a suspense boundary */}
      {/* <hr /> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Albums list={albums} />
        <Albums promise={albumsData} />
      </Suspense> */}
      {/* <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Playlists artistID={slug} />
      </Suspense> */}
    </>
  );
}