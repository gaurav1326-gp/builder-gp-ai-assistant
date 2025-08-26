import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export default function ChatInput({
  onSendMessage,
  isLoading = false,
  placeholder = "Ask me anything..."
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-white/20 dark:border-slate-700/50">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className={cn(
          "flex gap-3 p-2 rounded-2xl transition-all duration-300 shadow-lg",
          "bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 dark:border-slate-700/50",
          isFocused ? "shadow-2xl ring-2 ring-blue-500/30" : "hover:shadow-xl"
        )}>
          <div className="flex-1 relative">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder}
              className={cn(
                "min-h-[52px] max-h-[120px] resize-none border-0 bg-transparent",
                "focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-400 dark:placeholder:text-slate-500",
                "text-slate-800 dark:text-slate-100"
              )}
              disabled={isLoading}
            />
            {!message && !isFocused && (
              <div className="absolute right-3 top-3 pointer-events-none">
                <Sparkles className="w-4 h-4 text-slate-400 animate-pulse" />
              </div>
            )}
          </div>
          <Button
            type="submit"
            disabled={!message.trim() || isLoading}
            className={cn(
              "self-end rounded-xl h-[52px] w-[52px] p-0 transition-all duration-300",
              "bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
              "shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed",
              "transform hover:scale-105 active:scale-95",
              !message.trim() ? "" : "animate-pulse-glow"
            )}
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin text-white" />
            ) : (
              <Send className="h-5 w-5 text-white" />
            )}
          </Button>
        </div>

        <div className="text-center mt-3">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Press Enter to send • Shift + Enter for new line
          </p>
        </div>
      </form>
    </div>
  );
}
