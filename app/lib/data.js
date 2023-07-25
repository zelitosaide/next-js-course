export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    headers: {
      authorization: process.env.API_KEY,
    },
  });
 
  return res.json();
}