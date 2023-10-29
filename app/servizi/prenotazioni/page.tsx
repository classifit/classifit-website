import DoubleImages from "@/components/sections/double-img";
import ServiceAbout from "@/components/sections/services/service-about";
import ServiceTitle from "@/components/sections/services/service-title";
import ServiceCard from "@/components/ui/service-card";

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
              title="&quot;Avvisami quando si libera un posto&quot;"
              description="Possibilità per i clienti di ricevere una notifica quando si libera un posto nelle lezioni al completo."
            />
          </div>
        </div>
      </div>
      <DoubleImages />
    </>
  );
}
