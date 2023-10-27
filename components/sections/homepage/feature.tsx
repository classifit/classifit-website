import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Feature() {
  return (
    <div className="bg-light text-light-foreground relative">
      <div className="flex max-w-[1280px] px-12 py-[200px] mx-auto gap-72">
        <div className="w-1/2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Prenotazioni</AccordionTrigger>
              <AccordionContent>
                Offri ai tuoi clienti la possibilità di prenotarsi alle lezioni
                in completa autonomia attraverso un intuitivo e semplice sistema
                di prenotazione. <br />
                <Button variant="link" size="zero" className="mt-6">
                  Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                </Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Calendario lezioni</AccordionTrigger>
              <AccordionContent>
                Pianifica le lezioni in programma nel tuo calendario personale
                per garantire una giornata senza intoppi e massimizzare i tuoi
                guadagni. <br />
                <Button variant="link" size="zero" className="mt-6">
                  Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                </Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Pacchetti a crediti</AccordionTrigger>
              <AccordionContent>
                Monitora con facilità tutti i pacchetti acquistati e tieni
                traccia del saldo residuo di crediti e della data di scadenza
                per ciascun cliente. <br />
                <Button variant="link" size="zero" className="mt-6">
                  Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                </Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Sito su misura</AccordionTrigger>
              <AccordionContent>
                Potenzia la tua presenza online e distingui il tuo marchio con
                un sito web bello e funzionale, su misura per l&apos;identità del tuo
                studio. <br />
                <Button variant="link" size="zero" className="mt-6">
                  Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                </Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Servizi aggiuntivi</AccordionTrigger>
              <AccordionContent>
                Branding, Graphic Design, Social Media Marketing, materiali
                promozionali: creiamo insieme tutto il necessario per il
                successo del tuo studio. <br />
                <Button variant="link" size="zero" className="mt-6">
                  Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                </Button>
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
