export async function getArtist(slug) {
  const res = await fetch(`http://localhost:3001/artists/${slug}`);
  return res.json();
}

export async function getArtistAlbums(slug) {
  const res = await fetch(`http://localhost:3001/artists/${slug}/albums`);
  return res.json();
}

export async function getArtistPlaylists(slug) {
  const res = await fetch(`http://localhost:3001/artists/${slug}/playlists`);
  return res.json();
}

export async function getDate() {
  const res = await fetch("http://localhost:3001", {
    cache: "no-cache"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}