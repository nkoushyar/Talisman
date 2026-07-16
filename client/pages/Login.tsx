import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell from "@/components/AuthShell";
import UserIcon from "@/components/icons/UserIcon";
import { Checkbox } from "@/components/ui/checkbox";

const fieldClasses =
  "w-full rounded-full border border-white/70 bg-[#EDF4ED]/60 py-3 pl-14 pr-5 font-gowun-dodum text-lg text-[#4C4343] shadow-[0_1.837px_4.73px_rgba(0,0,0,0.25)] outline-none placeholder:text-[#776969] focus:ring-2 focus:ring-[#A29E95]";

export default function Login() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/search");
  };

  return (
    <AuthShell title="Log into your account">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <UserIcon className="pointer-events-none absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2" />
          <input
            type="text"
            required
            placeholder="Username"
            autoComplete="username"
            className={fieldClasses}
          />
        </div>

        <div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e06d2b836c832aa2c5dadf22fec112cb184f4956?width=52"
            alt=""
            className="mb-1 h-6 w-6 opacity-60"
          />
          <input
            type="password"
            required
            placeholder="Password"
            autoComplete="current-password"
            className={fieldClasses}
          />
        </div>

        <span className="self-end pr-2 font-gowun-dodum text-sm text-[#381F1F]/80">
          forgot?
        </span>

        <label className="flex items-center gap-3 pl-2 font-gowun-dodum text-base text-[#381F1F] [text-shadow:0_1px_1px_rgba(0,0,0,0.25)]">
          <Checkbox
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked === true)}
          />
          Remember me
        </label>

        <button
          type="submit"
          className="mt-4 w-full rounded-full border border-[#A29E95] bg-[#EDF4ED]/80 py-3 font-gowun-dodum text-xl text-[#4C4343] shadow-[0_1.837px_4.73px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#EDF4ED]"
        >
          Log in
        </button>
      </form>

      <p className="mt-8 text-center font-gowun-dodum text-base text-[#381F1F] [text-shadow:0_1px_1px_rgba(0,0,0,0.25)]">
        Don&rsquo;t have an account?
      </p>
      <Link
        to="/signup"
        className="mt-4 block w-full rounded-full border border-[#A2A096] bg-[#EDF4ED]/80 py-3 text-center font-gowun-dodum text-xl text-[#4C4343] shadow-[0_1.837px_4.73px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#EDF4ED]"
      >
        Sign up
      </Link>
    </AuthShell>
  );
}
