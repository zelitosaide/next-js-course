import Link from "next/link";

export default function PostList({ posts } : any) {
  return (
    <ul>
      {posts.map((post : any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}