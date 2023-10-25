import { Button } from "../ui/button";

export default function Hero() {
    return(
        <div className="flex items-center justify-center max-w-[1280px] px-12 py-36 mx-auto bg-primary text-primary-foreground text-center">
            <div className="flex flex-col gap-20 w-3/4">
                <div className="flex flex-col gap-8">
                    <h1 className="font-semibold text-7xl">Porta il tuo studio al prossimo livello</h1>
                    <p className="opacity-60 w-3/4 mx-auto">Gestisci lezioni, pacchetti, clienti e potenzia la tua identità e la tua presenza online - Tutto con la stessa piattaforma</p>
                </div>
                <Button variant="secondary">Contattaci - Senza impegno</Button>
            </div>
        </div>
    )
}