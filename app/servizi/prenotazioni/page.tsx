import type { Metadata } from "next";
import DoubleImages from "@/components/sections/double-img";
import ServiceAbout from "@/components/sections/services/service-about";
import ServiceTitle from "@/components/sections/services/service-title";
import ServiceCard from "@/components/ui/service-card";

export const metadata: Metadata = {
  title: "Prenotazioni online · Gestionale per studio di Pilates",
  description:
    "Offri la possibilità di prenotarsi alle tue lezioni in completa autonomia attraverso un intuitivo e semplice flusso di prenotazione.",
  alternates: {
    canonical: "https://www.classi.fit/servizi/prenotazioni",
  },
  openGraph: {
    title: "Prenotazioni online · Gestionale per studio di Pilates",
    description:
      "Offri la possibilità di prenotarsi alle tue lezioni in completa autonomia attraverso un intuitivo e semplice flusso di prenotazione.",
    type: "website",
    url: "https://www.classi.fit/servizi/prenotazioni",
  },
};

export default function Bookings() {
  return (
    <>
      <ServiceTitle
        subtitle="Prenotazioni"
        title="Sistema di prenotazione online per i tuoi clienti"
        description="Offri la possibilità di prenotarsi alle tue lezioni in completa autonomia attraverso un intuitivo e semplice flusso di prenotazione."
        bgColor="bg-secondary"
        image="/services/booking/prenotazioni-cover.png"
      />
      <ServiceAbout
        subtitle="Sistema di prenotazione e area riservata"
        title="Tramite il flusso di prenotazione online i tuoi clienti possono selezionare le lezioni che preferiscono dal calendario e prenotarsi in autonomia, riducendo il tempo di gestione degli iscritti a zero."
      />
      <div className="bg-light text-light-foreground">
        <div className="px-6 lg:px-12 max-w-[1280px] mx-auto pt-10 pb-24 lg:pb-36 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Offri un servizio clienti impeccabile"
              description="Aumenta il valore del tuo studio offrendo ai tuoi clienti una piattaforma di gestione online personale."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Account e area riservata"
              description="Per i tuoi clienti è presente un'area personale in cui è possibile monitorare le iscrizioni e i pacchetti attivi."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Sincronizzazione automatica"
              description="Clienti, lezioni e iscritti sono sincronizzati automaticamente con il tuo gestionale."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title='"Avvisami quando si libera un posto"'
              description="Possibilità per i clienti di ricevere una notifica quando si libera un posto nelle lezioni al completo."
            />
          </div>
        </div>
      </div>
      <DoubleImages
        bgColor1="bg-card"
        image1="/services/booking/booking-image-1.png"
        alt1="Flusso di prenotazione alle lezioni per i tuoi clienti tramite il calendario di Classifit"
        bgColor2="bg-secondary"
        image2="/services/booking/booking-image-2.png"
        alt2="Flusso di prenotazione alle lezioni per i tuoi clienti tramite il calendario di Classifit"
      />
    </>
  );
}
