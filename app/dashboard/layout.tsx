export default function DashboardLayout({ 
  children 
} : { 
  children: React.ReactNode
}) {
  return (
    <section>
      <nav className="bg-orange-500 text-center">Dashboard Header</nav>
      {children}
    </section>
  );
}