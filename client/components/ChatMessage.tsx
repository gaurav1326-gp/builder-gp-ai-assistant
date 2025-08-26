import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: Date;
}

export default function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  return (
    <div className={cn(
      "flex w-full mb-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
        isUser 
          ? "bg-user text-user-foreground rounded-br-md" 
          : "bg-assistant text-assistant-foreground rounded-bl-md"
      )}>
        <div className="whitespace-pre-wrap break-words">
          {message}
        </div>
        {timestamp && (
          <div className={cn(
            "text-xs mt-1 opacity-70",
            isUser ? "text-right" : "text-left"
          )}>
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </div>
    </div>
  );
}
