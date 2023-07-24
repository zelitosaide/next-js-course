export default async function SearverComponent() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(response);
  
  return (
    <pre>
      {}
    </pre>
  );
}