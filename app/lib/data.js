export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/2", {
    headers: {
      authorization: process.env.API_KEY,
    },
  });
  const post = await res.json();
  return { data: post, key: process.env.API_KEY };
}