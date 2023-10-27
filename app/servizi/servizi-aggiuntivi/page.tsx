import DoubleImages from "@/components/sections/double-img";
import ServiceAbout from "@/components/sections/services/service-about";
import ServiceTitle from "@/components/sections/services/service-title";
import ServiceCard from "@/components/ui/service-card";

export default function AdditionalServices() {
  return (
    <>
      <ServiceTitle
        subtitle="Servizi aggiuntivi"
        title="Prenotazioni in autonomia per i tuoi clienti"
        description="Un intero sistema che permette ai tuoi clienti di iscriversi in totale auonomia alle lezioni, riducendo il tempo di gestione delle iscrizioni a zero."
      />
      <ServiceAbout
        subtitle="La tua agenda personale"
        title="Organizza tutte le tue lezioni e compila la tua agenda personale. Aggiungi, sposta o annulla gli incontri a seconda delle tue esigenze, in qualunque momento e con pochi click, senza stress di gestione."
      />
      <div className="bg-light text-light-foreground">
        <div className="px-12 max-w-[1280px] mx-auto pt-10 pb-36 grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <ServiceCard
              title="Crea, modifica o annulla le lezioni"
              description="Compila la tua agenda personale e modifica o annulla qualunque lezione, in qualunque momento."
            />
          </div>
          <div className="col-span-6">
            <ServiceCard
              title="Crea, modifica o annulla le lezioni"
              description="Compila la tua agenda personale e modifica o annulla qualunque lezione, in qualunque momento."
            />
          </div>
          <div className="col-span-6">
            <ServiceCard
              title="Crea, modifica o annulla le lezioni"
              description="Compila la tua agenda personale e modifica o annulla qualunque lezione, in qualunque momento."
            />
          </div>
        </div>
      </div>
      <DoubleImages />
    </>
  );
}
