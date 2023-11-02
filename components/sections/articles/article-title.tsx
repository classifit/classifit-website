export default function ArticleTitle() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="px-6 lg:px-12 py-10 lg:py-20 max-w-[1280px] mx-auto">
        <h1 className="text-4xl lg:text-7xl font-medium">Building Classifit</h1>
        <div className="py-4" />
        <p className="text-white/60 lg:w-1/2">
          Come e perché uno sviluppatore e una designer hanno deciso di
          costruire Classifit
        </p>
        <div className="py-6 lg:py-10" />
        <div className="flex justify-between items-center text-white/60">
          <p className="text-sm">Di Chiara</p>
          <p className="text-sm">Classifit</p>
        </div>
      </div>
    </div>
  );
}
