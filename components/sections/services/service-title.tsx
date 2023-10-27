import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

type Props = {
    subtitle: string
    title: string
    description: string
}

export default function ServiceTitle(props: Props) {
  return (
    <div className="bg-primary text-primary-foreground">
      <section>
        <div className="flex justify-between items-center gap-32">
          <div className="w-1/2">
            <p className="uppercase text-white/60 text-sm font-medium">
              {props.subtitle}
            </p>
            <div className="py-3" />
            <h1 className="text-7xl font-medium leading-[1.1]">
              {props.title}
            </h1>
            <div className="py-4" />
            <p className="text-white/60 w-3/4">
              {props.description}
            </p>
            <div className="py-10" />
            <Button variant="secondary">
              Contattaci
              <ArrowRightIcon className="ml-3 h-4 w-4" />
            </Button>
          </div>
          <div className="h-[650px] bg-card w-1/2" />
        </div>
      </section>
    </div>
  );
}
