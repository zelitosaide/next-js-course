async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const post = await getPost();

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(post)}</pre>
    </div>
  );
}