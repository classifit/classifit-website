import About from "@/components/sections/about";
import PageTitle from "@/components/sections/page-title";
import Paragraph from "@/components/sections/paragraph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Help() {
  return (
    <>
      <PageTitle subtitle="Aiuto" title="Trova le risposte che cerchi" />
      <Paragraph
        cta={false}
        subtitle
        subtitleText="Domande & Risposte"
        title="Le domande più frequenti"
        body="Non ci sono domande stupide - qualunque sia il tuo dubbio, siamo a tua disposizione per chiarirlo. Qui sotto trovi una lista delle domande più frequenti per capire se Classifit è adatto a te e al tuo studio."
        bgColor="bg-light"
        textColor="text-light-foreground"
      />
      <div className="bg-light text-light-foreground">
        <div className="px-12 pt-0 pb-36 max-w-[1280px] mx-auto">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>Che tipo di servizi offrite?</AccordionTrigger>
              <AccordionContent>
                Classifit è la soluzione completa per il tuo studio. Nei nostri
                servizi sono compresi la realizzazione di un sito web
                completamente su misura, un servizio di prenotazione online con
                area riservata per i tuoi clienti e una piattaforma di gestione
                per il calendario delle lezioni, pacchetti a crediti e gestione
                iscritti. Naviga la sezione &quot;Servizi&quot; del nostro sito
                per approfondire.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Il servizio è ad abbonamento?</AccordionTrigger>
              <AccordionContent>
                No, i nostri servizi non richiedono abbonamenti mensili o
                annuali. Sono disponibili attraverso pacchetti componibili con
                un unico costo iniziale. Una volta effettuato il pagamento, non
                ci saranno ulteriori spese e avrai accesso a tutti i nostri
                prodotti e a qualsiasi nuova funzionalità futura senza costi
                aggiuntivi. Per ulteriori informazioni e una stima
                personalizzata, ti invitiamo a contattarci.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Quali sono le tempistiche di consegna?
              </AccordionTrigger>
              <AccordionContent>
                Le tempistiche di consegna dei nostri servizi possono variare in
                base alle specifiche richieste e alle esigenze del tuo studio.
                Tuttavia, in genere consegnamo il tuo sito web su misura e il
                sistema di gestione nel giro di una/due settimane dalla conferma
                dell&apos;ordine.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Che cosa dovrò fare io?</AccordionTrigger>
              <AccordionContent>
                Per il sito web, dovrai solo raccontarci del tuo studio e
                fornirci testi e immagini che desideri includere. Per il
                gestionale, ci serviranno un indirizzo email per l&apos;accesso
                e, se hai dati pre-esistenti, le informazioni necessarie per il
                trasferimento su Classifit. Il nostro team di supporto sarà a
                tua disposizione per guidarti attraverso il processo e
                assicurarsi che tutto sia configurato in modo efficiente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>E se ho già un sito web?</AccordionTrigger>
              <AccordionContent>
                Con il nostro Pacchetto Gestionale puoi comunque usufruire della
                piattaforma di gestione e - se lo desideri - delle prenotazioni
                online integrando il calendario Classifit nel tuo sito web.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>E se non sono soddisfatto?</AccordionTrigger>
              <AccordionContent>
                Nessun problema. Con tutti i nostri pacchetti è compresa una
                garanzia di rimborso al 100%. Nel migliore dei casi porti il tuo
                studio ad un livello superiore, nel peggiore non hai perso
                nulla. Nessun rischio.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Come posso iniziare?</AccordionTrigger>
              <AccordionContent>
                Contattaci via&nbsp;
                 <Link
                  href="mailto:classifit.studio@gmail.com"
                  className="text-primary hover:underline"
                >
                  email
                </Link>
                &nbsp;o scrivici su&nbsp;
                <Link
                  href="https://www.instagram.com/app.classi.fit/"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  Instagram
                </Link>
                , verrai ricontattato nel giro di qualche ora.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <About
        title="Hai ancora domande?"
        body="Siamo disponibili 24/24h per chiarire qualunque dubbio. Non esitare a contattarci tramite Instagram o email - Saremo felici di risponderti!"
      />
    </>
  );
}
