import { Link, useLocation } from "react-router-dom";

interface ArtifactDisplayProps {
  id: string;
  artifactImage: string;
  artifactTitle: string;
  aspect?: string;
}

export default function ArtifactDisplay({
  id,
  artifactImage,
  artifactTitle,
  aspect = "aspect-square",
}: ArtifactDisplayProps) {
  const location = useLocation();

  return (
    <Link
      to={`/artifact/${id}`}
      state={{ backgroundLocation: location }}
      className={`group mb-10 inline-block w-full break-inside-avoid overflow-hidden rounded-[2.5rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-border ${aspect}`}
    >
      <img
        src={artifactImage}
        alt={artifactTitle}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
