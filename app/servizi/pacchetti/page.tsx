import type { Metadata } from "next";
import DoubleImages from "@/components/sections/double-img";
import ServiceAbout from "@/components/sections/services/service-about";
import ServiceTitle from "@/components/sections/services/service-title";
import ServiceCard from "@/components/ui/service-card";

export const metadata: Metadata = {
  title:
    "Pacchetti a crediti · Gestionale per studio di Pilates",
  description:
    "Monitora con facilità tutti i pacchetti acquistati e tieni traccia del saldo residuo di crediti e della data di scadenza per ciascun cliente.",
};

export default function PackagesPage() {
  return (
    <>
      <ServiceTitle
        subtitle="Pacchetti a crediti"
        title="Monitora i pacchetti con facilità"
        description="Monitora con facilità tutti i pacchetti acquistati e tieni traccia del saldo residuo di crediti e della data di scadenza per ciascun cliente."
        bgColor="bg-[#6058E7]"
        image="/services/packages/pacchetti-cover.png"
      />
      <ServiceAbout
        subtitle="Monitora i tuoi pacchetti"
        title="Definisci nuove categorie di pacchetti specificando la loro durata e il numero di lezioni incluse. Assegna i pacchetti ai clienti che li hanno acquistati e monitorane l’utilizzo in qualunque momento."
      />
      <div className="bg-light text-light-foreground">
        <div className="px-6 lg:px-12 max-w-[1280px] mx-auto pt-10 pb-24 lg:pb-36 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Crea, modifica o elimina pacchetti"
              description="Crea tutti i pacchetti necessari e specifica durata, data di scadenza e numero di lezioni incluse."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Tieni traccia dell&apos;utilizzo dei pacchetti"
              description="Per ogni cliente visualizza i pacchetti attivi, quante lezioni sono state utilizzate e la data di scadenza."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Imposta una data di inizio personalizzata"
              description="Inizia subito, il prossimo mese o in qualunque data stabilita con il cliente."
            />
          </div>
        </div>
      </div>
      <DoubleImages
        bgColor1="bg-secondary"
        image1="/services/packages/package-image-1.png"
        alt1="Gestisci i pacchetti a crediti, visualizza il saldo dei crediti residui e la data di scadenza per ciascun cliente"
        bgColor2="bg-card"
        image2="/services/packages/package-image-2.png"
        alt2="Gestisci i pacchetti a crediti, visualizza il saldo dei crediti residui e la data di scadenza per ciascun cliente"
      />
    </>
  );
}
