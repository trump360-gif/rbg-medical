"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Building2, Settings, User, Stethoscope, Briefcase } from "lucide-react";
import { cn } from "@/lib/cn";
import { useUserStore } from "@/lib/userStore";
import { MemberType } from "@/lib/types";

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

const memberTypeBadge: Record<MemberType, { label: string; icon: React.ElementType; color: string; bg: string }> = {
  patient: { label: "환자", icon: User, color: "text-blue-700", bg: "bg-blue-50" },
  doctor: { label: "의료인", icon: Stethoscope, color: "text-emerald-700", bg: "bg-emerald-50" },
  agency: { label: "에이전시", icon: Briefcase, color: "text-violet-700", bg: "bg-violet-50" },
};

export default function MobileNav() {
  const pathname = usePathname();
  const { currentUser, switchUserType } = useUserStore();
  const badge = memberTypeBadge[currentUser.memberType];
  const BadgeIcon = badge.icon;

  const nextType: MemberType = currentUser.memberType === 'patient' ? 'doctor' : currentUser.memberType === 'doctor' ? 'agency' : 'patient';

  return (
    <nav
      className="md:hidden flex items-center justify-around h-14 border-t border-[#E8E8E8] bg-white shrink-0"
      aria-label="하단 탭 메뉴"
      data-testid="mobile-nav"
    >
      {/* User type badge (tap to cycle) */}
      <button
        onClick={() => switchUserType(nextType)}
        className={cn("flex flex-col items-center justify-center gap-0.5 flex-1 h-full")}
        title={`현재: ${badge.label} (탭하여 전환)`}
      >
        <div className={cn("w-5 h-5 rounded-full flex items-center justify-center", badge.bg)}>
          <BadgeIcon size={12} className={badge.color} />
        </div>
        <span className={cn("text-[10px] leading-none font-medium", badge.color)}>
          {badge.label}
        </span>
      </button>

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
