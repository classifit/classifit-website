import ArticleTitle from "@/components/sections/articles/article-title";
import Image from "next/image";

export default function Article() {
  return (
    <>
      <ArticleTitle />
      <div className="w-full h-80 overflow-hidden flex items-center justify-center bg-ring relative">
        <Image
          src="/blog/building-classifit-cover.png"
          width="1080"
          height="1350"
          alt="Copertina articolo Classifit - Building Classifit"
        />
      </div>
      <div className="bg-light text-light-foreground">
        <section>
          <div className="w-3/4 mx-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              fermentum libero aliquam metus fermentum posuere. Aliquam sed
              mollis mi. In id accumsan mi. Aliquam pulvinar consequat magna, et
              bibendum quam rhoncus vitae. Aliquam mattis, ante eu consectetur
              venenatis, justo velit malesuada dui, ut vestibulum leo augue sed
              libero. Pellentesque ullamcorper leo vitae massa elementum
              tristique. In hac habitasse platea dictumst. Vivamus tempus diam
              eget efficitur volutpat. Sed convallis eu lectus sit amet
              sollicitudin. Duis quis sem id orci posuere tristique. Donec sit
              amet velit est. Integer sagittis dui quam, nec bibendum turpis
              molestie et. Curabitur vel est erat. Donec pharetra, nisi a
              efficitur mollis, eros tortor maximus sem, a cursus turpis sem
              quis nisi. Maecenas urna augue, gravida in suscipit a, pharetra ut
              elit. Curabitur elit ex, rutrum et eleifend vitae, venenatis ut
              nulla.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
