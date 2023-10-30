import About from "@/components/sections/about";
import PageTitle from "@/components/sections/page-title";
import Paragraph from "@/components/sections/paragraph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Help() {
  return (
    <>
      <PageTitle
        subtitle="Aiuto"
        title="Esplora le risposte che ti servono oppure contattaci"
      />
      <Paragraph
        cta={false}
        subtitle
        subtitleText="Domande & Risposte"
        title="Ecco una lista delle domande più frequenti"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        bgColor="bg-light"
        textColor="text-light-foreground"
      />
      <div className="bg-light text-light-foreground">
        <div className="px-12 pt-0 pb-36 max-w-[1280px] mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Che tipo di servizi offrite?</AccordionTrigger>
              <AccordionContent>
                Offri ai tuoi clienti la possibilità di prenotarsi alle lezioni
                in completa autonomia attraverso un intuitivo e semplice sistema
                di prenotazione.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quali sono le tempistiche?</AccordionTrigger>
              <AccordionContent>
                Pianifica le lezioni in programma nel tuo calendario personale
                per garantire una giornata senza intoppi e massimizzare i tuoi
                guadagni.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Che cosa dovrò fare io?</AccordionTrigger>
              <AccordionContent>
                Monitora con facilità tutti i pacchetti acquistati e tieni
                traccia del saldo residuo di crediti e della data di scadenza
                per ciascun cliente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Come posso iniziare?</AccordionTrigger>
              <AccordionContent>
                Potenzia la tua presenza online e distingui il tuo marchio con
                un sito web bello e funzionale, su misura per l&apos;identità
                del tuo studio.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Hai ancora domande?</AccordionTrigger>
              <AccordionContent>
                Branding, Graphic Design, Social Media Marketing, materiali
                promozionali: creiamo insieme tutto il necessario per il
                successo del tuo studio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <About title="Non hai trovato le risposte che cercavi?" body="Non esitare a contattarci tramite i DM di Instagram o tramite email - Saremo felici di risponderti!"/>
    </>
  );
}
