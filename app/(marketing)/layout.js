import "../globals.css";

export default function MarketingLayout({ children, analytics, team }) {
  console.log(analytics);

  return (
    <html>
      <body>
        <div>
          <h1>Marketing Layout</h1>
          <h2>Parallel Routes</h2>
          {analytics}
          {children}
        </div>
      </body>
    </html>
  );
}