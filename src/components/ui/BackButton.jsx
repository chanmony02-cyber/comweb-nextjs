import { useNavigate } from "react-router-dom";

export function BackButton({ label = "Back", className = "" }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-md font-semibold text-foreground hover:text-cyan-500 ${className}`}
    >
      <span aria-hidden="true">&lt;-</span>
      {label}
    </button>
  );
}
