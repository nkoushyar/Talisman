import { Link, useNavigate, useParams } from "react-router-dom";
import { getArtifactById, getNextArtifact } from "@/data/artifacts";
import ArtifactDisplayContent from "@/components/ArtifactDisplayContent";

export default function ArtifactDisplayPage() {
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
    <div className="flex-1 bg-white pt-4">
      <ArtifactDisplayContent
        artifact={artifact}
        onNextArtifact={() => navigate(`/artifact/${nextArtifact.id}`)}
      />
    </div>
  );
}
