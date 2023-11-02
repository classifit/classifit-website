import type { Metadata } from "next";
import DoubleImages from "@/components/sections/double-img";
import ServiceAbout from "@/components/sections/services/service-about";
import ServiceTitle from "@/components/sections/services/service-title";
import ServiceCard from "@/components/ui/service-card";

export const metadata: Metadata = {
  title:
    "Calendario lezioni - Gestisci le lezioni del tuo studio con il gestionale per studio di Pilates o Yoga",
  description:
    "Pianifica le lezioni in programma nel tuo calendario personale per garantire una giornata senza intoppi e massimizzare i tuoi guadagni.",
};

export default function Calendar() {
  return (
    <>
      <ServiceTitle
        subtitle="Calendario lezioni"
        title="Pianificazione complessa - Resa semplice"
        description="Pianifica le lezioni in programma nel tuo calendario personale per garantire una giornata senza intoppi e massimizzare i tuoi guadagni."
        bgColor="bg-dark"
        image="/services/calendar/lezioni-calendario-cover.png"
      />
      <ServiceAbout
        subtitle="Il tuo calendario personale"
        title="Organizza tutte le tue lezioni e compila il tuo calendario personale. Aggiungi, sposta o annulla gli incontri a seconda delle tue esigenze, in qualunque momento e con pochi click, senza stress di gestione."
      />
      <div className="bg-light text-light-foreground">
        <div className="px-12 max-w-[1280px] mx-auto pt-10 pb-36 grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <ServiceCard
              title="Crea, modifica o annulla le lezioni"
              description="Compila il tuo calendario personale e modifica o annulla qualunque lezione, in qualunque momento."
            />
          </div>
          <div className="col-span-6">
            <ServiceCard
              title="Email e notifiche automatiche"
              description="Mantieni informati i tuoi clienti di eventuali modifiche al programma con messaggi automatizzati."
            />
          </div>
          <div className="col-span-6">
            <ServiceCard
              title="Crea lezioni ricorrenti"
              description="Alle 10:00 ogni ultimo venerdì del mese per i prossimi quattro mesi? Facile."
            />
          </div>
        </div>
      </div>
      <DoubleImages
        bgColor1="bg-card"
        image1="/services/calendar/calendar-image-1.png"
        alt1="Crea, modifica, annulla tutte le lezioni del tuo studio tramite il calendario di Classifit"
        bgColor2="bg-secondary"
        image2="/services/calendar/immagine-calendario-2.png"
        alt2="Crea, modifica, annulla tutte le lezioni del tuo studio tramite il calendario di Classifit"
        marginRight="ml-[8rem]"
      />
    </>
  );
}
