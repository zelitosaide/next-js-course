import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link className="block" href="/cart">Cart</Link>
      <Link className="block" href="/settings">Settings</Link>
      <Link className="block" href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
    </div>
  );
}