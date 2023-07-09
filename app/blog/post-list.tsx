"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PostList({ posts } : any) {
  const pathname = usePathname();

  return (
    <ul className="w-48 shrink-0 bg-green-950 p-2">
      {posts.map((post : any) => {
        const isActive = pathname.split("/")[pathname.split("/").length - 1] == post.id;

        return (
          <li key={post.id} className="m-2">
            <Link 
              href={`/blog/${post.id}`}
              className={`text-sm bg-slate-500 p-1 ${isActive ? "text-red-400" : ""}`}
            >
              {post.title.slice(0, 16)}...
            </Link>
          </li>
        );
      })}
    </ul>
  );
}