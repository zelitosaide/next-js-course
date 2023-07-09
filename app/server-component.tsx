export default async function ServerComponent() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await res.json();

  return <h1>From server component: {todo.title}</h1>;
}