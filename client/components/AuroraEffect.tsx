export default function AuroraEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-60">
      {/* Aurora waves */}
      <div className="absolute inset-0">
        {/* Wave 1 */}
        <div
          className="absolute w-full h-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent transform -skew-y-12 animate-pulse"
          style={{
            animationDuration: "8s",
            transform:
              "translateX(-50%) translateY(-20%) skewY(-12deg) rotate(15deg)",
          }}
        />

        {/* Wave 2 */}
        <div
          className="absolute w-full h-full bg-gradient-to-r from-transparent via-purple-400/25 to-transparent transform -skew-y-6 animate-pulse"
          style={{
            animationDuration: "10s",
            animationDelay: "2s",
            transform:
              "translateX(-30%) translateY(10%) skewY(-6deg) rotate(-10deg)",
          }}
        />

        {/* Wave 3 */}
        <div
          className="absolute w-full h-full bg-gradient-to-r from-transparent via-pink-400/20 to-transparent transform skew-y-8 animate-pulse"
          style={{
            animationDuration: "12s",
            animationDelay: "4s",
            transform:
              "translateX(20%) translateY(-30%) skewY(8deg) rotate(25deg)",
          }}
        />

        {/* Wave 4 */}
        <div
          className="absolute w-full h-full bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent transform -skew-y-4 animate-pulse"
          style={{
            animationDuration: "6s",
            animationDelay: "1s",
            transform:
              "translateX(10%) translateY(40%) skewY(-4deg) rotate(-20deg)",
          }}
        />

        {/* Wave 5 */}
        <div
          className="absolute w-full h-full bg-gradient-to-r from-transparent via-violet-400/20 to-transparent transform skew-y-10 animate-pulse"
          style={{
            animationDuration: "14s",
            animationDelay: "3s",
            transform:
              "translateX(-20%) translateY(20%) skewY(10deg) rotate(30deg)",
          }}
        />
      </div>

      {/* Flowing streams */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-blue-300/40 via-purple-300/30 to-transparent animate-pulse"
          style={{
            animationDuration: "5s",
            transform: "rotate(15deg)",
            transformOrigin: "top",
          }}
        />
        <div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-violet-300/40 via-pink-300/30 to-transparent animate-pulse"
          style={{
            animationDuration: "7s",
            animationDelay: "2s",
            transform: "rotate(-10deg)",
            transformOrigin: "top",
          }}
        />
        <div
          className="absolute top-0 left-2/3 w-3 h-full bg-gradient-to-b from-cyan-300/30 via-emerald-300/25 to-transparent animate-pulse"
          style={{
            animationDuration: "6s",
            animationDelay: "1s",
            transform: "rotate(20deg)",
            transformOrigin: "top",
          }}
        />
      </div>

      {/* Orbital rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className="w-96 h-96 border border-blue-300/20 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-purple-300/15 rounded-full animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-pink-300/10 rounded-full animate-spin"
          style={{ animationDuration: "25s" }}
        />
      </div>
    </div>
  );
}
