// import { getDate } from "./utils/api";

// import { getFormattedDate, getDate } from "./utils/api";

// import { db } from "./utils/database";

// export const revalidate = 3600;

// async function getDBVersion() {
//   const res = await db.query("SELECT version();");
//   return res;
// }

export default async function Page() {
  const date = await getDate();
  // const version = await getDBVersion();
  // const formattedDate = await getFormattedDate();

  return (
    <div>
      <h1>Home</h1>
      {/* <pre>{JSON.stringify(date)}</pre> */}
      {/* <pre>{JSON.stringify(version)}</pre> */}
      {/* <pre>{JSON.stringify(formattedDate)}</pre> */}
    </div>
  );
}