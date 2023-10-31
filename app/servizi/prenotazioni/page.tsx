import type { Metadata } from "next";
import DoubleImages from "@/components/sections/double-img";
import ServiceAbout from "@/components/sections/services/service-about";
import ServiceTitle from "@/components/sections/services/service-title";
import ServiceCard from "@/components/ui/service-card";

export const metadata: Metadata = {
  title:
    "Prenotazioni online - Flusso di prenotazione online alle lezioni per i clienti del tuo studio di Pilates o Yoga",
  description:
    "Offri la possibilità di prenotarsi alle tue lezioni in completa autonomia attraverso un intuitivo e semplice flusso di prenotazione.",
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
        subtitle="Sistema di prenotazione"
        title="Tramite il flusso di prenotazione online i tuoi clienti possono selezionare le lezioni che preferiscono dal calendario e prenotarsi in autonomia, riducendo il tuo tempo di gestione degli iscritti a zero."
      />
      <div className="bg-light text-light-foreground">
        <div className="px-12 max-w-[1280px] mx-auto pt-10 pb-36 grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <ServiceCard
              title="Inserisci i dettagli delle tue lezioni"
              description="Personalizza data, orario, numero massimo di iscritti, luogo e termini di cancellazione."
            />
          </div>
          <div className="col-span-6">
            <ServiceCard
              title="Monitora gli iscritti ad una lezione"
              description="Visualizza gli iscritti alla prossima lezione in qualunque momento tramite il nostro gestionale."
            />
          </div>
          <div className="col-span-6">
            <ServiceCard
              title="Offri un servizio clienti impeccabile"
              description="Per i tuoi clienti è presente un'area personale in cui è possibile monitorare le iscrizioni e i pacchetti attivi."
            />
          </div>
          <div className="col-span-6">
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
