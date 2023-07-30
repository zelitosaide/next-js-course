export default function Albums({ list }) {
  return (
    <ul>
      {list.map(function(album) {
        return (
          <li key={album.id}>
            <h2>Title: {album.title}</h2>
            <p>Year: {album.release_year}</p>
          </li>
        );
      })}
    </ul>
  );
}