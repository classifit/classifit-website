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
              title="Sito Web + Gestionale"
              services={[
                "Servizi del pacchetto Sito Web",
                "Servizi del pacchetto gestionale",
              ]}
              additions={[
                "+ Calendario lezioni pubblico",
                "+Sistema di prenotazione",
                "+Servizi aggiuntivi a scelta",
              ]}
              bgColor="bg-primary"
              textColor="text-primary-foreground"
              mutedColor="text-white/60"
            />
          </div>
          <div className="w-1/3">
            <PackageCard
              title="Pacchetto Gestionale"
              services={[
                "Chiamata conoscitiva",
                "Creazione credenziali di accesso",
                "Trasferimento dati - Anche cartacei",
                "Setup lezioni, pacchetti e clienti",
                "Accesso per collaboratori",
                "Onboarding e tutorial",
              ]}
              additions={["+ Servizi aggiuntivi a scelta"]}
              bgColor="bg-light"
              textColor="text-light-foreground"
              mutedColor="text-muted-foreground"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
