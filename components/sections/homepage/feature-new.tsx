import FeatureCard from "./feature-card";

export default function FeatureNew() {
  const features = [
    {
      id: 1,
      title: "Gestionale",
      description:
        "Tieni sotto controllo tutto ciò che riguarda il tuo studio con il portale web che ti permette di gestire clienti, lezioni, iscritti e pacchetti.",
      link: "/servizi/gestionale",
      img: "/services/erp/erp-cover.png",
      bgColor: "bg-secondary",
      textColor: "text-dark",
      mutedColor: "text-muted-foreground",
      width: "w-full",
    },
    {
      id: 2,
      title: "Prenotazioni",
      description:
        "Offri ai tuoi clienti la possibilità di prenotarsi alle lezioni in completa autonomia attraverso un intuitivo e semplice sistema di prenotazione.",
      link: "/servizi/prenotazioni",
      img: "/services/booking/prenotazioni-cover.png",
      bgColor: "bg-[#6058E7]",
      textColor: "text-primary-foreground",
      mutedColor: "text-white/60",
      width: "w-full",
    },
    {
      id: 3,
      title: "Sito su misura",
      description:
        "Potenzia la tua presenza online e distingui il tuo marchio con un sito web bello e funzionale, su misura per l'identità del tuo studio.",
      link: "/servizi/sito-su-misura",
      img: "/services/website/sito-cover.png",
      bgColor: "bg-card",
      textColor: "text-dark",
      mutedColor: "text-muted-foreground",
      width: "w-full",
    },
    {
      id: 4,
      title: "Supporto tecnico",
      description:
        "Lascia fare a noi: digitalizziamo o trasferiamo i tuoi dati attuali, e ti affianchiamo durante tutta l'implementazione dei nuovi servizi.",
      link: "/servizi/supporto-tecnico",
      bgColor: "bg-dark",
      textColor: "text-dark-foreground",
      mutedColor: "text-white/60",
      width: "w-1/2",
    },
    {
      id: 5,
      title: "Supporto grafico",
      description:
        "Branding, Graphic Design, Social Media Marketing, materiali promozionali: creiamo insieme tutto il necessario per il successo del tuo studio.",
      link: "/servizi/servizi-aggiuntivi",
      bgColor: "bg-ring",
      textColor: "text-dark",
      mutedColor: "text-dark/60",
      width: "w-1/2",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <section>
          <div className="flex flex-wrap">
            {features.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
