import "../globals.css";

export default function MarketingLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          <h1>Marketing Layout</h1>
          {children}
        </div>
      </body>
    </html>
  );
}