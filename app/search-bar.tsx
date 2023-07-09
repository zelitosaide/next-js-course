"use client";

import { useState } from "react";

export default function SearchBar() {
  const [text, setText] = useState("");

  return (
    <input 
      type="text" 
      onChange={(e) => setText(e.target.value)}
      value={text}
    />
  )
}