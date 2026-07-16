import { Link, useNavigate, useParams } from "react-router-dom";
import { getArtifactById, getNextArtifact } from "@/data/artifacts";

export default function ArtifactInfo() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const artifact = getArtifactById(id);

  if (!artifact) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
        <h1 className="font-display text-3xl text-foreground">
          Artifact not found
        </h1>
        <Link
          to="/search"
          className="rounded-full border-[1.835px] border-brand-border px-6 py-2 font-display text-lg text-foreground transition-colors hover:bg-brand-border/5"
        >
          Back to Search
        </Link>
      </div>
    );
  }

  const nextArtifact = getNextArtifact(artifact.id);

  return (
    <div className="flex-1 overflow-y-auto bg-white">
      <div className="mx-auto flex w-full max-w-xl flex-col px-4 pb-20 pt-4 sm:px-8">
        <div className="w-full overflow-hidden rounded-[1.5rem]">
          <img
            src={artifact.artifactInfoImage ?? artifact.artifactImage}
            alt={artifact.artifactTitle}
            style={{
              aspectRatio:
                artifact.artifactInfoImageAspect ?? artifact.artifactImageAspect,
            }}
            className="w-full object-contain"
          />
        </div>

        <div className="mt-10 font-display text-2xl leading-tight text-foreground sm:text-[1.85rem]">
          <p>{artifact.artifactTitle}</p>
          <p>{artifact.artifactExhibitedBy}</p>
          <p>{artifact.artifactMaterial}</p>
        </div>

        <div className="mt-10 space-y-6 font-display text-xl leading-snug text-foreground sm:text-2xl">
          {artifact.artifactDescription.map((paragraph, index) => {
            const titleIndex = paragraph.indexOf(artifact.artifactTitle);
            if (titleIndex === -1) {
              return <p key={index}>{paragraph}</p>;
            }
            const before = paragraph.slice(0, titleIndex);
            const after = paragraph.slice(
              titleIndex + artifact.artifactTitle.length,
            );
            return (
              <p key={index}>
                {before}
                <span className="underline">{artifact.artifactTitle}</span>
                {after}
              </p>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => navigate(`/artifact/${nextArtifact.id}/info`)}
          className="mt-12 self-center rounded-full border-[1.835px] border-brand-border px-8 py-2 font-display text-xl text-foreground transition-colors hover:bg-brand-border/5"
        >
          Next Artifact
        </button>
      </div>
    </div>
  );
}
