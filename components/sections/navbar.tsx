"use client";
import { usePathname } from "next/navigation";
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
  ChevronDownIcon,
  Pencil2Icon,
  RocketIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesMenu, setServicesMenu] = useState(false);
  const pathname = usePathname();
  return (
    <>
      {/* // Desktop */}
      <nav className="hidden lg:flex items-center justify-between max-w-[1280px] px-12 py-6 bg-primary mx-auto">
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
            <DropdownMenuTrigger
              className={`text-sm flex items-center ${
                pathname == "/servizi/prenotazioni" ||
                pathname == "/servizi/calendario" ||
                pathname == "/servizi/pacchetti" ||
                pathname == "/servizi/sito-su-misura" ||
                pathname == "/servizi/servizi-aggiuntivi"
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              Servizi
              <ChevronDownIcon className="ml-1 h-4 w-4" />
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
          <Link
            href="/studi"
            className={
              pathname == "/studi" ? "menu-link opacity-100" : "menu-link"
            }
          >
            Studi
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`text-sm flex items-center ${
                pathname == "/blog" ||
                pathname == "/roadmap" ||
                pathname == "/blog/building-classifit"
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              Risorse
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-1">
              <Link href="/blog">
                <DropdownMenuItem className="group cursor-pointer">
                  <Pencil2Icon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                  Blog
                </DropdownMenuItem>
              </Link>
              <Link href="/roadmap">
                <DropdownMenuItem className="group cursor-pointer">
                  <RocketIcon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                  Roadmap
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/aiuto"
            className={
              pathname == "/aiuto" ? "menu-link opacity-100" : "menu-link"
            }
          >
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
          <Link
            className="menu-link"
            href="https://app.classi.fit/"
            target="_blank"
          >
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

      {/* // Mobile */}
      <nav className="flex lg:hidden justify-between items-center max-w-[1280px] px-6 py-6 bg-primary mx-auto">
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
        <div className="flex gap-8 items-center">
          <Link href="mailto:classifit.studio@gmail.com">
            <Button variant="secondary">Contattaci</Button>
          </Link>
          <div onClick={() => setMobileMenu(true)}>
            <HamburgerMenuIcon className="h-6 w-6" />
          </div>
        </div>
        <div
          className={`h-screen w-full top-0 left-0 bg-primary text-primary-foreground z-50 transition-all duration-200 ease-in-out ${
            mobileMenu ? "fixed" : "hidden"
          }`}
        >
          <div className="px-6 py-6">
            <div className="flex justify-between items-center">
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
              <div className="flex gap-8 items-center">
                <Link href="mailto:classifit.studio@gmail.com">
                  <Button variant="secondary">Contattaci</Button>
                </Link>
                <div onClick={() => setMobileMenu(false)}>
                  <Cross1Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="py-10" />
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h3>Servizi</h3>
                <ChevronRightIcon className="h-6 w-6 text-white/60" />
              </div>
              <hr className="opacity-60" />
              <Link href="/studi" className="text-2xl" onClick={() => setMobileMenu(false)}>
                Studi
              </Link>
              <hr className="opacity-60" />
              <div className="flex justify-between items-center">
                <h3>Risorse</h3>
                <ChevronRightIcon className="h-6 w-6 text-white/60" />
              </div>
              <hr className="opacity-60" />
              <Link href="/aiuto" className="text-2xl" onClick={() => setMobileMenu(false)}>
                Aiuto
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
