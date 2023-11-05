import type { Metadata } from "next";
import ArticleTitle from "@/components/sections/articles/article-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Building Classifit · Gestionale per studio di Pilates",
  description:
    "Come e perché uno sviluppatore e una designer hanno deciso di costruire un gestionale per studi di Pilates o Yoga",
  alternates: {
    canonical: "https://www.classi.fit/blog/building-classifit",
  },
  openGraph: {
    title: "Building Classifit · Gestionale per studio di Pilates",
    description:
      "Come e perché uno sviluppatore e una designer hanno deciso di costruire un gestionale per studi di Pilates o Yoga",
    type: "article",
    url: "https://www.classi.fit/blog/building-classifit",
  },
};

export default function Article() {
  return (
    <>
      <ArticleTitle />
      <div className="bg-[url('/blog/building-classifit-inside.png')] h-36 lg:h-72 lg:bg-fixed bg-center bg-no-repeat bg-cover" />
      <div className="bg-light text-light-foreground">
        <section>
          <div className="lg:w-2/3 mx-auto">
            <p className="text-2xl lg:text-center font-medium">
              È difficile pensare a qualcosa che ha più rilevanza oggi del
              benessere mentale e fisico.
            </p>
            <div className="py-6" />
            <p className="leading-8">
              Ecco perché il Pilates - una disciplina che si concentra
              sull’equilibrio tra mente e corpo - si è diffuso molto negli
              ultimi anni: con una semplice ricerca online risultano centinaia
              di video, corsi e studi disponibili in praticamente tutte le
              città.
              <br />
              <br />
              Qualche mese fa io e Federico, una web designer e uno
              sviluppatore, abbiamo avuto l’opportunità di collaborare con uno
              di questi studi di pilates per creare un gestionale personalizzato
              su misura per le loro esigenze. Questa esperienza ci ha permesso
              di comprendere i meccanismi e le migliori pratiche di questo
              settore, rivelando il fatto che anche altri istruttori hanno la
              crescente necessità di semplificare la gestione dei loro studi di
              pilates.
            </p>
            <hr className="my-16" />
            <h2 className="font-medium">
              Il difficile rapporto con carta e penna
            </h2>
            <div className="py-6" />
            <p className="leading-8">
              Abbiamo scoperto che la maggior parte dei piccoli-medi studi di
              pilates, infatti, decide di affidarsi a carta e penna o a
              strumenti non specifici per tenere traccia di iscrizioni,
              pacchetti attivi e clienti. Per quanto questa soluzione possa
              sembrare la migliore - soprattutto per uno studio appena avviato -
              nel tempo si manifestano una serie di problemi che possono
              compromettere la qualità dello studio e del servizio clienti.
              <br />
              <br />
              Da cosa derivano questi problemi? Perché molti istruttori non sono
              contenti della gestione manuale? Ci sono tre ragioni principali:
            </p>
            <div className="py-6" />
            <h3 className="font-medium">
              <span className="text-primary mr-4">1.</span>Stress e spreco di
              tempo
            </h3>
            <div className="py-2" />
            <p className="leading-8">
              Prendiamo in considerazione, ad esempio, solo le iscrizioni alle
              lezioni. Gestirle manualmente significa dover comunicare in modo
              efficiente gli orari delle lezioni ai clienti, raccogliere le loro
              adesioni e iscrizioni a mano, e notificare manualmente se le
              lezioni sono al completo o se ci sono cambiamenti o cancellazioni.
              Quando hai un numero crescente di clienti, questi processi
              richiedono molto tempo: Classifit ha stimato che, in totale, sono
              necessarie circa due ore al giorno per cinque giorni a settimana,
              ovvero 10 ore a settimana che potrebbero essere utilizzate in
              nuove lezioni o in tempo libero. E questo solo per un singolo
              aspetto della gestione di uno studio.
            </p>
            <div className="py-6" />
            <h3 className="font-medium">
              <span className="text-primary mr-4">2.</span>Errare è umano
            </h3>
            <div className="py-2" />
            <p className="leading-8">
              Gestire tutto manualmente implica dover raccogliere e organizzare
              ogni informazione in modo preciso e corretto, ma - poiché siamo
              tutti esseri umani - è impossibile farlo in modo impeccabile al
              100%. Anche solo segnare un nome al posto di un altro, ad esempio,
              potrebbe essere sufficiente per generare un errore nei dati e
              avere un cliente insoddisfatto.
            </p>
            <div className="py-6" />
            <h3 className="font-medium">
              <span className="text-primary mr-4">3.</span>Difficile
              reperibilità delle informazioni
            </h3>
            <div className="py-2" />
            <p className="leading-8">
              Se i dati di un cliente come i pacchetti acquistati, il numero di
              crediti residui dei pacchetti attivi o la lista delle sue
              iscrizioni non sono raccolti in maniera strutturata, accurata e
              uniforme, diventa complicato monitorare agevolmente le prestazioni
              dello studio e recuperare le informazioni - anche storiche -
              quando necessario.
            </p>
            <hr className="my-16" />
            <h2 className="font-medium">
              Perché non c&apos;è ancora una soluzione?
            </h2>
            <div className="py-6" />
            <p className="leading-8">
              Per quanto ogni istruttore di pilates ad un certo punto della sua
              carriera si ritrova ad affrontare questi problemi, ci sono
              numerosi fattori che frenano dal voler testare alcune delle
              soluzioni presenti sul mercato:
            </p>
            <p className="font-medium mt-6">
              Strumenti non su misura e senza servizi personalizzati
            </p>
            <p className="mt-2 leading-8">
              Molto spesso gli strumenti presenti online non sono adatti alle
              specifiche esigenze degli studi di pilates, offrendo un eccesso di
              funzionalità superflue per i gestori di queste attività. Inoltre,
              non forniscono un supporto diretto e personalizzato per
              l’istruttore.
            </p>
            <p className="font-medium mt-6">Strumenti troppo costosi</p>
            <p className="mt-2 leading-8">
              La maggior parte di questi strumenti richiedono un abbonamento
              mensile a lungo termine, costringendo gli istruttori a pagare
              continuamente senza sapere se il servizio è davvero adatto alle
              loro esigenze. Questo rischio spesso non vale la pena,
              specialmente per uno studio appena avviato.
            </p>
            <hr className="my-16" />
            <h2 className="font-medium">
              Vi presentiamo: <span className="text-primary">Classifit</span>
            </h2>
            <div className="py-6" />
            <p className="leading-8">
              Classifit è molto più di un semplice gestionale per studi di
              Pilates; è la soluzione completa per il tuo studio. Introduce un
              moderno sistema di gestione che risolve i problemi attuali del
              settore. Vogliamo lavorare a stretto contatto con te per fornirti
              una piattaforma che semplifichi la tua vita da istruttore, offra
              un servizio clienti impeccabile e ti distingua dagli altri studi:
              creiamo siti web personalizzati con servizi di prenotazione online
              e un’area riservata per i tuoi clienti, e offriamo un gestionale
              intuitivo e su misura per i bisogni di uno studio di pilates.
              <br />
              <br />
              Non vogliamo che tu debba dipendere da noi per tutta la vita del
              tuo studio: offriamo pacchetti componibili con un unico costo
              iniziale <strong>una tantum</strong> - Niente abbonamenti mensili
              o annuali. Inoltre, con tutti i nostri pacchetti è compresa una
              garanzia di rimborso al 100% e supporto 24/24h per te e per i tuoi
              clienti.
            </p>
            <p className="text-2xl font-medium mt-10">
              Il nostro obiettivo è portare valore, competenza, qualità e
              semplicità in ogni studio di Pilates con cui abbiamo l’onore di
              collaborare.
            </p>
            <div className="bg-secondary flex items-center justify-center mt-16">
              <Image
                src="/services/booking/booking-image-2.png"
                width="1280"
                height="830"
                alt="Classifit - Gestionale per studio di Pilates"
              />
            </div>
            <hr className="my-16" />
            <h1 className="font-medium">Vuoi maggiori informazioni?</h1>
            <div className="py-6" />
            <Link href="mailto:classifit.studio@gmail.com">
              <Button variant="default">
                Contattaci <ArrowRightIcon className="ml-3 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
