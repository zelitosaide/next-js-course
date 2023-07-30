export async function getArtist(slug) {
  const res = await fetch(`http://localhost:3001/artists/${slug}`);
  return res.json();
}

export async function getArtistAlbums(slug) {
  const res = await fetch(`http://localhost:3001/artists/${slug}/albums`);
  return res.json();
}