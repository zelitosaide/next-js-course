import PostList from "./post-list";

export default async function BlogLayout({ 
  children 
} : {
  children: React.ReactNode
}) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <PostList posts={posts} />
      {children}
    </div>
  );
}