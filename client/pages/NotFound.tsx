import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-4xl text-foreground">404</h1>
      <p className="mt-4 text-foreground/70">Oops! Page not found</p>
      <Link
        to="/search"
        className="mt-8 rounded-full border-[1.835px] border-brand-border px-6 py-2 font-display text-lg text-foreground transition-colors hover:bg-brand-border/5"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
