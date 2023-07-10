import PostList from "./post-list";

export default async function BlogLayout({ 
  children 
} : {
  children: React.ReactNode
}) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <>
      <h1 className="bg-orange-500">Blog Layout</h1>
      <div className="flex">
        <PostList posts={posts} />
        {children}
      </div>
    </>
  );
}