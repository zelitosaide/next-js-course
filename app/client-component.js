"use client";

import { useEffect, useState } from "react";
import { getData } from "./lib/data";

export default function ClientComponent({ children }) {
  const [count, setCount] = useState(0);

  useEffect(function() {
    async function get() {
      console.log(await getData());
    }
    get();
  }, []);

  return (
    <div className="bg-red">
      {/* <SearverComponent /> */}
      {children}
      <button onClick={function() { setCount(count + 1); }}>click me {count}</button>
    </div>
  );
}