export default function Page({ params }) {
  return (
    <div>
      My Post: {JSON.stringify(params)}
    </div>
  );
}