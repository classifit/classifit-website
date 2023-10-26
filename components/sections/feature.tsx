import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

export default function Feature() {
  return (
    <div className="bg-light text-light-foreground relative">
      <div className="flex max-w-[1280px] px-12 py-[200px] mx-auto gap-72">
        <div className="w-1/2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Prenotazioni</AccordionTrigger>
              <AccordionContent>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              <Button variant="default" className="block mt-6">Scopri di più</Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Palinsesto</AccordionTrigger>
              <AccordionContent>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Pacchetti a crediti</AccordionTrigger>
              <AccordionContent>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Sito su misura</AccordionTrigger>
              <AccordionContent>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Servizi aggiuntivi</AccordionTrigger>
              <AccordionContent>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-1/2">
            <div className="bg-secondary h-full w-1/2 absolute top-0 right-0" />
        </div>
      </div>
    </div>
  );
}
