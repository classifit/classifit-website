import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="max-w-[1280px] px-12 py-36 mx-auto bg-primary text-primary-foreground">
      <div className="w-3/4">
        <h1 className="text-7xl font-semibold">
          Porta il tuo studio al prossimo livello
        </h1>
        <div className="py-4" />
        <p className="w-2/3">
          Gestisci lezioni, pacchetti, clienti e potenzia la tua identità e la
          tua presenza online - Tutto con la stessa piattaforma
        </p>
        <div className="py-10" />
        <Link href="#">
          <Button variant="secondary">
            Contattaci - Senza impegno
            <ArrowRightIcon className="ml-3 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
