import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: Date;
}

export default function ChatMessage({
  message,
  isUser,
  timestamp,
}: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex w-full mb-6 animate-fade-in-up",
        isUser ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "flex items-start gap-3 max-w-[85%]",
          isUser ? "flex-row-reverse" : "flex-row",
        )}
      >
        {/* Avatar */}
        <div
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg",
            isUser
              ? "bg-gradient-to-br from-blue-500 to-purple-600"
              : "bg-gradient-to-br from-emerald-500 to-teal-600",
          )}
        >
          {isUser ? (
            <User className="w-4 h-4 text-white" />
          ) : (
            <Bot className="w-4 h-4 text-white" />
          )}
        </div>

        {/* Message bubble */}
        <div
          className={cn(
            "relative px-5 py-4 text-sm shadow-lg transition-all duration-300 hover:shadow-xl",
            isUser
              ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-3xl rounded-br-lg"
              : "bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 rounded-3xl rounded-bl-lg backdrop-blur-sm border border-white/20 dark:border-slate-700/50",
          )}
        >
          <div className="whitespace-pre-wrap break-words leading-relaxed">
            {message}
          </div>
          {timestamp && (
            <div
              className={cn(
                "text-xs mt-2 opacity-70",
                isUser
                  ? "text-right text-blue-100"
                  : "text-left text-slate-500 dark:text-slate-400",
              )}
            >
              {timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          )}

          {/* Message tail */}
          <div
            className={cn(
              "absolute w-3 h-3 transform rotate-45",
              isUser
                ? "bg-gradient-to-br from-blue-500 to-purple-600 -bottom-1 right-3"
                : "bg-white/90 dark:bg-slate-800/90 border-l border-b border-white/20 dark:border-slate-700/50 -bottom-1 left-3",
            )}
          />
        </div>
      </div>
    </div>
  );
}
