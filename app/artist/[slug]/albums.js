export default function Albums({ list }) {
// export default async function Albums({ promise }) {
//   const albums = await promise;

  return (
    <>
      <h1>Albums:</h1>
      <ul>
        {/* {albums.map(function(album) { */}
        {list.map(function(album) {
          return (
            <li key={album.id}>
              <h2>Title: {album.title}</h2>
              <p>Year: {album.release_year}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}