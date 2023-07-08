"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h3 onClick={() => { setCount(count + 1); }}>Hello {count}</h3>
    </main>
  );
}
