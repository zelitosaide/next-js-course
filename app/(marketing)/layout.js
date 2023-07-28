import "../globals.css";
// import { getUser } from "../lib/auth";

export default function MarketingLayout({ children, analytics, team }) {
  // const isLoggedIn = getUser();

  return (
    <html>
      <body>
        <div>
          <h1>Marketing Layout</h1>
          <h2>Parallel Routes</h2>
          {/* {isLoggedIn ? analytics : team} */}
          {analytics}
          {/* {team} */}
          {children}
        </div>
      </body>
    </html>
  );
}