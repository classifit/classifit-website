import Image from "next/image";
import MenuItem from "../ui/menu-item";
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
  ArrowRightIcon
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-[1280px] px-12 py-6 bg-primary mx-auto">
      <div className="flex items-center gap-12">
        <Image
          src="/classifit.svg"
          width="101"
          height="24"
          alt="Logo orizzontale di Classifit"
          priority
        />
        <DropdownMenu>
          <DropdownMenuTrigger className="opacity-60 hover:opacity-100 text-sm">
            Servizi
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-1">
            <DropdownMenuItem className="group">
              <TimerIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
              Prenotazioni
            </DropdownMenuItem>
            <DropdownMenuItem className="group">
              <CalendarIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
              Palinsesto
            </DropdownMenuItem>
            <DropdownMenuItem className="group">
              <ArchiveIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
              Pacchetti a crediti
            </DropdownMenuItem>
            <DropdownMenuItem className="group">
              <DesktopIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
              Sito su misura
            </DropdownMenuItem>
            <DropdownMenuItem className="group">
              <StarIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
              Servizi aggiuntivi
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <MenuItem text="Studi" link="#" />
        <DropdownMenu>
          <DropdownMenuTrigger className="opacity-60 hover:opacity-100 text-sm">
            Risorse
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-1">
            <DropdownMenuItem className="group">
              <TimerIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
              Blog
            </DropdownMenuItem>
            <DropdownMenuItem className="group">
              <CalendarIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
              Roadmap
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <MenuItem text="Aiuto" link="#" />
        <MenuItem text="@app.classi.fit" link="#" />
      </div>
      <div className="flex items-center gap-12">
        <MenuItem text="Accedi" link="#" />
        <Button variant="secondary">Contattaci<ArrowRightIcon className="ml-3 h-4 w-4" /></Button>
      </div>
    </nav>
  );
}
