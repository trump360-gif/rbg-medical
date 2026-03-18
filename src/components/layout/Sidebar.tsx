"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { LayoutDashboard, Users, Building2, Settings, User, Stethoscope, Briefcase, LogOut, FileText, Send } from "lucide-react";
import { cn } from "@/lib/cn";
import { useUserStore } from "@/lib/userStore";
import { MemberType } from "@/lib/types";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  visibleFor: MemberType[];
}

const navItems: NavItem[] = [
  { label: "대시보드", href: "/dashboard", icon: LayoutDashboard, visibleFor: ["patient", "doctor", "agency"] },
  { label: "내 진료", href: "/my-cases", icon: FileText, visibleFor: ["patient"] },
  { label: "의뢰 환자", href: "/referrals", icon: Send, visibleFor: ["doctor"] },
  { label: "환자 관리", href: "/patients", icon: Users, visibleFor: ["agency"] },
  { label: "병원 검색", href: "/hospitals", icon: Building2, visibleFor: ["patient", "agency"] },
  { label: "설정", href: "/settings", icon: Settings, visibleFor: ["patient", "doctor", "agency"] },
];

const memberTypeConfig: Record<MemberType, { label: string; icon: React.ElementType; color: string; bgColor: string }> = {
  patient: { label: "환자", icon: User, color: "text-blue-700", bgColor: "bg-blue-50 border-blue-200" },
  doctor: { label: "의료인", icon: Stethoscope, color: "text-emerald-700", bgColor: "bg-emerald-50 border-emerald-200" },
  agency: { label: "에이전시", icon: Briefcase, color: "text-violet-700", bgColor: "bg-violet-50 border-violet-200" },
};

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { currentUser, switchUserType } = useUserStore();
  const typeConfig = memberTypeConfig[currentUser.memberType];
  const TypeIcon = typeConfig.icon;

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

      {/* User type switcher */}
      <div className="mt-5 mb-2">
        <div className={cn("flex items-center gap-2 px-3 py-2 rounded-lg border", typeConfig.bgColor)}>
          <TypeIcon size={16} className={typeConfig.color} />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-text-primary truncate">{currentUser.name}</p>
            <p className={cn("text-[10px]", typeConfig.color)}>{typeConfig.label}</p>
          </div>
        </div>
        <div className="flex gap-1 mt-2">
          {(Object.keys(memberTypeConfig) as MemberType[]).map((type) => {
            const config = memberTypeConfig[type];
            const Icon = config.icon;
            const isSelected = currentUser.memberType === type;
            return (
              <button
                key={type}
                onClick={() => switchUserType(type)}
                className={cn(
                  "flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-md text-[10px] transition-colors border",
                  isSelected
                    ? cn(config.bgColor, config.color, "font-medium")
                    : "border-transparent text-text-muted hover:bg-bg-surface"
                )}
                title={`${config.label}로 전환`}
              >
                <Icon size={14} />
                {config.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Nav items */}
      <nav className="mt-4 flex flex-col gap-1 flex-1" aria-label="주 메뉴" data-testid="sidebar-nav">
        {navItems.filter((item) => item.visibleFor.includes(currentUser.memberType)).map((item) => {
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

      {/* Logout button */}
      <div className="pb-6">
        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-text-secondary hover:bg-danger-light hover:text-danger transition-colors w-full"
          data-testid="sidebar-logout"
        >
          <LogOut size={18} aria-hidden="true" />
          로그아웃
        </button>
      </div>
    </aside>
  );
}
