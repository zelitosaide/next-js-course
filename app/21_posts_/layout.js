import { db } from "../api/database";

import Navigation from "../components/navigation";

export default async function PostsLayout({ children }) {
  const result = await db.query("SELECT NOW();");
  
  return (
    <div>
      <h1>Posts Layout</h1>
      <pre>{JSON.stringify(result)}</pre>
      <hr className="mt-2 mb-2" />

      <div className="flex">
        <Navigation />
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}