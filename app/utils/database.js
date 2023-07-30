import "server-only";

import { Client } from "pg";

const db = new Client({
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
});

(async function() {
  await db.connect();
})();

export { db };