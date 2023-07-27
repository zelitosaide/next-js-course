export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(res) { return res.json(); });

  return posts.map(function(post) {
    return {
      slug: post.id.toString()
    };
  });
}

export default async function Page({ params }) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
    .then(function(res) { return res.json(); });

  // throw new Error("Intentionaly :)");

  return (
    <div>
      My Post: {JSON.stringify(params)}
      <h1>Title: {post.title}</h1>
    </div>
  );
}