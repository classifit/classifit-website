type Props = {
  title: string;
  services: string[];
  additions: string[];
  bgColor: string;
  textColor: string;
  mutedColor: string;
};

export default function PackageCard(props: Props) {
  return (
    <div className={`w-full h-full px-8 lg:px-12 py-16 lg:py-20 ` + props.bgColor + ` ` + props.textColor}>
      <div className="flex flex-col gap-12">
        <h3 className="font-medium">{props.title}</h3>
        <div className={`flex flex-col gap-1 text-base ` + props.mutedColor}>
          {props.services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
        <div className="flex flex-col gap-4 text-base font-medium">
          {props.additions.map((addition) => (
            <span key={addition}>{addition}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
