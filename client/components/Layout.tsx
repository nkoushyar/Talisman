import { Link } from "react-router-dom";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
          <Link
            to="/search"
            className="font-display text-2xl tracking-tight text-foreground sm:text-3xl"
          >
            Talisman
          </Link>
          <Link
            to="/about"
            className="font-display text-2xl tracking-tight text-foreground sm:text-3xl"
          >
            About Us
          </Link>
        </div>
      </header>
      <main className="flex flex-1 flex-col pt-16 sm:pt-20">{children}</main>
    </div>
  );
}
