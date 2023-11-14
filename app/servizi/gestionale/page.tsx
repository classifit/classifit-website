import type { Metadata } from "next";
import DoubleImages from "@/components/sections/double-img";
import ServiceAbout from "@/components/sections/services/service-about";
import ServiceTitle from "@/components/sections/services/service-title";
import ServiceCard from "@/components/ui/service-card";

export const metadata: Metadata = {
  title: "Gestionale · Gestionale per studio di Pilates",
  description:
    "Tieni sotto controllo tutto ciò che riguarda il tuo studio con il portale web che ti permette di gestire clienti, lezioni, iscritti e pacchetti.",
  alternates: {
    canonical: "https://www.classi.fit/servizi/gestionale",
  },
  openGraph: {
    title: "Gestionale · Gestionale per studio di Pilates",
    description:
      "Tieni sotto controllo tutto ciò che riguarda il tuo studio con il portale web che ti permette di gestire clienti, lezioni, iscritti e pacchetti.",
    type: "website",
    url: "https://www.classi.fit/servizi/gestionale",
  },
};

export default function Erp() {
  return (
    <>
      <ServiceTitle
        subtitle="Gestionale"
        title="Gestione complessa - Resa semplice"
        description="Tieni sotto controllo tutto ciò che riguarda il tuo studio con il portale web che ti permette di gestire clienti, lezioni, iscritti e pacchetti."
        bgColor="bg-[#6058E7]"
        image="/services/erp/erp-cover.png"
      />
      <ServiceAbout
        subtitle="Il tuo portale web personale"
        title="Organizza le tue lezioni, monitora gli iscritti alle lezioni e i relativi pacchetti attivi, tieni sotto controllo gli acquisti. Tutte le informazioni del tuo studio sono a portata di click."
      />
      <div className="bg-light text-light-foreground">
        <div className="px-6 lg:px-12 max-w-[1280px] mx-auto pt-10 pb-24 lg:pb-36 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Tutte ciò che serve, in un unico posto"
              description="Calendario lezioni, iscritti, pacchetti, acquisti - Trova tutto ciò che ti serve velocemente e senza stress."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Funzionalità personalizzate"
              description="Il tuo studio ha una necessità particolare? Implementiamo funzionalità personalizzate a costo zero."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Sincronizzazione automatica"
              description="Se presente nel tuo pacchetto, lezioni e iscritti sono sincronizzati automaticamente con il servizio di prenotazione per i tuoi clienti."
            />
          </div>
        </div>
      </div>
      <DoubleImages
        bgColor1="bg-card"
        image1="/services/erp/erp-image-1.png"
        alt1="Tieni sotto controllo tutto ciò che riguarda il tuo studio con il portale web che ti permette di gestire clienti, lezioni, iscritti e pacchetti."
        bgColor2="bg-secondary"
        image2="/services/erp/erp-image-2.png"
        alt2="Tieni sotto controllo tutto ciò che riguarda il tuo studio con il portale web che ti permette di gestire clienti, lezioni, iscritti e pacchetti."
      />
    </>
  );
}
