import { Button } from "@/components/ui/button";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-secondary text-dark text-center">
      <div>
        <h1 className="font-medium text-7xl">404</h1>
        <div className="py-2" />
        <p>Questa pagina non esiste</p>
        <div className="py-4" />
        <Button variant="default">Torna alla home</Button>
      </div>
    </div>
  );
}
