import "server-only";

import { Client } from "pg";

import { cache } from "react";

const db = new Client({
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
});

(async function() {
  await db.connect();
})();

export { db };

export const revalidate = 3600;

export const selectNow = cache(async function() {
  const res = await db.query("SELECT NOW();");
  return res;
});