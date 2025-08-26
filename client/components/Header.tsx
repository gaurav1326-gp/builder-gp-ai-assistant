import {
  Bot,
  Heart,
  BookOpen,
  Stethoscope,
  Sparkles,
  Mic,
  Volume2,
} from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/50 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
          <div className="relative">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg animate-pulse-glow">
              <Bot className="w-8 h-8 text-white animate-float" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gaurav's AI Assistant
            </h1>
            <p className="text-slate-600 dark:text-slate-300 font-medium">
              Smart, friendly, and supportive AI companion
            </p>
          </div>
        </div>

        <div
          className="flex flex-wrap gap-6 text-sm animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-3 bg-white/60 dark:bg-slate-800/60 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="p-1 bg-red-100 dark:bg-red-900/30 rounded-full">
              <Heart className="w-4 h-4 text-red-500" />
            </div>
            <span className="font-medium text-slate-700 dark:text-slate-200">
              General support
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white/60 dark:bg-slate-800/60 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <BookOpen className="w-4 h-4 text-blue-500" />
            </div>
            <span className="font-medium text-slate-700 dark:text-slate-200">
              Study help
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white/60 dark:bg-slate-800/60 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
              <Stethoscope className="w-4 h-4 text-green-500" />
            </div>
            <span className="font-medium text-slate-700 dark:text-slate-200">
              Health guidance
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="p-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <Mic className="w-4 h-4 text-purple-500" />
            </div>
            <span className="font-medium text-slate-700 dark:text-slate-200">
              Voice input
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="p-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
              <Volume2 className="w-4 h-4 text-emerald-500" />
            </div>
            <span className="font-medium text-slate-700 dark:text-slate-200">
              Voice responses
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
