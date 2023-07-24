export default async function SearverComponent() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const post = await response.json();

  return (
    <pre>
      {JSON.stringify(post)}
    </pre>
  );
}