"use client";

import { useState } from "react";

export default function Post({ post }) {
  const [count, setCount] = useState(100);

  return (
    <>
      <pre>
        {JSON.stringify(post)}
      </pre>
      <button onClick={function() { setCount(count - 1); }}>Decrement {count}</button>
    </>
  );
}