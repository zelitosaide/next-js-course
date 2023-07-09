export default async function Logo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await response.json();

  console.log(todo);
  return <h1 className="inline-block">Logo: {todo.title}</h1>;
}