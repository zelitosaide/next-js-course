// "use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  // const router = useRouter();

  return (
    <div>
      <h1>Login</h1>
      <Link href="/ddd/eee">DDD</Link>
      {/* <button onClick={function() { router.back(); }}>Back Home</button> */}
    </div>
  );
}