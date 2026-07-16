import { FormEvent, useMemo, useState } from "react";
import { ARTIFACTS } from "@/data/artifacts";
import ArtifactDisplay from "@/components/ArtifactDisplay";

const REGIONS = ["Asia", "Africa", "Oceania", "Americas"] as const;

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 33 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.1401 13.1446C5.1401 8.32346 9.19587 4.40171 14.1801 4.40171C19.1631 4.40171 23.2189 8.32346 23.2189 13.1446C23.2189 17.9657 19.1631 21.8887 14.1801 21.8887C9.19587 21.8887 5.1401 17.9657 5.1401 13.1446ZM28.8929 26.1371L22.9865 20.439C24.728 18.475 25.7875 15.9297 25.7875 13.1446C25.7875 6.95452 20.5797 1.91724 14.1801 1.91724C7.7793 1.91724 2.57153 6.95452 2.57153 13.1446C2.57153 19.3359 7.7793 24.3732 14.1801 24.3732C16.7769 24.3732 19.1696 23.5334 21.105 22.1334L27.0795 27.8962L28.8929 26.1371Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Index() {
  const [query, setQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const filteredArtifacts = useMemo(() => {
    return ARTIFACTS.filter((artifact) => {
      const matchesRegion = !activeRegion || artifact.region === activeRegion;
      const matchesQuery = artifact.artifactTitle
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesRegion && matchesQuery;
    });
  }, [activeRegion, query]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center px-6 pb-16 sm:px-8">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8585d13e66c4cc0b60b3d59b3854ab62fa28cdbd?width=279"
        alt="Talisman logo"
        className="mt-6 h-28 w-28 sm:h-36 sm:w-36"
      />

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-md"
        role="search"
      >
        <label htmlFor="artifact-search" className="sr-only">
          Search artifacts
        </label>
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-foreground" />
          <input
            id="artifact-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            className="h-[53px] w-full rounded-full border-[1.835px] border-brand-border bg-transparent pl-16 pr-6 font-display text-2xl text-foreground shadow-[0_1.835px_4.724px_rgba(0,0,0,0.25)] outline-none placeholder:text-foreground/80 focus:ring-2 focus:ring-brand-border/40"
          />
        </div>
      </form>

      <div className="mt-6 flex w-full flex-wrap justify-center gap-3">
        {REGIONS.map((region, index) => {
          const isActive = activeRegion === region;
          return (
            <button
              key={`${region}-${index}`}
              type="button"
              onClick={() =>
                setActiveRegion((current) =>
                  current === region ? null : region,
                )
              }
              aria-pressed={isActive}
              className={`rounded-full border-[1.835px] border-brand-border px-6 py-1.5 font-display text-xl shadow-[0_1.835px_4.724px_rgba(0,0,0,0.25)] transition-colors ${
                isActive
                  ? "bg-brand-border text-background"
                  : "bg-transparent text-foreground hover:bg-brand-border/10"
              }`}
            >
              {region}
            </button>
          );
        })}
      </div>

      <div className="mt-12 w-full columns-1 gap-10 sm:columns-2 lg:columns-3">
        {filteredArtifacts.map((artifact) => (
          <ArtifactDisplay
            key={artifact.id}
            id={artifact.id}
            artifactImage={artifact.artifactImage}
            artifactTitle={artifact.artifactTitle}
            aspect={artifact.aspect}
          />
        ))}
        {filteredArtifacts.length === 0 && (
          <p className="block w-full [column-span:all] py-12 text-center font-display text-xl text-foreground/70">
            {activeRegion
              ? `No artifacts found in ${activeRegion}.`
              : query.trim()
                ? `No artifacts found matching “${query.trim()}”.`
                : "No artifacts found."}
          </p>
        )}
      </div>
    </div>
  );
}
