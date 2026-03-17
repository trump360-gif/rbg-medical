"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Building2, Settings } from "lucide-react";
import { cn } from "@/lib/cn";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: "대시보드", href: "/dashboard", icon: LayoutDashboard },
  { label: "환자 관리", href: "/patients", icon: Users },
  { label: "병원 검색", href: "/hospitals", icon: Building2 },
  { label: "설정", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden md:flex flex-col w-[240px] shrink-0 min-h-screen border-r border-[#E8E8E8] bg-white pt-6 px-5"
      data-testid="sidebar"
    >
      {/* Logo area */}
      <div className="flex items-center gap-2" data-testid="sidebar-logo">
        <div className="w-8 h-8 rounded-md bg-primary shrink-0" aria-hidden="true" />
        <span className="font-semibold text-text-primary text-sm">RBG Medical</span>
      </div>

      {/* Nav items */}
      <nav className="mt-8 flex flex-col gap-1" aria-label="주 메뉴" data-testid="sidebar-nav">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              data-testid={`sidebar-nav-${item.href.replace("/", "")}`}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                isActive
                  ? "bg-primary-light text-primary font-medium"
                  : "text-text-secondary hover:bg-bg-surface hover:text-text-primary"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                size={18}
                className={cn(isActive ? "text-primary" : "text-text-secondary")}
                aria-hidden="true"
              />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
