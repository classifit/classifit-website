import type { Metadata } from "next";
import PageTitle from "@/components/sections/page-title";
import Image from "next/image";
import Link from "next/link";
import TextAndImage from "@/components/sections/text-and-image";

export const metadata: Metadata = {
  title: "Blog · Dietro le quinte del gestionale per studio di Pilates",
  description:
    "Dietro le quinte di Classifit - Gestionale per studio di Pilates o Yoga",
  alternates: {
    canonical: "https://www.classi.fit/blog",
  },
  openGraph: {
    title: "Blog · Dietro le quinte del gestionale per studio di Pilates",
    description:
      "Dietro le quinte di Classifit - Gestionale per studio di Pilates o Yoga",
    type: "website",
    url: "https://www.classi.fit/blog",
  },
};

export default function Blog() {
  return (
    <>
      <PageTitle subtitle="Blog" title="Dietro le quinte" />
      <div className="bg-light text-light-foreground">
        <section>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 group">
              <Link href="/blog/building-classifit">
                <div className="flex flex-col gap-4 overflow-hidden">
                  <Image
                    src="/blog/building-classifit-cover.png"
                    width="1920"
                    height="1080"
                    alt="Copertina articolo - Building Classifit"
                    className="hover:scale-110 transition-all duration-300 ease-in-out rounded-[6px]"
                  />
                  <h3 className="font-medium group-hover:text-primary mt-4">
                    Building Classifit
                  </h3>
                  <p className="text-muted-foreground text-base">
                    Perché uno sviluppatore e una designer hanno deciso di
                    costruire un gestionale per studi di pilates
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <TextAndImage
        title="È un piacere conoscerti"
        body="Siamo Federico e Chiara. Uno sviluppatore e una designer di Brescia
            che si incontrano e - quasi inevitabilmente - decidono di creare
            qualcosa insieme. Forti della nostra esperienza lavorativa nel
            settore, il nostro obiettivo principale è portare valore,
            competenza, qualità e semplicità in ogni studio con cui abbiamo
            l’onore di collaborare."
        imgRight={false}
      />
    </>
  );
}
