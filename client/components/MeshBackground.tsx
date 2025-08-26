export default function MeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/10" />

      {/* Dynamic gradient layers */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-200/40 via-transparent to-transparent animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-violet-200/40 via-transparent to-transparent animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-emerald-200/40 via-transparent to-transparent animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-rose-200/40 via-transparent to-transparent animate-pulse"
          style={{ animationDuration: "7s", animationDelay: "3s" }}
        />
      </div>

      {/* Mesh pattern overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="mesh-pattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="30"
                cy="30"
                r="1"
                fill="currentColor"
                className="text-blue-500"
              >
                <animate
                  attributeName="r"
                  values="0.5;2;0.5"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="0"
                cy="0"
                r="0.5"
                fill="currentColor"
                className="text-purple-500"
              />
              <circle
                cx="60"
                cy="0"
                r="0.5"
                fill="currentColor"
                className="text-indigo-500"
              />
              <circle
                cx="0"
                cy="60"
                r="0.5"
                fill="currentColor"
                className="text-pink-500"
              />
              <circle
                cx="60"
                cy="60"
                r="0.5"
                fill="currentColor"
                className="text-cyan-500"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
        </svg>
      </div>

      {/* Radial gradients for depth */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-300/20 via-blue-200/10 to-transparent rounded-full animate-pulse"
        style={{ animationDuration: "5s" }}
      />
      <div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-300/20 via-purple-200/10 to-transparent rounded-full animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-indigo-300/15 via-indigo-200/8 to-transparent rounded-full animate-pulse"
        style={{ animationDuration: "7s", animationDelay: "2s" }}
      />
    </div>
  );
}
