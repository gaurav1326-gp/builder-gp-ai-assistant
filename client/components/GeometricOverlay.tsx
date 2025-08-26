export default function GeometricOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10 pointer-events-none">
      {/* Hexagonal pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hexagons"
            x="0"
            y="0"
            width="50"
            height="43.4"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="25,2 47,14 47,37 25,49 3,37 3,14"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-blue-400"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="scale"
                values="1;1.1;1"
                dur="8s"
                repeatCount="indefinite"
              />
            </polygon>
          </pattern>

          <pattern
            id="triangles"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="30,5 55,50 5,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-purple-400"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                values="0 30 30;360 30 30"
                dur="20s"
                repeatCount="indefinite"
              />
            </polygon>
          </pattern>

          <pattern
            id="circles"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="20"
              cy="20"
              r="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              className="text-indigo-400"
            >
              <animate
                attributeName="r"
                values="6;10;6"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
          </pattern>
        </defs>

        <rect x="0" y="0" width="100%" height="40%" fill="url(#hexagons)" />
        <rect x="0" y="40%" width="100%" height="30%" fill="url(#triangles)" />
        <rect x="0" y="70%" width="100%" height="30%" fill="url(#circles)" />
      </svg>

      {/* Floating geometric shapes */}
      <div
        className="absolute top-1/6 left-1/4 w-8 h-8 border border-blue-300/50 rotate-45 animate-spin"
        style={{ animationDuration: "15s" }}
      />
      <div className="absolute top-1/3 right-1/5 w-6 h-6 border border-purple-300/50 animate-bounce" />
      <div className="absolute bottom-1/4 left-1/6 w-10 h-10 border border-emerald-300/50 rounded-full animate-pulse" />
      <div
        className="absolute top-2/3 right-1/3 w-4 h-4 bg-pink-300/50 rotate-45 animate-spin"
        style={{ animationDuration: "12s", animationDirection: "reverse" }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0">
        {/* Horizontal lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />

        {/* Vertical lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-300/30 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-300/30 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-300/30 to-transparent" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-300/40" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-300/40" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-emerald-300/40" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-pink-300/40" />
    </div>
  );
}
