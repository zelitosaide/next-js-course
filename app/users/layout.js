import { db } from "../lib/database";

export default async function UsersLayout({ children }) {
  const result = await db.query("SELECT NOW();");
  
  return (
    <div>
      <h1>Users Layout</h1>
      <pre>{JSON.stringify(result)}</pre>
      {children}
    </div>
  );
}