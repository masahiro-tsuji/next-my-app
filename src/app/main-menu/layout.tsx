export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ backgroundColor: "skyblue", height: "950px" }}>
      {children}
    </section>
  );
}
