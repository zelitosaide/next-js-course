export default function MarketingLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <section className="p-2">
      <h1>Marketing Layout</h1>
      {children}
    </section>
  );
}