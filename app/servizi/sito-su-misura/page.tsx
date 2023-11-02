import type { Metadata } from "next";
import DoubleImages from "@/components/sections/double-img";
import ServiceAbout from "@/components/sections/services/service-about";
import ServiceTitle from "@/components/sections/services/service-title";
import ServiceCard from "@/components/ui/service-card";

export const metadata: Metadata = {
  title:
    "Sito Web su misura - Progettazione di un sito web su misura per studio di Pilates o Yoga",
  description:
    "Potenzia la tua presenza online e distingui il tuo marchio con un sito web bello e funzionale, su misura per l'identità del tuo studio.",
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
              description="Dopo la creazione della grafica del sito web, potrai esaminarla e condividere i tuoi feedback con noi."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Modifica in autonomia i contenuti"
              description="Hai delle nuove fotografie? Non devi dipendere da noi per fare delle modifiche ai contenuti del tuo sito."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Calendario pubblico e prenotazioni online"
              description='Solo con il pacchetto "Sito web + Gestionale", viene integrato nel sito il calendario pubblico con il sistema di prenotazione online.'
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
        marginRight="lg:ml-[10rem]"
      />
    </>
  );
}
