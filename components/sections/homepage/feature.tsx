"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Feature() {
  const [active, setActive] = useState("item-1");
  console.log(active);
  return (
    <div className="bg-light text-light-foreground relative">
      <div className="flex max-w-[1280px] px-12 py-[200px] mx-auto gap-72">
        <div className="w-1/2">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1" onClick={() => setActive("item-1")}>
              <AccordionTrigger>Prenotazioni</AccordionTrigger>
              <AccordionContent>
                Offri ai tuoi clienti la possibilità di prenotarsi alle lezioni
                in completa autonomia attraverso un intuitivo e semplice sistema
                di prenotazione. <br />
                <Link href="/servizi/prenotazioni">
                  <Button variant="link" size="zero" className="mt-6">
                    Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" onClick={() => setActive("item-2")}>
              <AccordionTrigger>Calendario lezioni</AccordionTrigger>
              <AccordionContent>
                Pianifica le lezioni in programma nel tuo calendario personale
                per garantire una giornata senza intoppi e massimizzare i tuoi
                guadagni. <br />
                <Link href="/servizi/calendario">
                  <Button variant="link" size="zero" className="mt-6">
                    Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" onClick={() => setActive("item-3")}>
              <AccordionTrigger>Pacchetti a crediti</AccordionTrigger>
              <AccordionContent>
                Monitora con facilità tutti i pacchetti acquistati e tieni
                traccia del saldo residuo di crediti e della data di scadenza
                per ciascun cliente. <br />
                <Link href="/servizi/pacchetti">
                  <Button variant="link" size="zero" className="mt-6">
                    Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" onClick={() => setActive("item-4")}>
              <AccordionTrigger>Sito su misura</AccordionTrigger>
              <AccordionContent>
                Potenzia la tua presenza online e distingui il tuo marchio con
                un sito web bello e funzionale, su misura per l&apos;identità
                del tuo studio. <br />
                <Link href="/servizi/sito-su-misura">
                  <Button variant="link" size="zero" className="mt-6">
                    Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" onClick={() => setActive("item-5")}>
              <AccordionTrigger>Servizi aggiuntivi</AccordionTrigger>
              <AccordionContent>
                Branding, Graphic Design, Social Media Marketing, materiali
                promozionali: creiamo insieme tutto il necessario per il
                successo del tuo studio. <br />
                <Link href="/servizi/servizi-aggiuntivi">
                  <Button variant="link" size="zero" className="mt-6">
                    Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-1/2">
          <div
            className={`bg-secondary h-full w-1/2 absolute top-0 right-0 transition-opacity duration-300 ${
              active == "item-1" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center h-full w-full">
              <Image
                src="/services/booking/prenotazioni-cover.png"
                width="1080"
                height="1350"
                alt="Sistema di prenotazioni online per le lezioni del tuo studio"
                className="w-[450px]"
              />
            </div>
          </div>
          <div
            className={`bg-dark h-full w-1/2 absolute top-0 right-0 transition-opacity duration-300 ${
              active == "item-2" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center h-full w-full">
            <Image
                src="/services/calendar/calendario-cover.png"
                width="1080"
                height="1350"
                alt="Gestione delle lezioni tramite una comoda vista a calendario"
                className="w-[450px]"
              />
            </div>
          </div>
          <div
            className={`bg-primary h-full w-1/2 absolute top-0 right-0 transition-opacity duration-300 ${
              active == "item-3" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center h-full w-full">
            <Image
                src="/services/packages/pacchetti-cover.png"
                width="1080"
                height="1350"
                alt="Gestione dei pacchetti a crediti per ogni cliente, con dettaglio dei crediti residui e data di scadenza"
                className="w-[450px]"
              />
            </div>
          </div>
          <div
            className={`bg-card h-full w-1/2 absolute top-0 right-0 transition-opacity duration-300 ${
              active == "item-4" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center h-full w-full">
            <Image
                src="/services/website/sito-cover.png"
                width="1080"
                height="1350"
                alt="Sito web su misura per l'identità del tuo studio"
                className="w-[450px]"
              />
            </div>
          </div>
          <div
            className={`bg-ring h-full w-1/2 absolute top-0 right-0 transition-opacity duration-300 ${
              active == "item-5" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center h-full w-full">
            <Image
                src="/services/additional/servizi-aggiuntivi-cover.png"
                width="1080"
                height="1350"
                alt="Graphic Desing, Social Media Post, Branding, Volantini, Gift Card, Materiali Promozionali - Tutto ciò che è necessario per il successo del tuo studio"
                className="w-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
