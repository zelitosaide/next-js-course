import { db } from "../api/database";

import Link from "next/link";

const posts = [
  { id: 100, title: "First post" },
  { id: 101, title: "Second post" },
  { id: 102, title: "Third post" },
  { id: 103, title: "Fourth post" },
  { id: 104, title: "Fifth post" },
];

export default async function PostsLayout({ children }) {
  const result = await db.query("SELECT NOW();");
  
  return (
    <div>
      <h1>Posts Layout</h1>
      <pre>{JSON.stringify(result)}</pre>
      <hr className="mt-2 mb-2" />

      <div className="flex">
        <ul>
          {posts.map(function(post) {
            return (
              <Link className="block" key={post.id} href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            );
          })}
        </ul>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}