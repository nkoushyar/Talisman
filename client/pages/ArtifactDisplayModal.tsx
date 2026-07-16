import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getArtifactById, getNextArtifact } from "@/data/artifacts";
import ArtifactDisplayContent from "@/components/ArtifactDisplayContent";

export default function ArtifactDisplayModal() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backgroundLocation = (
    location.state as { backgroundLocation?: unknown } | null
  )?.backgroundLocation;
  const artifact = getArtifactById(id);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") navigate(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  if (!artifact) return null;

  const nextArtifact = getNextArtifact(artifact.id);

  return (
    <div
      className="fixed inset-0 z-40 overflow-y-auto bg-white pt-16 sm:pt-20"
      onClick={(event) => {
        if (event.target === event.currentTarget) navigate(-1);
      }}
    >
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="sr-only"
      >
        Close artifact preview
      </button>
      <ArtifactDisplayContent
        artifact={artifact}
        onNextArtifact={() =>
          navigate(`/artifact/${nextArtifact.id}`, {
            replace: true,
            state: { backgroundLocation },
          })
        }
      />
    </div>
  );
}
