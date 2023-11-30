import Image from "next/image";
import PackageCard from "../ui/package-card";
import Paragraph from "./paragraph";

export default function Packages() {
  return (
    <>
      <div className="bg-dark text-dark-foreground">
        <div className="px-6 lg:px-12 py-24 lg:py-36 max-w-[1280px] mx-auto">
          <div className="flex justify-between gap-48">
            <p className="text-4xl leading-tight w-full lg:w-1/2 font-medium">
              Componi il tuo pacchetto
            </p>
            <p className="w-full lg:w-1/2 mt-6 lg:mt-0">
              Scegli i tuoi servizi e componi il tuo pacchetto su misura - Un
              unico costo iniziale e avrai accesso a vita, comprese tutte le
              nuove funzionalità.
            </p>
          </div>
          <div className="py-10" />
          <div className="lg:flex gap-4">
            <div className="w-full lg:w-1/3">
              <PackageCard
                number="1"
                services={["Sito su misura +", "Servizi aggiuntivi"]}
                bgColor="bg-light"
                textColor="text-light-foreground"
              />
            </div>
            <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
              <PackageCard
                number="2"
                services={["Gestionale +", "Prenotazioni +", "Sito su misura"]}
                bgColor="bg-secondary"
                textColor="text-light-foreground"
              />
            </div>
            <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
              <PackageCard
                number="3"
                services={["Gestionale +", "Prenotazioni"]}
                bgColor="bg-light"
                textColor="text-light-foreground"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
