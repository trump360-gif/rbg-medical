"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Building2, Settings } from "lucide-react";
import { cn } from "@/lib/cn";

interface TabItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const tabItems: TabItem[] = [
  { label: "홈", href: "/dashboard", icon: LayoutDashboard },
  { label: "환자", href: "/patients", icon: Users },
  { label: "병원", href: "/hospitals", icon: Building2 },
  { label: "설정", href: "/settings", icon: Settings },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="md:hidden flex items-center justify-around h-14 border-t border-[#E8E8E8] bg-white shrink-0"
      aria-label="하단 탭 메뉴"
      data-testid="mobile-nav"
    >
      {tabItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            data-testid={`mobile-nav-${item.href.replace("/", "")}`}
            className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full"
            aria-current={isActive ? "page" : undefined}
          >
            <Icon
              size={20}
              className={cn(isActive ? "text-primary" : "text-text-muted")}
              aria-hidden="true"
            />
            <span
              className={cn(
                "text-[10px] leading-none",
                isActive ? "text-primary font-medium" : "text-text-muted"
              )}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
