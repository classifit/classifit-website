import type { Metadata } from "next";
import DoubleImages from "@/components/sections/double-img";
import ServiceAbout from "@/components/sections/services/service-about";
import ServiceTitle from "@/components/sections/services/service-title";
import ServiceCard from "@/components/ui/service-card";

export const metadata: Metadata = {
  title: "Supporto tecnico · Gestionale per studio di Pilates",
  description:
    "Potenzia la tua presenza online e distingui il tuo marchio con un sito web bello e funzionale, su misura per l'identità del tuo studio.",
  alternates: {
    canonical: "https://www.classi.fit/servizi/supporto-tecnico",
  },
  openGraph: {
    title: "Supporto tecnico · Gestionale per studio di Pilates",
    description:
      "Potenzia la tua presenza online e distingui il tuo marchio con un sito web bello e funzionale, su misura per l'identità del tuo studio.",
    type: "website",
    url: "https://www.classi.fit/servizi/supporto-tecnico",
  },
};

export default function Support() {
  return (
    <>
      <ServiceTitle
        subtitle="Supporto tecnico"
        title="Noi siamo al tuo fianco"
        description="Lascia fare a noi: digitalizziamo o trasferiamo i tuoi dati attuali, e ti affianchiamo durante tutta l'implementazione dei nuovi servizi."
        bgColor="bg-dark"
        image="/services/support/cover-supporto-tecnico.png"
      />
      <ServiceAbout
        subtitle="Digitalizzazione e supporto"
        title="Digitalizziamo o trasferiamo i tuoi dati attuali, facciamo il primo setup del gestionale, forniamo supporto e documentazione a te e ai tuoi clienti. Tu non devi preoccuparti di nulla."
      />
      <div className="bg-light text-light-foreground">
        <div className="px-6 lg:px-12 max-w-[1280px] mx-auto pt-10 pb-24 lg:pb-36 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Migrazione e digitalizzazione dei dati"
              description="Trasferiamo i tuoi dati sul gestionale, anche tramite script specifici per il tuo studio."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Setup del gestionale"
              description="Completiamo insieme a te la prima impostazione del gestionale così che tu possa essere già pronto a partire."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Supporto per te e i tuoi clienti"
              description="Siamo disponibili 24/24h per qualunque dubbio, via chiamata o Whatsapp, sia per te che per i tuoi clienti."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ServiceCard
              title="Documentazione"
              description='Forniamo tutta la documentazione scritta necessaria per usare al meglio i nostri servizi.'
            />
          </div>
        </div>
      </div>
      <DoubleImages
        bgColor1="bg-card"
        image1="/services/support/support-image-1.png"
        alt1="Digitalizziamo o trasferiamo i dati del tuo studio di pilates"
        bgColor2="bg-secondary"
        image2="/services/support/support-image-2.png"
        alt2="Facciamo insieme a te il setup del gestionale per il tuo studio di pilates"
      />
    </>
  );
}
