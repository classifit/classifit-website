import DoubleImages from "@/components/sections/double-img";
import ServiceAbout from "@/components/sections/services/service-about";
import ServiceTitle from "@/components/sections/services/service-title";
import ServiceCard from "@/components/ui/service-card";

export default function AdditionalServices() {
  return (
    <>
      <ServiceTitle
        subtitle="Servizi aggiuntivi"
        title="Design, Social Media, Stampa"
        description="Branding, Graphic Design, Social Media Marketing, materiali promozionali: creiamo insieme tutto il necessario per il successo del tuo studio."
        bgColor="bg-ring"
        image="/services/additional/servizi-aggiuntivi-cover.png"
      />
      <ServiceAbout
        subtitle="Servizi di design"
        title="Hai bisogno di ulteriore materiale per la gestione del tuo studio? Possiamo creare per te qualunque materiale grafico di cui puoi aver bisogno - sia digitale che stampato."
      />
      <div className="bg-light text-light-foreground">
        <div className="px-12 max-w-[1280px] mx-auto pt-10 pb-36 grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <ServiceCard
              title="Logo e branding"
              description="Progettiamo il logo e l&apos;identità che esprimono a pieno il carattere del tuo studio."
            />
          </div>
          <div className="col-span-6">
            <ServiceCard
              title="Graphic Design"
              description="Volantini, poster, carte regalo, sticker. Possiamo realizzare tutti i materiali che ti vengono in mente."
            />
          </div>
          <div className="col-span-6">
            <ServiceCard
              title="Post social"
              description="Creiamo la grafica per i post delle tue piattaforme social, in linea con l&apos;identità del tuo studio."
            />
          </div>
        </div>
      </div>
      <DoubleImages />
    </>
  );
}
