"use client";

import { useState } from "react";
import Button from "./button";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Button onClick={() => { setCount(count + 1); }}>Hello {count}</Button>
    </main>
  );
}
