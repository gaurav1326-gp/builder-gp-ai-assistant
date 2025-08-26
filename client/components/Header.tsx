import { Bot, Heart, BookOpen, Stethoscope } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Gaurav's AI Assistant</h1>
            <p className="text-muted-foreground">Smart, friendly, and supportive</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-primary" />
            <span>General support</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <span>Study help</span>
          </div>
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-primary" />
            <span>Health guidance</span>
          </div>
        </div>
      </div>
    </header>
  );
}
