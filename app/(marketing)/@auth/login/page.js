"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={function() { router.back(); }}>Back Home</button>
    </div>
  );
}