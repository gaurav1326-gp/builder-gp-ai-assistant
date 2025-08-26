import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  shape: "circle" | "square" | "triangle" | "star";
  color: string;
  duration: number;
  delay: number;
  direction: "up" | "down" | "left" | "right" | "diagonal";
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      "bg-blue-300/30",
      "bg-purple-300/30",
      "bg-pink-300/30",
      "bg-indigo-300/30",
      "bg-cyan-300/30",
      "bg-violet-300/30",
      "bg-emerald-300/30",
      "bg-rose-300/30",
    ];

    const shapes: Particle["shape"][] = [
      "circle",
      "square",
      "triangle",
      "star",
    ];
    const directions: Particle["direction"][] = [
      "up",
      "down",
      "left",
      "right",
      "diagonal",
    ];

    const newParticles: Particle[] = [];
    for (let i = 0; i < 25; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 8,
        direction: directions[Math.floor(Math.random() * directions.length)],
      });
    }
    setParticles(newParticles);
  }, []);

  const getShapeElement = (particle: Particle) => {
    const baseClasses = `absolute ${particle.color} opacity-70`;
    const animationClasses = `animate-float`;

    const style = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      animationDuration: `${particle.duration}s`,
      animationDelay: `${particle.delay}s`,
    };

    switch (particle.shape) {
      case "circle":
        return (
          <div
            key={particle.id}
            className={`${baseClasses} ${animationClasses} rounded-full`}
            style={style}
          />
        );

      case "square":
        return (
          <div
            key={particle.id}
            className={`${baseClasses} ${animationClasses} rounded-sm transform rotate-45`}
            style={style}
          />
        );

      case "triangle":
        return (
          <div
            key={particle.id}
            className={`${baseClasses} ${animationClasses}`}
            style={{
              ...style,
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          />
        );

      case "star":
        return (
          <div
            key={particle.id}
            className={`${baseClasses} ${animationClasses} relative`}
            style={style}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="animate-spin"
              style={{ animationDuration: `${particle.duration * 2}s` }}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => getShapeElement(particle))}

      {/* Additional sparkle effects */}
      <div
        className="absolute top-1/6 left-1/5 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-60"
        style={{ animationDelay: "1s", animationDuration: "3s" }}
      />
      <div
        className="absolute top-1/4 right-1/6 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60"
        style={{ animationDelay: "2s", animationDuration: "4s" }}
      />
      <div
        className="absolute top-1/2 left-1/8 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"
        style={{ animationDelay: "3s", animationDuration: "2s" }}
      />
      <div
        className="absolute top-2/3 right-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-60"
        style={{ animationDelay: "4s", animationDuration: "5s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60"
        style={{ animationDelay: "5s", animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-1/6 right-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60"
        style={{ animationDelay: "6s", animationDuration: "4s" }}
      />

      {/* Light rays */}
      <div
        className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-blue-300/50 to-transparent animate-pulse"
        style={{ animationDelay: "2s", animationDuration: "4s" }}
      />
      <div
        className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-purple-300/50 to-transparent animate-pulse"
        style={{ animationDelay: "4s", animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-px h-28 bg-gradient-to-t from-emerald-300/50 to-transparent animate-pulse"
        style={{ animationDelay: "1s", animationDuration: "5s" }}
      />
    </div>
  );
}
