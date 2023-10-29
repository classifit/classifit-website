import Image from "next/image";
import PackageCard from "../ui/package-card";

export default function Packages() {
  return (
    <div className="bg-dark text-dark-foreground">
      <section>
        <div className="flex gap-4">
          <div className="w-1/3">
            <PackageCard
              title="Pacchetto Sito Web"
              services={[
                "Chiamata conoscitiva",
                "Moodboard - Color Palette - Font",
                "Grafica statica",
                "Sviluppo",
                "SEO",
                "Adattamento per mobile",
              ]}
              additions={["+ Servizi aggiuntivi a scelta"]}
              bgColor="bg-light"
              textColor="text-light-foreground"
              mutedColor="text-muted-foreground"
            />
          </div>
          <div className="w-1/3">
            <PackageCard
              title="Pacchetto Gestionale"
              services={[
                "Chiamata conoscitiva",
                "Gestione calendario",
                "Gestione pacchetti e clienti",
                "Trasferimento dati - Anche cartacei",
                "Account per collaboratori",
                "Onboarding e tutorial",
              ]}
              additions={["+ Servizi aggiuntivi a scelta"]}
              bgColor="bg-light"
              textColor="text-light-foreground"
              mutedColor="text-muted-foreground"
            />
          </div>
          <div className="w-1/3">
            <PackageCard
              title="Sito Web + Gestionale"
              services={[
                "Servizi del pacchetto Sito Web",
                "Servizi del pacchetto gestionale",
              ]}
              additions={[
                "+ Calendario lezioni pubblico",
                "+ Prenotazioni online",
                "+ Area personale del cliente",
                "+ Servizi aggiuntivi a scelta",
              ]}
              bgColor="bg-primary"
              textColor="text-primary-foreground"
              mutedColor="text-white/60"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-36 gap-12">
          <div className="w-4/5">
            <h1 className="font-medium">La nostra garanzia ci rende unici</h1>
            <div className="py-2" />
            <p className="text-white/60">
              La tua soddisfazione è la nostra priorità. Ecco perché in tutti i
              pacchetti sono compresi supporto 24/24h per te e per i tuoi
              clienti, e una garanzia di rimborso al 100%. Nel migliore dei casi
              porti il tuo studio ad un livello superiore, nel peggiore non hai
              perso nulla. Nessun rischio.
            </p>
          </div>
          <div className="w-1/5">
            <Image
              src="/guarantee.svg"
              width="194"
              height="92"
              alt="I nostri servizi hanno una garanzia del 100% di rimborso se non soddisfatti del servizio"
              className="ml-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
