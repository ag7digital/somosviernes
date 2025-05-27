export function CurvedDivider({
  color = "white",
  position = "bottom",
  height = 100,
  className = "",
}: {
  color?: string;
  position?: "top" | "bottom";
  height?: number;
  className?: string;
}) {
  // Different path for top vs bottom position
  const path =
    position === "bottom"
      ? "M0 0V100H1440V0C1440 0 1320 60 720 60C120 60 0 0 0 0Z"
      : "M0 100V0H1440V100C1440 100 1320 40 720 40C120 40 0 100 0 100Z";

  return (
    <div className={`absolute ${position}-0 left-0 w-full ${className}`}>
      <svg
        viewBox={`0 0 1440 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-auto"
      >
        <path d={path} fill={color} />
      </svg>
    </div>
  );
}
