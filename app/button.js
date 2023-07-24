import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={function() {
        setCount(count + 1);
      }}
    >
      Click me ( { count } )
    </button>
  );
}