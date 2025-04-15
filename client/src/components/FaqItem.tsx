import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer: string;
  value: string;
  className?: string;
}

export default function FaqItem({ question, answer, value, className }: FaqItemProps) {
  return (
    <Accordion type="single" collapsible className={cn("reveal-element reveal-bottom", className)}>
      <AccordionItem value={value} className="border-slate-800">
        <AccordionTrigger className="text-lg font-medium hover:gradient-text">
          {question}
        </AccordionTrigger>
        <AccordionContent className="text-slate-300">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}