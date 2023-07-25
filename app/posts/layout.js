import { db } from "../api/database";

export default async function PostsLayout({ children }) {
  const result = await db.query("SELECT NOW();");
  
  return (
    <div>
      <h1>Posts Layout</h1>
      <pre>{JSON.stringify(result)}</pre>
      {children}
    </div>
  );
}