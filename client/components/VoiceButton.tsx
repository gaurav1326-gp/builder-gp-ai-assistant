import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { useVoiceRecording } from "@/hooks/useVoiceRecording";

interface VoiceButtonProps {
  onTranscript: (text: string) => void;
  disabled?: boolean;
  className?: string;
}

export default function VoiceButton({
  onTranscript,
  disabled = false,
  className,
}: VoiceButtonProps) {
  const {
    isRecording,
    transcript,
    isSupported,
    error,
    startRecording,
    stopRecording,
    clearTranscript,
  } = useVoiceRecording();

  const [showTranscript, setShowTranscript] = useState(false);

  // Handle transcript completion
  useEffect(() => {
    if (!isRecording && transcript.trim()) {
      onTranscript(transcript.trim());
      clearTranscript();
      setShowTranscript(false);
    }
  }, [isRecording, transcript, onTranscript, clearTranscript]);

  // Show transcript while recording
  useEffect(() => {
    if (isRecording && transcript.trim()) {
      setShowTranscript(true);
    }
  }, [isRecording, transcript]);

  const handleToggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  if (!isSupported) {
    return (
      <Button
        variant="outline"
        size="sm"
        disabled
        className={cn("opacity-50", className)}
        title="Voice input not supported in this browser"
      >
        <MicOff className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <div className="relative">
      <Button
        onClick={handleToggleRecording}
        disabled={disabled}
        variant={isRecording ? "destructive" : "outline"}
        size="sm"
        className={cn(
          "transition-all duration-300 relative overflow-hidden",
          isRecording && "animate-pulse",
          className,
        )}
        title={isRecording ? "Stop recording" : "Start voice input"}
      >
        {isRecording ? (
          <>
            <Square className="h-4 w-4" />
            {/* Recording animation rings */}
            <div className="absolute inset-0 rounded-md">
              <div className="absolute inset-0 rounded-md bg-red-500/20 animate-ping" />
              <div
                className="absolute inset-0 rounded-md bg-red-500/10 animate-ping"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </>
        ) : (
          <Mic className="h-4 w-4" />
        )}
      </Button>

      {/* Live transcript display */}
      {showTranscript && transcript && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg max-w-xs whitespace-nowrap overflow-hidden text-ellipsis animate-fade-in-up">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span>{transcript}</span>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900" />
        </div>
      )}

      {/* Error display */}
      {error && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg max-w-xs animate-fade-in-up">
          {error}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-600" />
        </div>
      )}
    </div>
  );
}
