import Header from "@/components/Header";
import ChatContainer from "@/components/ChatContainer";
import MeshBackground from "@/components/MeshBackground";
import FloatingParticles from "@/components/FloatingParticles";
import AuroraEffect from "@/components/AuroraEffect";
import EnhancedBlobs from "@/components/EnhancedBlobs";
import GeometricOverlay from "@/components/GeometricOverlay";
import LightEffects from "@/components/LightEffects";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Layer 1: Base mesh gradient background */}
      <MeshBackground />

      {/* Layer 2: Enhanced animated blobs */}
      <EnhancedBlobs />

      {/* Layer 3: Aurora flowing effects */}
      <AuroraEffect />

      {/* Layer 4: Floating particles */}
      <FloatingParticles />

      {/* Layer 5: Geometric pattern overlay */}
      <GeometricOverlay />

      {/* Layer 6: Light effects and sparkles */}
      <LightEffects />

      {/* Content */}
      <div className="relative z-50 min-h-screen flex flex-col backdrop-blur-[0.5px]">
        <Header />
        <div className="flex-1 flex flex-col">
          <ChatContainer />
        </div>
      </div>
    </div>
  );
}
