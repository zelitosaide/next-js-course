import "../globals.css";

export default function ShopLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          <h1>Shop Layout</h1>
          {children}
        </div>
      </body>
    </html>
  );
}