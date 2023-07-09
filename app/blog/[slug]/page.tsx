export default function Page({ params }: { params: { slug: string }}) {
  return (
    <>
      <h1>My Post: {params.slug}</h1>
    </>
  );
}