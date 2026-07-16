import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-white px-6 pb-10 pt-16 text-center sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-16 -top-24 h-[28rem] rounded-[3rem] bg-[#72745F]/40 blur-3xl"
      />

      <h1 className="relative font-kalnia text-5xl font-medium text-[#381F1F] [text-shadow:0_2px_2px_rgba(0,0,0,0.25)] sm:text-6xl">
        Talisman
      </h1>

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/35d9f8db52ef7d709e0127eb75d1aab51281d7ac?width=467"
        alt="Talisman logo"
        className="relative mt-10 h-48 w-48 rounded-full shadow-lg sm:h-56 sm:w-56"
      />

      <div className="relative mt-auto flex w-full max-w-sm flex-col items-center gap-4 rounded-[3rem] bg-[#EDF4ED]/70 px-8 py-8">
        <h2 className="font-gowun-batang text-xl font-bold text-[#022737]">
          Welcome to Talisman!
        </h2>
        <p className="font-gowun-batang text-sm text-[#022737]">
          Log in to see what&rsquo;s in store for you...
        </p>
        <Link
          to="/login"
          className="mt-2 w-full max-w-xs rounded-full border-[1.835px] border-[#022737]/70 bg-[#EDF4ED] py-3 font-gowun-dodum text-xl text-[#022737] shadow-[0_1.837px_4.73px_rgba(0,0,0,0.25)] transition-colors hover:bg-white"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
