// import { getDate } from "./utils/api";

import Link from "next/link";

// import AddToCard from "./add-to-card";
// import AddToCardClient from "./add-to-card-client";
// import UploadImage from "./upload-image";
// import { selectNow } from "./utils/database";

import Form from "./form/page";

// import { getFormattedDate, getDate } from "./utils/api";

// import { db } from "./utils/database";

// export const revalidate = 3600;

// async function getDBVersion() {
//   const res = await db.query("SELECT version();");
//   return res;
// }

async function getData() {
  // const res = await fetch("http://localhost:3001", { cache: "force-cache" });

  // const res = await fetch("http://localhost:3001", { 
  //   next: { revalidate: 3600 } 
  // });

  // const res = await fetch("http://localhost:3001", { 
  //   next: { tags: ["collection"] } 
  // });

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // const res = await fetch("http://localhost:3001", {
  //   cache: "no-cache"
  // });

  // const res = await fetch("http://localhost:3001", {
  //   next: { revalidate: 0 }
  // });

  // const res = await fetch("http://localhost:3001");

  // const res = await fetch("http://localhost:3001", {
  //   cache: "no-cache"
  // });

  const res = await fetch("http://localhost:3001");

  return res.json();
}

// export const revalidate = 3600; // revalidate at most every hour

// export const dynamic = "force-dynamic";

// export const dynamic = "force-dynamic";

// export default async function Page() {
export default function Page() {
  // const date = await getDate();
  // const version = await getDBVersion();
  // const formattedDate = await getFormattedDate();
  
  // const data = await getData();
  // const now = await selectNow();

  return (
    <div>
      <h1>Hello, Home page!</h1>
      <Link href="/dashboard">Dashboard</Link>
      {/* <pre>{JSON.stringify(date)}</pre> */}
      {/* <pre>{JSON.stringify(version)}</pre> */}
      {/* <pre>{JSON.stringify(formattedDate)}</pre> */}
      {/* <pre>{JSON.stringify(data)}</pre> */}
      {/* <pre>{JSON.stringify(now.rows)}</pre> */}
      {/* <AddToCard productId={1} /> */}
      {/* <AddToCardClient productId={2} /> */}
      {/* <UploadImage /> */}

      <Form />
    </div>
  );
}