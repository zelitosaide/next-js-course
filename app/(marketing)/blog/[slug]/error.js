"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(function() {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong!</h1>
      <button 
        onClick={function() {
          // Attempt to recover by trying to re-render the segment
          reset();
        }}
      >
        Try again
      </button>
    </div>
  );
}