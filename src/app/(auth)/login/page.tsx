"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import { cn } from "@/lib/cn";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) return;
    setIsLoading(true);
    // Simulate async transition
    await new Promise((resolve) => setTimeout(resolve, 300));
    router.push("/dashboard");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div
      className="flex min-h-screen w-full"
      data-testid="login-page"
    >
      {/* Left panel - visible only on md+ */}
      <div
        className="hidden md:flex flex-1 flex-col justify-center bg-primary px-[60px] py-[60px]"
        data-testid="login-left-panel"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div
            className="w-10 h-10 rounded-md bg-white/20 shrink-0"
            aria-hidden="true"
          />
          <span className="text-white font-semibold text-lg">RBG Medical</span>
        </div>

        {/* Tagline */}
        <h1
          className="text-3xl font-bold text-white leading-[1.3] whitespace-pre-line mb-5"
          data-testid="login-tagline"
        >
          {"러시아·CIS 의료관광\n병원 매칭 플랫폼"}
        </h1>

        {/* Description */}
        <p
          className="text-white/70 text-sm leading-relaxed whitespace-pre-line"
          data-testid="login-description"
        >
          {"에이전시와 한국 병원 간의 환자 매칭 프로세스를\n디지털화하여 효율적인 의료관광을 지원합니다."}
        </p>
      </div>

      {/* Right panel */}
      <div
        className="flex flex-1 md:flex-none md:w-[480px] flex-col justify-center bg-white px-6 py-10 md:px-12 md:py-[60px]"
        data-testid="login-right-panel"
      >
        {/* Mobile-only logo */}
        <div className="flex items-center gap-2 mb-8 md:hidden">
          <div className="w-8 h-8 rounded-md bg-primary shrink-0" aria-hidden="true" />
          <span className="font-semibold text-text-primary">RBG Medical</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h2
            className="text-xl font-bold text-text-primary mb-1"
            data-testid="login-title"
          >
            에이전시 로그인
          </h2>
          <p className="text-sm text-text-secondary" data-testid="login-subtitle">
            계정 정보를 입력하여 로그인하세요
          </p>
        </div>

        {/* Form */}
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          data-testid="login-form"
          noValidate
        >
          {/* Email field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-text-primary"
            >
              이메일
            </label>
            <div className="relative">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                aria-hidden="true"
              >
                <Mail size={16} />
              </span>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="agency@example.com"
                autoComplete="email"
                className={cn(
                  "w-full rounded-lg border border-[#E8E8E8] bg-white pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted",
                  "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                )}
                data-testid="login-email-input"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-text-primary"
            >
              비밀번호
            </label>
            <div className="relative">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                aria-hidden="true"
              >
                <Lock size={16} />
              </span>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="••••••••"
                autoComplete="current-password"
                className={cn(
                  "w-full rounded-lg border border-[#E8E8E8] bg-white pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted",
                  "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                )}
                data-testid="login-password-input"
              />
            </div>
          </div>

          {/* Login button */}
          <button
            type="submit"
            disabled={isLoading || !email || !password}
            className={cn(
              "w-full rounded-lg bg-primary text-white font-medium py-3 text-sm",
              "hover:bg-primary-dark transition-colors",
              "disabled:opacity-60 disabled:cursor-not-allowed",
              "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
            )}
            data-testid="login-submit-button"
          >
            {isLoading ? "로그인 중..." : "로그인"}
          </button>
        </form>

        {/* Quick login for testing */}
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="mt-4 w-full rounded-lg border-2 border-dashed border-primary/30 bg-primary-light text-primary font-medium py-3 text-sm hover:bg-primary/10 transition-colors"
        >
          테스트용 빠른 로그인
        </button>

        {/* Footer */}
        <p
          className="mt-6 text-center text-sm text-text-secondary"
          data-testid="login-footer"
        >
          계정이 없으신가요?{" "}
          <a
            href="mailto:contact@rbgmedical.com"
            className="text-primary font-medium hover:underline"
            data-testid="login-contact-link"
          >
            문의하기
          </a>
        </p>
      </div>
    </div>
  );
}
