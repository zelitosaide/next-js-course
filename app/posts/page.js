import Link from "next/link";

const posts = [
  { id: 100, title: "First post" },
  { id: 101, title: "Second post" },
  { id: 102, title: "Third post" },
  { id: 103, title: "Fourth post" },
  { id: 104, title: "Fifth post" },
];

export default function Page() {

  return (
    <div>
      <ul>
        {posts.map(function(post) {
          return (
            <Link className="block" key={post.id} href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}