import Post from "./post";

export default async function SearverComponent() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const post = await response.json();

  function console() {
    console.log(post);
  }

  return (
    <div>
      <Post post={post} console={JSON.stringify(console)} />
    </div>
  );
}