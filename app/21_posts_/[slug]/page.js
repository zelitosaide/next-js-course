"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <button 
        type="button"
        onClick={function() {
          router.back();
        }}
      >
        Back Home
      </button>
      <div>Post</div>
    </div>
  );
}