"use client";

import { useState } from "react";
import SearverComponent from "./server-component";

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red">
      <SearverComponent />
      <button onClick={function() { setCount(count + 1); }}>click me {count}</button>
    </div>
  );
}