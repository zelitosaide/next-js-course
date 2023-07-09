import Link from "next/link";

export default function PostList({ posts } : any) {
  return (
    <ul className="w-36 bg-green-950 p-2">
      {posts.map((post : any) => (
        <li key={post.id}>
          <Link 
            href={`/blog/${post.id}`}
            className="text-sm bg-slate-500 m-1"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}