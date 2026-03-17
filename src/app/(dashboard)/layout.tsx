import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1 min-w-0">
        <main
          className="flex-1 overflow-y-auto bg-bg-surface"
          data-testid="dashboard-main"
        >
          {children}
        </main>

        {/* Mobile bottom nav - always pinned at bottom */}
        <MobileNav />
      </div>
    </div>
  );
}
