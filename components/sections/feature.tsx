import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Feature() {
  return (
    <div className="flex">
        <div className="w-1/2 bg-light text-light-foreground py-36 px-12"></div>
        <div className="w-1/2 bg-secondary py-36"></div>
    </div>
  );
}
