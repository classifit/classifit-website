import type { Metadata } from "next";
import About from "@/components/sections/about";
import PageTitle from "@/components/sections/page-title";
import Paragraph from "@/components/sections/paragraph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title:
    "Roadmap · Funzionalità del gestionale per studio di Pilates",
  description:
    "Una lista delle attività in programma e su cui stiamo lavorando attivamente per il gestionale di studi di Pilates o Yoga",
};

export default function Roadmap() {
  return (
    <>
      <PageTitle subtitle="Roadmap" title="Su cosa stiamo lavorando" />
      <div className="bg-card text-card-foreground">
        <Paragraph
          cta={false}
          subtitle={false}
          title="In questo momento"
          body="Una panoramica veloce di ciò su cui stiamo lavorando attivamente e che sarà presto disponibile."
          bgColor="bg-card"
          textColor="text-card-foreground"
        />
        <div className="px-6 lg:px-12 pb-24 lg:pb-36 max-w-[1280px] mx-auto">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>Gestione contenuti</AccordionTrigger>
              <AccordionContent>
                Ottieni il pieno controllo sui contenuti del tuo sito web: con
                questa funzionalità puoi effettuare eventuali modifiche al tuo
                sito senza dover dipendere da noi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Notifiche al cliente</AccordionTrigger>
              <AccordionContent>
                I tuoi clienti possono essere sempre avvisati per eventuali
                modifiche o cancellazioni.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Notifiche all&apos;istruttore</AccordionTrigger>
              <AccordionContent>
                Rimani aggiornato in tempo reale su iscrizioni, cancellazioni
                dell&apos;ultimo minuto o comunicazioni.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Social Media Bundle</AccordionTrigger>
              <AccordionContent>
                Un set di post e storie di Instagram dall&apos;estetica
                accattivante e pronti per l&apos;uso, a cui devi solo aggiungere
                i tuoi testi e le tue immagini.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="bg-light text-light-foreground">
        <Paragraph
          cta={false}
          subtitle={false}
          title="In programma"
          body="Una lista di ciò che abbiamo in programma di implementare nel prossimo futuro."
          bgColor="bg-light"
          textColor="text-light-foreground"
        />
        <div className="px-6 lg:px-12 pb-24 lg:pb-36 max-w-[1280px] mx-auto">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>Pagamenti</AccordionTrigger>
              <AccordionContent>
                Vendi i pacchetti direttamente dal tuo sito web, accetta
                pagamenti online in modo semplice e veloce.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Statistiche</AccordionTrigger>
              <AccordionContent>
                Pacchetti più venduti, rating di cancellazione, numero di nuovi
                utenti. Ottieni informazioni utili sul tuo studio e misura
                facilmente il tuo successo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Gestione collaboratori</AccordionTrigger>
              <AccordionContent>
                Aggiungi il tuo staff e indica l&apos;insegnante in ciascuna
                lezione.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Gestione abbonamenti</AccordionTrigger>
              <AccordionContent>
                Gestisci gli abbonamenti mensili o annuali del tuo studio con
                facilità: crea, modifica, rinnova o assegna agli utenti.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Integrazione calendario</AccordionTrigger>
              <AccordionContent>
                Integra il calendario Classifit nel tuo sito web attuale o
                condividilo facilmente sulle tue piattaforme social.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <About
        title="Vuoi suggerire una funzionalità?"
        body="Vuoi far parte della realizzazione di Classifit? Scrivici su Instagram o via email per suggerirci funzionalità del gestionale che potrebbero esserti utili."
      />
    </>
  );
}
