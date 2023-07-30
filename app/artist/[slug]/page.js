import Albums from "./albums";

async function getArtist(slug) {
  const res = await fetch(`http://localhost:3001/artists/${slug}`);
  return res.json();
}

async function getArtistAlbums(slug) {
  const res = await fetch(`http://localhost:3001/artists/${slug}/albums`);
  return res.json();
}

export default async function Page({ params: { slug }}) {
  // Initiate both requests in parallel
  const artistData = getArtist(slug);
  const albumsData = getArtistAlbums(slug);

  // Wait for the promises to resolve
  const [artist, albums] = await Promise.all([artistData, albumsData]);

  return (
    <>
      <h1>Name: {artist.name}</h1>
      <Albums list={albums} />
    </>
  );
}