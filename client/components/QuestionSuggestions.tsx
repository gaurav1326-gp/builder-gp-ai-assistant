import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Stethoscope, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuestionSuggestionsProps {
  onQuestionSelect: (question: string) => void;
  isVisible: boolean;
}

interface QuestionCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  questions: string[];
}

const questionCategories: QuestionCategory[] = [
  {
    title: "General Support",
    icon: Heart,
    color: "text-red-500 bg-red-50 border-red-200 hover:bg-red-100",
    questions: [
      "Hello! How are you today?",
      "What can you help me with?",
      "Tell me about yourself",
      "How do I get started?",
      "What are your capabilities?",
    ],
  },
  {
    title: "Study Help",
    icon: BookOpen,
    color: "text-blue-500 bg-blue-50 border-blue-200 hover:bg-blue-100",
    questions: [
      "Explain photosynthesis in simple terms",
      "How do I solve quadratic equations?",
      "What is the water cycle?",
      "Help me understand gravity",
      "Explain the solar system to me",
    ],
  },
  {
    title: "Health Guidance",
    icon: Stethoscope,
    color: "text-green-500 bg-green-50 border-green-200 hover:bg-green-100",
    questions: [
      "What are some healthy eating tips?",
      "How much water should I drink daily?",
      "What's good sleep hygiene?",
      "How to manage stress effectively?",
      "Benefits of regular exercise?",
    ],
  },
  {
    title: "Quick Questions",
    icon: MessageCircle,
    color: "text-purple-500 bg-purple-50 border-purple-200 hover:bg-purple-100",
    questions: [
      "What's the weather like?",
      "Give me a motivational quote",
      "Tell me a fun fact",
      "Help me plan my day",
      "What should I learn today?",
    ],
  },
];

export default function QuestionSuggestions({
  onQuestionSelect,
  isVisible,
}: QuestionSuggestionsProps) {
  if (!isVisible) return null;

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">
          What would you like to know?
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Click on any question below to get started
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {questionCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div key={category.title} className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className={cn("p-1 rounded-full", category.color)}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <h4 className="font-medium text-slate-700 dark:text-slate-200">
                  {category.title}
                </h4>
              </div>

              <div className="space-y-2">
                {category.questions.map((question, index) => (
                  <Button
                    key={index}
                    onClick={() => onQuestionSelect(question)}
                    variant="outline"
                    className={cn(
                      "w-full text-left justify-start h-auto py-3 px-4 whitespace-normal text-wrap",
                      "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm",
                      "border border-white/20 dark:border-slate-700/50",
                      "hover:shadow-md hover:scale-[1.02] transition-all duration-200",
                      "text-slate-700 dark:text-slate-200",
                      category.color
                        .split(" ")
                        .filter((c) => c.startsWith("hover:"))
                        .join(" "),
                    )}
                  >
                    <span className="text-sm leading-relaxed">{question}</span>
                  </Button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-slate-400 dark:text-slate-500">
          💡 You can also type your own question or use voice input
        </p>
      </div>
    </div>
  );
}
