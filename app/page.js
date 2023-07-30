async function getDate() {
  const res = await fetch("http://localhost:3001", {
    cache: "no-cache"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.text();
}

export default async function Page() {
  const date = await getDate();

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(date)}</pre>
    </div>
  );
}