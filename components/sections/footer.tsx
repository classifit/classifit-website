import Image from "next/image";
import MenuItem from "../ui/menu-item";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <section>
        <div className="flex justify-between">
          <div>
            <div className="flex flex-col gap-6">
              <MenuItem link="#" text="Privacy Policy" />
              <MenuItem link="#" text="Cookie Policy" />
              <MenuItem link="#" text="classifit.studio@gmail.com" />
            </div>
            <div className="py-6" />
            <Image
              src="/classifit.svg"
              width="101"
              height="24"
              alt="Logo orizzontale di Classifit"
            />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-sm">Servizi</p>
            <MenuItem link="#" text="Prenotazioni" />
            <MenuItem link="#" text="Calendario lezioni" />
            <MenuItem link="#" text="Pacchetti a crediti" />
            <MenuItem link="#" text="Sito su misura" />
            <MenuItem link="#" text="Servizi aggiuntivi" />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-sm">Risorse</p>
            <MenuItem link="#" text="Blog" />
            <MenuItem link="#" text="Roadmap" />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-sm">Link utili</p>
            <MenuItem link="#" text="Studi" />
            <MenuItem link="#" text="Aiuto" />
            <MenuItem link="#" text="@app.classi.fit" />
          </div>
        </div>
      </section>
    </footer>
  );
}
