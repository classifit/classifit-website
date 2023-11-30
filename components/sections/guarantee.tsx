import Image from "next/image";

export default function Guarantee() {
  return (
    <div className="bg-dark text-dark-foreground">
      <section>
        <div className="lg:flex items-center justify-between gap-12">
          <div className="w-full lg:w-4/5">
            <p className="font-medium text-4xl leading-tight">
              La nostra garanzia ci rende unici
            </p>
            <div className="py-2" />
            <p className="text-white/60">
              La tua soddisfazione è la nostra priorità. Ecco perché in tutti i
              pacchetti sono compresi supporto 24/24h per te e per i tuoi
              clienti, e una garanzia di rimborso al 100%. Nel migliore dei casi
              porti il tuo studio ad un livello superiore, nel peggiore non hai
              perso nulla. Nessun rischio.
            </p>
          </div>
          <div className="w-full lg:w-1/5">
            <Image
              src="/guarantee.svg"
              width="194"
              height="92"
              alt="I nostri servizi hanno una garanzia del 100% di rimborso se non soddisfatti del servizio"
              className="lg:ml-auto mt-8 lg:mt-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
