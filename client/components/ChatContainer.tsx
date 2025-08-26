import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! I'm your AI assistant created by Gaurav. I'm here to help you with general questions, support your studies with clear explanations, and offer basic health guidance. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const {
    speak,
    stop,
    isSpeaking,
    isSupported: ttsSupported,
  } = useTextToSpeech();

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const simulateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI thinking time
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 2000),
    );

    // Simple response simulation based on keywords
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes("study") ||
      lowerMessage.includes("learn") ||
      lowerMessage.includes("explain")
    ) {
      return "I'd be happy to help with your studies! To give you the best explanation, could you tell me more specifically what topic or concept you'd like me to explain? I can break it down step-by-step and provide examples to make it easier to understand.";
    }

    if (
      lowerMessage.includes("health") ||
      lowerMessage.includes("medical") ||
      lowerMessage.includes("sick")
    ) {
      return "I can provide general health guidance, but please remember that I'm not a substitute for professional medical advice. For any serious health concerns, it's always best to consult with a healthcare professional. What general health topic would you like to know about?";
    }

    if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey")
    ) {
      return "Hello! It's great to meet you. I'm here to support you with questions, studies, and general guidance. What would you like to talk about today?";
    }

    if (lowerMessage.includes("help") || lowerMessage.includes("support")) {
      return "I'm here to help! I can assist you with:\n\n• General questions and information\n• Study support with clear explanations\n• Basic health guidance\n• Step-by-step breakdowns of complex topics\n\nWhat would you like help with specifically?";
    }

    // Default friendly response
    return "That's an interesting question! I'm here to help you learn and understand. Could you tell me a bit more about what you'd like to know? I'm happy to explain things step-by-step and provide examples to make concepts clearer.";
  };

  const handleSendMessage = async (messageText: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Simulate AI response
      const aiResponse = await simulateAIResponse(messageText);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);

      // Speak AI response if voice is enabled
      if (voiceEnabled && ttsSupported) {
        speak(aiResponse);
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble responding right now. Please try again in a moment.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleVoice = () => {
    if (voiceEnabled) {
      stop(); // Stop any current speech
    }
    setVoiceEnabled(!voiceEnabled);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Voice controls */}
      {ttsSupported && (
        <div className="flex justify-end p-4 pb-0">
          <Button
            onClick={toggleVoice}
            variant="outline"
            size="sm"
            className={cn(
              "transition-all duration-300",
              voiceEnabled
                ? "bg-primary/10 border-primary/30 text-primary"
                : "",
              isSpeaking && "animate-pulse",
            )}
            title={
              voiceEnabled
                ? "Disable voice responses"
                : "Enable voice responses"
            }
          >
            {voiceEnabled ? (
              <Volume2 className="h-4 w-4" />
            ) : (
              <VolumeX className="h-4 w-4" />
            )}
            <span className="ml-2 text-xs">
              {voiceEnabled ? "Voice On" : "Voice Off"}
            </span>
          </Button>
        </div>
      )}

      <ScrollArea ref={scrollAreaRef} className="flex-1 p-6 pt-2">
        <div className="max-w-4xl mx-auto">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ChatMessage
                message={message.text}
                isUser={message.isUser}
                timestamp={message.timestamp}
              />
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-6 animate-fade-in-up">
              <div className="flex items-start gap-3">
                {/* AI Avatar */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                  <div className="w-4 h-4 text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V14L13 16L15 14V11C16.1 11 17 10.1 17 9V7L21 9Z" />
                    </svg>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-3xl rounded-bl-lg px-5 py-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                    <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      AI is thinking...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Spacing at bottom */}
          <div className="h-6" />
        </div>
      </ScrollArea>

      <ChatInput
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
        placeholder="Ask me anything... I'm here to help! 💫"
      />
    </div>
  );
}
