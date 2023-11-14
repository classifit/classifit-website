import type { Metadata } from "next";
import DoubleImages from "@/components/sections/double-img";
import ServiceAbout from "@/components/sections/services/service-about";
import ServiceTitle from "@/components/sections/services/service-title";
import ServiceCard from "@/components/ui/service-card";

export const metadata: Metadata = {
  title: "Sito su misura · Gestionale per studio di Pilates",
  description:
    "Potenzia la tua presenza online e distingui il tuo marchio con un sito web bello e funzionale, su misura per l'identità del tuo studio.",
  alternates: {
    canonical: "https://www.classi.fit/servizi/sito-su-misura",
  },
  openGraph: {
    title: "Sito su misura · Gestionale per studio di Pilates",
    description:
      "Potenzia la tua presenza online e distingui il tuo marchio con un sito web bello e funzionale, su misura per l'identità del tuo studio.",
    type: "website",
    url: "https://www.classi.fit/servizi/sito-su-misura",
  },
};

export default function Website() {
  return (
    <>
      <ServiceTitle
        subtitle="Sito su misura"
        title="Potenzia la tua identità online"
        description="Potenzia la tua presenza online e distingui il tuo marchio con un sito web bello e funzionale, su misura per l'identità del tuo studio."
        bgColor="bg-card"
        image="/services/website/sito-cover.png"
      />
      <ServiceAbout
        subtitle="Sito web personalizzato"
        title="Progettiamo e realizziamo un sito web personalizzato per il tuo studio. Colori, tipografia, immagini, elementi grafici, tutto è studiato e curato nei minimi dettagli, su misura per esprimere la tua identità."
      />
      <div className="bg-light text-light-foreground">
        <div className="px-6 lg:px-12 max-w-[1280px] mx-auto pt-10 pb-24 lg:pb-36 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Creiamo insieme il design perfetto per te"
              description="Color palette, caratteri tipografici, contenuti. Progettiamo insieme tutto ciò che rende tuo il tuo sito."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Sviluppo veloce e performante"
              description="Sviluppiamo il tuo sito con le migliori tecnologie, in meno di qualche giorno."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Modifica in autonomia i tuoi contenuti"
              description="Hai delle nuove fotografie? Non devi dipendere da noi per fare delle modifiche ai contenuti del tuo sito."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Integrazione con il servizio di prenotazione"
              description='Se presente nel tuo pacchetto, viene integrato nel sito il calendario pubblico con il sistema di prenotazione online.'
            />
          </div>
        </div>
      </div>
      <DoubleImages
        bgColor1="bg-secondary"
        image1="/services/website/website-img-1.png"
        alt1="Sito web su misura per il tuo studio"
        marginLeft="lg:-ml-[10rem]"
        bgColor2="bg-card"
        image2="/services/website/website-img-2.png"
        alt2="Sito web su misura per il tuo studio"
      />
    </>
  );
}
