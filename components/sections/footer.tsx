import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <section>
        <div className="lg:flex justify-between">
          <div>
            <div className="flex flex-col gap-6">
              <Link
                className="menu-link"
                href="https://www.iubenda.com/privacy-policy/40888749"
                target="_blank"
              >
                Privacy Policy
              </Link>
              <Link
                className="menu-link"
                href="https://www.iubenda.com/privacy-policy/40888749/cookie-policy"
                target="_blank"
              >
                Cookie Policy
              </Link>
              <Link
                className="menu-link"
                href="mailto:classifit.studio@gmail.com"
              >
                classifit.studio@gmail.com
              </Link>
            </div>
            <div className="py-6" />
            <Image
              src="/classifit.svg"
              width="101"
              height="24"
              alt="Logo orizzontale di Classifit"
            />
          </div>
          <div className="flex flex-col gap-6 mt-16 lg:mt-0">
            <p className="text-sm">Servizi</p>
            <Link className="menu-link" href="/servizi/gestionale">
              Gestionale
            </Link>
            <Link className="menu-link" href="/servizi/prenotazioni">
              Prenotazioni
            </Link>
            <Link className="menu-link" href="/servizi/sito-su-misura">
              Sito su misura
            </Link>
            <Link className="menu-link" href="/servizi/supporto-tecnico">
              Supporto tecnico
            </Link>
            <Link className="menu-link" href="/servizi/servizi-aggiuntivi">
              Servizi aggiuntivi
            </Link>
          </div>
          <div className="flex flex-col gap-6 mt-16 lg:mt-0">
            <p className="text-sm">Risorse</p>
            <Link className="menu-link" href="/blog">
              Blog
            </Link>
            <Link className="menu-link" href="/roadmap">
              Roadmap
            </Link>
          </div>
          <div className="flex flex-col gap-6 mt-16 lg:mt-0">
            <p className="text-sm">Classifit</p>
            <Link className="menu-link" href="/studi">
              Studi
            </Link>
            <Link className="menu-link" href="/aiuto">
              Aiuto
            </Link>
            <Link
              className="menu-link"
              href="https://www.instagram.com/app.classi.fit/"
              target="_blank"
            >
              Instagram
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
