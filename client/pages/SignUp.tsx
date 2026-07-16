import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell from "@/components/AuthShell";
import UserIcon from "@/components/icons/UserIcon";
import { Checkbox } from "@/components/ui/checkbox";

const fieldClasses =
  "w-full rounded-full border border-white/70 bg-[#EDF4ED]/60 py-3 pl-14 pr-5 font-gowun-dodum text-lg text-[#4C4343] shadow-[0_1.837px_4.73px_rgba(0,0,0,0.25)] outline-none placeholder:text-[#776969] focus:ring-2 focus:ring-[#A29E95]";

export default function SignUp() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/search");
  };

  return (
    <AuthShell title="Create your account">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8fcdd64ebe39d3d97caad7946602f10452f27224?width=62"
            alt=""
            className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 opacity-70"
          />
          <input
            type="email"
            required
            placeholder="Email"
            autoComplete="email"
            className={fieldClasses}
          />
        </div>

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
            src="https://api.builder.io/api/v1/image/assets/TEMP/0239ce8761cbe10cb888a8af8ed7c52e9692d3e2?width=58"
            alt=""
            className="mb-1 h-6 w-6 opacity-60"
          />
          <input
            type="password"
            required
            placeholder="Password"
            autoComplete="new-password"
            className={fieldClasses}
          />
        </div>

        <div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0239ce8761cbe10cb888a8af8ed7c52e9692d3e2?width=58"
            alt=""
            className="mb-1 h-6 w-6 opacity-60"
          />
          <input
            type="password"
            required
            placeholder="Confirm password"
            autoComplete="new-password"
            className={fieldClasses}
          />
        </div>

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
          Sign up
        </button>
      </form>

      <Link
        to="/login"
        className="mt-8 block w-full rounded-full border border-[#A29E95] bg-[#EDF4ED]/80 py-3 text-center font-gowun-dodum text-xl text-[#4C4343] shadow-[0_1.837px_4.73px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#EDF4ED]"
      >
        Log in
      </Link>
    </AuthShell>
  );
}
