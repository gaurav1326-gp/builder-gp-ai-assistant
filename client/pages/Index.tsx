import Header from "@/components/Header";
import ChatContainer from "@/components/ChatContainer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Attractive gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20" />

      {/* Animated background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col">
          <ChatContainer />
        </div>
      </div>
    </div>
  );
}
