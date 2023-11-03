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
} from "@radix-ui/react-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolledUpwoards, setScrolledUpwoards] = useState(true);
  const [isTopScrolled, setIsTopScrolled] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    window.addEventListener("scroll", function () {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos >= currentScrollPos) {
        setScrolledUpwoards(true);
      } else {
        setScrolledUpwoards(false);
      }
      prevScrollPos = currentScrollPos;
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      if (isTopScrolled && window.scrollY > 100) {
        setIsTopScrolled(false);
      }
      if (!isTopScrolled && window.scrollY <= 50) {
        setIsTopScrolled(true);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isTopScrolled]);

  return (
    <>
      {/* // Desktop */}
      <nav
        className={`fixed w-full bg-primary text-primary-foreground z-50 ${
          scrolledUpwoards ? "translate-y-0" : "-translate-y-24"
        } transition-all duration-300 ease-in-out`}
      >
        <div
          className={`hidden lg:flex items-center justify-between max-w-[1280px] px-12 ${
            isTopScrolled ? "py-6" : "py-4"
          } mx-auto transition-all duration-300 ease-in-out`}
        >
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
        </div>
      </nav>

      {/* // Mobile */}
      <nav className="bg-primary text-primary-foreground">
        <div
          className={`flex lg:hidden items-center justify-between max-w-[1280px] px-6 ${
            isTopScrolled ? "py-6" : "py-4"
          } mx-auto transition-all duration-300 ease-in-out`}
        >
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
            <Sheet>
              <SheetTrigger asChild>
                <HamburgerMenuIcon className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
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
                  <SheetDescription>
                    <div className="flex flex-col gap-6 mt-16">
                      <Link href="mailto:classifit.studio@gmail.com">
                        Contattaci
                      </Link>
                      <Link href="https://app.classi.fit/">Accedi</Link>
                    </div>
                    <div className="flex">
                      <div className="w-2/3">
                        <div className="flex flex-col gap-8 mt-16">
                          <p className="text-sm">Servizi</p>
                          <SheetClose asChild>
                            <Link
                              href="/servizi/prenotazioni"
                              className="menu-link"
                            >
                              Prenotazioni
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="/servizi/calendario"
                              className="menu-link"
                            >
                              Calendario lezioni
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="/servizi/pacchetti"
                              className="menu-link"
                            >
                              Pacchetti a crediti
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="/servizi/sito-su-misura"
                              className="menu-link"
                            >
                              Sito su misura
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="/servizi/servizi-aggiuntivi"
                              className="menu-link"
                            >
                              Servizi aggiuntivi
                            </Link>
                          </SheetClose>
                        </div>
                      </div>
                      <div className="grow">
                        <div className="flex flex-col gap-8 mt-16">
                          <p className="text-sm">Risorse</p>
                          <SheetClose asChild>
                            <Link href="/blog" className="menu-link">
                              Blog
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="/roadmap" className="menu-link">
                              Roadmap
                            </Link>
                          </SheetClose>
                        </div>
                        <div className="flex flex-col gap-8 mt-8">
                          <p className="text-sm">Classifit</p>
                          <SheetClose asChild>
                            <Link href="/studi" className="menu-link">
                              Studi
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="/aiuto" className="menu-link">
                              Aiuto
                            </Link>
                          </SheetClose>
                        </div>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
