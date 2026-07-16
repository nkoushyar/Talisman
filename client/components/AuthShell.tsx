import { ReactNode } from "react";

interface AuthShellProps {
  title: string;
  children: ReactNode;
}

export default function AuthShell({ title, children }: AuthShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-white px-6 pb-16 pt-16 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-16 -top-24 h-[28rem] rounded-[3rem] bg-[#72745F]/40 blur-3xl"
      />

      <h1 className="relative max-w-xs text-center font-halant text-4xl font-medium text-[#381F1F] [text-shadow:0_2px_2px_rgba(0,0,0,0.25)] sm:text-5xl">
        {title}
      </h1>

      <div className="relative mt-10 w-full max-w-sm">{children}</div>
    </div>
  );
}
