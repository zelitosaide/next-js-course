export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/2", {
    headers: {
      authorization: process.env.API_KEY,
    },
  });
  const post = await res.json();
  return { 
    data: post, 
    key: process.env.API_KEY, 
    public_key: process.env.NEXT_PUBLIC_API_KEY 
  };
}