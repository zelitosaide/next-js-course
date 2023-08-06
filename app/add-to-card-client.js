"use client";

import { addItem } from "./actions";

// Server Action being called inside a Client Component
export default function AddToCardClient({ productId }) {
  return (
    <form action={addItem}>
      <button type="submit">Add to Card Client</button>
    </form>
  );
}