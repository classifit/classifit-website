type Props = {
  services: string[];
  bgColor: string;
  textColor: string;
  number: string;
};

export default function PackageCard(props: Props) {
  return (
    <div className={`w-full h-full px-8 lg:px-12 py-16 lg:py-20 ` + props.bgColor + ` ` + props.textColor}>
      <div className="flex flex-col gap-4">
        <p className="text-base text-muted-foreground">Pacchetto di esempio {props.number}</p>
        <div className="flex flex-col gap-1 text-2xl">
          {props.services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
