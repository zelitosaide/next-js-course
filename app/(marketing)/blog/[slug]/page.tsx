export default async function Page({ params }: { params: { slug: string }}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
  const post = await res.json();

  return (
    <div className="block m-2">
      <h1 className="bg-violet-900">My Post: {params.slug}</h1>
      <p>{post.body}</p>
    </div>
  );
}