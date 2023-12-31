type Props = {
  subtitle: string;
  title: string;
};

export default function PageTitle(props: Props) {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="px-6 lg:px-12 pt-36 pb-20 lg:pt-36 lg:pb-20 max-w-[1280px] mx-auto flex justify-center items-center">
        <div className="flex flex-col gap-4 text-center lg:w-3/5">
          <p className="uppercase text-white/60 text-sm">{props.subtitle}</p>
          <h1 className="font-medium">{props.title}</h1>
        </div>
      </div>
    </div>
  );
}
