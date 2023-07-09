"use client";

import { useState } from "react";
import ServerComponent from "./server-component";

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <ServerComponent />
    </>
  );
}