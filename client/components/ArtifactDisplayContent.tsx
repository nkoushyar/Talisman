import { Link } from "react-router-dom";
import { Artifact } from "@/data/artifacts";

interface ArtifactDisplayContentProps {
  artifact: Artifact;
  onNextArtifact: () => void;
}

export default function ArtifactDisplayContent({
  artifact,
  onNextArtifact,
}: ArtifactDisplayContentProps) {
  return (
    <div className="mx-auto flex w-full max-w-[394px] flex-col items-center px-3 pb-10 text-center sm:px-4">
      <h1 className="mt-6 min-h-[5.5rem] whitespace-pre-line px-4 font-display text-[1.82rem] leading-[1.12] tracking-[-0.07em] text-foreground">
        {artifact.artifactTitle}
      </h1>

      <div className="mt-2 flex min-h-[425px] w-full items-center justify-center gap-1">
        <span
          className={`w-[3.7rem] shrink-0 origin-center -rotate-90 whitespace-nowrap font-display text-[1.82rem] tracking-[-0.07em] text-foreground ${
            artifact.id === "woven-tapestry"
              ? "relative top-[50px] left-[-7px]"
              : artifact.id === "maya-reborn-lord"
                ? "relative top-[55px] left-[3px]"
                : artifact.id === "quadrangular-censer"
                  ? "relative top-[110px] left-[-25px]"
                  : artifact.id === "plumed-serpent-finial"
                    ? "relative top-[145px] left-[-15px]"
                    : artifact.id === "iatmul-hook-figure"
                      ? "relative top-[35px] left-[-5px]"
                      : ""
          }`}
        >
          {artifact.artifactMaterial}
        </span>

        <div
          className="relative min-w-0 flex-1"
          style={{ aspectRatio: artifact.artifactImageAspect }}
        >
          <img
            src={artifact.artifactDisplayImage ?? artifact.artifactImage}
            alt={artifact.artifactTitle}
            className={`absolute inset-0 h-full w-full object-contain ${
              artifact.id === "woven-tapestry"
                ? "-translate-y-[15px] scale-[1.3]"
                : artifact.id === "maya-reborn-lord"
                  ? "translate-x-[8px] -translate-y-[15px] mix-blend-multiply"
                  : artifact.id === "quadrangular-censer"
                    ? "translate-y-[25px] scale-[1.25]"
                    : artifact.id === "plumed-serpent-finial"
                      ? "scale-[1.25]"
                      : artifact.id === "archaic-bronze-vessel"
                        ? "translate-x-[10px] -translate-y-[15px]"
                        : artifact.id === "iatmul-hook-figure"
                          ? "-translate-y-[15px] scale-[0.85]"
                          : ["umpan-gong", "turkic-horse"].includes(artifact.id)
                      ? "mix-blend-multiply"
                      : ""
            }`}
          />
          {artifact.decoration && (
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox={artifact.decoration.viewBox}
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {artifact.decoration.lines.map((line, index) => (
                <g key={index} transform={`translate(${line.x} ${line.y})`}>
                  <path
                    d={line.path}
                    stroke={artifact.decoration!.color}
                    strokeWidth={artifact.decoration!.strokeWidth}
                    strokeLinecap="round"
                  />
                </g>
              ))}
            </svg>
          )}
        </div>

        <span
          className={`relative left-5 w-[3.7rem] shrink-0 -translate-y-36 origin-center rotate-90 whitespace-nowrap font-display text-[1.82rem] tracking-[-0.07em] text-foreground ${
            artifact.id === "quadrangular-censer"
              ? "left-[35px] top-[15px]"
              : artifact.id === "iatmul-hook-figure"
                ? "top-[-25px]"
                : ""
          }`}
        >
          {artifact.artifactExhibitedBy}
        </span>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <svg aria-hidden="true" width="45" height="40" viewBox="0 0 45 40" fill="none">
          <path d="M7.12646 18.2957H35.4548V20.7351H7.12646Z" fill="black" />
          <path d="M22.519 29.3093L33.294 19.5146L22.519 9.72155L24.4047 7.99292L37.0814 19.5144L24.4049 31.0377L22.519 29.3093Z" fill="black" />
        </svg>
        <Link
          to={`/artifact/${artifact.id}/info`}
          className="font-display text-[1.82rem] tracking-[-0.07em] text-foreground underline decoration-1 underline-offset-4"
        >
          More Info Here
        </Link>
        <svg aria-hidden="true" width="41" height="40" viewBox="0 0 41 40" fill="none">
          <path d="M33.5111 20.7349H7.51904V18.2955H33.5111Z" fill="black" />
          <path d="M19.3887 9.72141L9.50239 19.516L19.3887 29.3091L17.6585 31.0377L6.02734 19.5162L17.6583 7.99292L19.3887 9.72141Z" fill="black" />
        </svg>
      </div>

      <button
        type="button"
        onClick={onNextArtifact}
        className="mt-14 flex flex-col items-center gap-1 text-foreground"
      >
        <svg
          width="95"
          height="34"
          viewBox="0 0 95 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[34px] w-[95px]"
        >
          <path
            d="M72.4819 21.6487L46.1247 11.8719L19.7676 21.6487"
            stroke="black"
            strokeWidth="0.688775"
            strokeLinecap="square"
          />
        </svg>
        <span className="font-display text-[1.03rem] tracking-[-0.03em]">Next Artifact</span>
      </button>
    </div>
  );
}
