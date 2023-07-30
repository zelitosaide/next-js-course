import "./globals.css";

export default function MarketingLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}