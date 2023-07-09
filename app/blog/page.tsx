import PostList from "./post-list";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <>
      <h2>Blog</h2>
      <PostList posts={posts} />
    </>
  );
}