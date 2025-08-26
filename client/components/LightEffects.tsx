export default function LightEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sunburst rays */}
      <div className="absolute top-8 right-8 w-32 h-32 opacity-30">
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "20s" }}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-px h-16 bg-gradient-to-t from-transparent via-yellow-300/60 to-transparent transform -translate-x-1/2 -translate-y-full"
              style={{
                transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                transformOrigin: "50% 100%",
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom left rays */}
      <div className="absolute bottom-8 left-8 w-24 h-24 opacity-25">
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-px h-12 bg-gradient-to-t from-transparent via-blue-300/60 to-transparent transform -translate-x-1/2 -translate-y-full"
              style={{
                transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                transformOrigin: "50% 100%",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating sparkles */}
      <div className="absolute top-1/5 left-1/3 w-3 h-3 opacity-70">
        <div
          className="relative w-full h-full animate-pulse"
          style={{ animationDuration: "3s" }}
        >
          <div className="absolute inset-0 bg-yellow-300 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-6 h-px bg-yellow-300 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-px h-6 bg-yellow-300 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="absolute top-2/5 right-1/4 w-2 h-2 opacity-60">
        <div
          className="relative w-full h-full animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        >
          <div className="absolute inset-0 bg-blue-300 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-4 h-px bg-blue-300 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-px h-4 bg-blue-300 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="absolute bottom-1/3 left-1/5 w-4 h-4 opacity-50">
        <div
          className="relative w-full h-full animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        >
          <div className="absolute inset-0 bg-purple-300 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-8 h-px bg-purple-300 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-px h-8 bg-purple-300 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Shooting stars */}
      <div className="absolute top-1/6 left-0 w-full h-px opacity-40">
        <div
          className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "3s" }}
        />
      </div>

      <div className="absolute top-2/3 left-0 w-full h-px opacity-30">
        <div
          className="w-full h-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "5s" }}
        />
      </div>

      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 right-1/6 w-6 h-6 bg-pink-300/40 rounded-full blur-sm animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-1/5 right-2/3 w-4 h-4 bg-emerald-300/40 rounded-full blur-sm animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "2s" }}
      />
      <div
        className="absolute top-3/5 left-1/8 w-5 h-5 bg-violet-300/40 rounded-full blur-sm animate-pulse"
        style={{ animationDuration: "7s", animationDelay: "1s" }}
      />

      {/* Light beams */}
      <div
        className="absolute top-0 left-1/3 w-2 h-32 bg-gradient-to-b from-blue-300/30 via-blue-200/20 to-transparent animate-pulse"
        style={{ animationDuration: "5s", animationDelay: "2s" }}
      />
      <div
        className="absolute top-0 right-1/5 w-1 h-24 bg-gradient-to-b from-purple-300/30 via-purple-200/20 to-transparent animate-pulse"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-0 left-1/2 w-3 h-28 bg-gradient-to-t from-emerald-300/30 via-emerald-200/20 to-transparent animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "3s" }}
      />
    </div>
  );
}
