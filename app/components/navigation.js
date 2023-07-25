"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const posts = [
  { id: 100, title: "First post" },
  { id: 101, title: "Second post" },
  { id: 102, title: "Third post" },
  { id: 103, title: "Fourth post" },
  { id: 104, title: "Fifth post" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <ul>
      {posts.map(function(post) {
        const segments = pathname.split("/");
        const isActive = segments[segments.length - 1] == post.id;

        return (
          <Link 
            className={`block ${isActive ? "underline" : ""}`}
            key={post.id} 
            href={`/posts/${post.id}`}
          >
            {post.title}
          </Link>
        );
      })}
    </ul>
  );
}