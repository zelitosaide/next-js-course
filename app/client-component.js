"use client";

import { useState } from "react";

export default function ClientComponent({ children }) {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red">
      {/* <SearverComponent /> */}
      {children}
      <button onClick={function() { setCount(count + 1); }}>click me {count}</button>
    </div>
  );
}