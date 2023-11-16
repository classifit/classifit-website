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
  return (
    <div className="bg-light text-light-foreground relative">
      {/* Desktop */}
      <div className="hidden lg:flex max-w-[1280px] px-12 py-[200px] mx-auto gap-72">
        <div className="w-1/2">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1" onClick={() => setActive("item-1")}>
              <AccordionTrigger>Gestionale</AccordionTrigger>
              <AccordionContent>
                Tieni sotto controllo tutto ciò che riguarda il tuo studio con
                il portale web che ti permette di gestire clienti, lezioni,
                iscritti e pacchetti. <br />
                <Link href="/servizi/gestionale">
                  <Button variant="link" size="zero" className="mt-6">
                    Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" onClick={() => setActive("item-2")}>
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
            <AccordionItem value="item-3" onClick={() => setActive("item-3")}>
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
            <AccordionItem value="item-4" onClick={() => setActive("item-4")}>
              <AccordionTrigger>Supporto tecnico</AccordionTrigger>
              <AccordionContent>
                Lascia fare a noi: digitalizziamo o trasferiamo i tuoi dati
                attuali, e ti affianchiamo durante tutta l&apos;implementazione
                dei nuovi servizi. <br />
                <Link href="/servizi/supporto-tecnico">
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
                src="/services/erp/erp-cover.png"
                width="450"
                height="630"
                alt="Tieni sotto controllo tutto ciò che riguarda il tuo studio con il portale web che ti permette di gestire clienti, lezioni, iscritti e pacchetti."
              />
            </div>
          </div>
          <div
            className={`bg-[#6058E7] h-full w-1/2 absolute top-0 right-0 transition-opacity duration-300 ${
              active == "item-2" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center h-full w-full">
              <Image
                src="/services/booking/prenotazioni-cover.png"
                width="450"
                height="630"
                alt="Sistema di prenotazioni online per le lezioni del tuo studio"
              />
            </div>
          </div>
          <div
            className={`bg-card h-full w-1/2 absolute top-0 right-0 transition-opacity duration-300 ${
              active == "item-3" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center h-full w-full">
              <Image
                src="/services/website/sito-cover.png"
                width="450"
                height="630"
                alt="Sito web su misura per l'identità del tuo studio di fitness"
              />
            </div>
          </div>
          <div
            className={`bg-dark h-full w-1/2 absolute top-0 right-0 transition-opacity duration-300 ${
              active == "item-4" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center h-full w-full">
              <Image
                src="/services/support/cover-supporto-tecnico.png"
                width="450"
                height="630"
                alt="Supporto tecnico per il trasferimento o la digitalizzazione dei dati del tuo studio di pilates"
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
                width="450"
                height="630"
                alt="Graphic Desing, Social Media Post, Branding, Volantini, Gift Card, Materiali Promozionali - Tutto ciò che è necessario per il successo del tuo studio"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <section className="block lg:hidden">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Gestionale</AccordionTrigger>
            <AccordionContent>
              Tieni sotto controllo tutto ciò che riguarda il tuo studio con il
              portale web che ti permette di gestire clienti, lezioni, iscritti
              e pacchetti.
              <div className="py-6" />
              <Link href="/servizi/gestionale">
                <Button variant="default">
                  Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                </Button>
              </Link>
              <div className="py-6" />
              <div className="bg-secondary flex items-center justify-center py-12 px-6">
                <Image
                  src="/services/erp/erp-cover.png"
                  width="450"
                  height="562"
                  alt="Tieni sotto controllo tutto ciò che riguarda il tuo studio con il portale web che ti permette di gestire clienti, lezioni, iscritti e pacchetti."
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Prenotazioni</AccordionTrigger>
            <AccordionContent>
              Offri ai tuoi clienti la possibilità di prenotarsi alle lezioni in
              completa autonomia attraverso un intuitivo e semplice sistema di
              prenotazione.
              <div className="py-6" />
              <Link href="/servizi/prenotazioni">
                <Button variant="default">
                  Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                </Button>
              </Link>
              <div className="py-6" />
              <div className="bg-[#6058E7] flex items-center justify-center py-12 px-6">
                <Image
                  src="/services/booking/prenotazioni-cover.png"
                  width="450"
                  height="562"
                  alt="Sistema di prenotazioni online per le lezioni del tuo studio"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Sito su misura</AccordionTrigger>
            <AccordionContent>
              Potenzia la tua presenza online e distingui il tuo marchio con un
              sito web bello e funzionale, su misura per l&apos;identità del tuo
              studio.
              <div className="py-6" />
              <Link href="/servizi/sito-su-misura">
                <Button variant="default">
                  Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                </Button>
              </Link>
              <div className="py-6" />
              <div className="bg-card flex items-center justify-center py-12 px-6">
                <Image
                  src="/services/website/sito-cover.png"
                  width="450"
                  height="562"
                  alt="Sito web su misura per l'identità del tuo studio di fitness"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Supporto tecnico</AccordionTrigger>
            <AccordionContent>
              Lascia fare a noi: digitalizziamo o trasferiamo i tuoi dati
              attuali, e ti affianchiamo durante tutta l&apos;implementazione
              dei nuovi servizi.
              <div className="py-6" />
              <Link href="/servizi/supporto-tecnico">
                <Button variant="default">
                  Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                </Button>
              </Link>
              <div className="py-6" />
              <div className="bg-dark flex items-center justify-center py-12 px-6">
                <Image
                  src="/services/support/cover-supporto-tecnico.png"
                  width="450"
                  height="562"
                  alt="Supporto tecnico per il trasferimento o la digitalizzazione dei dati del tuo studio di pilates"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Servizi aggiuntivi</AccordionTrigger>
            <AccordionContent>
              Branding, Graphic Design, Social Media Marketing, materiali
              promozionali: creiamo insieme tutto il necessario per il successo
              del tuo studio.
              <div className="py-6" />
              <Link href="/servizi/servizi-aggiuntivi">
                <Button variant="default">
                  Scopri come <ArrowRightIcon className="ml-3 h-4 w-4" />
                </Button>
              </Link>
              <div className="py-6" />
              <div className="bg-ring flex items-center justify-center py-12 px-6">
                <Image
                  src="/services/additional/servizi-aggiuntivi-cover.png"
                  width="450"
                  height="562"
                  alt="Graphic Desing, Social Media Post, Branding, Volantini, Gift Card, Materiali Promozionali - Tutto ciò che è necessario per il successo del tuo studio"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
