import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CalendarIcon,
  DesktopIcon,
  TimerIcon,
  ArchiveIcon,
  StarIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-[1280px] px-12 py-6 bg-primary mx-auto">
      <div className="flex items-center gap-12">
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity duration-200 ease-in-out"
        >
          <Image
            src="/classifit.svg"
            width="101"
            height="24"
            alt="Logo orizzontale di Classifit"
            priority
          />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="opacity-60 hover:opacity-100 text-sm">
            Servizi
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-1">
            <Link href="/servizi/prenotazioni">
              <DropdownMenuItem className="group cursor-pointer">
                <TimerIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                Prenotazioni
              </DropdownMenuItem>
            </Link>
            <Link href="/servizi/calendario">
              <DropdownMenuItem className="group cursor-pointer">
                <CalendarIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                Calendario lezioni
              </DropdownMenuItem>
            </Link>
            <Link href="/servizi/pacchetti">
              <DropdownMenuItem className="group cursor-pointer">
                <ArchiveIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                Pacchetti a crediti
              </DropdownMenuItem>
            </Link>
            <Link href="/servizi/sito-su-misura">
              <DropdownMenuItem className="group cursor-pointer">
                <DesktopIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                Sito su misura
              </DropdownMenuItem>
            </Link>
            <Link href="/servizi/servizi-aggiuntivi">
              <DropdownMenuItem className="group cursor-pointer">
                <StarIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                Servizi aggiuntivi
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link className="menu-link" href="/studi">
          Studi
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="opacity-60 hover:opacity-100 text-sm">
            Risorse
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-1">
            <Link href="/blog">
              <DropdownMenuItem className="group cursor-pointer">
                <TimerIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                Blog
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="group">
              <CalendarIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
              Roadmap
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link className="menu-link" href="/aiuto">
          Aiuto
        </Link>
        <Link
          className="menu-link"
          href="https://www.instagram.com/app.classi.fit/"
          target="_blank"
        >
          @app.classi.fit
        </Link>
      </div>
      <div className="flex items-center gap-12">
        <Link className="menu-link" href="#">
          Accedi
        </Link>
        <Link href="mailto:classifit.studio@gmail.com">
          <Button variant="secondary">
            Contattaci
            <ArrowRightIcon className="ml-3 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </nav>
  );
}
