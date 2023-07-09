"use client";

import { useState } from "react";

export default function ClientComponent({ children } : any) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {children}
    </>
  );
}