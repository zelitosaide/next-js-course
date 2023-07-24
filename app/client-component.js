"use client";

import SearverComponent from "./server-component";

export default function ClientComponent() {
  return (
    <div className="bg-red">
      <SearverComponent />
    </div>
  );
}