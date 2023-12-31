import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="max-w-[1280px] px-6 lg:px-12 pt-36 pb-20 lg:pt-48 lg:pb-36 mx-auto bg-primary text-primary-foreground">
      <div className="md:w-3/4">
        <h1 className="text-5xl lg:text-7xl font-medium overflow-y-hidden">
          Porta il tuo studio al prossimo livello
        </h1>
        <div className="py-4" />
        <p className="lg:w-2/3">
          Gestionale per studi di pilates, prenotazioni online, siti web su
          misura. Come tuoi partner digitali, miglioriamo la gestione del tuo
          studio così che tu possa concentrarti su ciò che ami di più: insegnare
          e ispirare.
        </p>
        <div className="py-10" />
        <Link href="mailto:classifit.studio@gmail.com">
          <Button variant="secondary">
            Contattaci - Senza impegno
            <ArrowRightIcon className="ml-3 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
