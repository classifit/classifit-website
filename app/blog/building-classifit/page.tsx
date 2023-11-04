import type { Metadata } from "next";
import ArticleTitle from "@/components/sections/articles/article-title";

export const metadata: Metadata = {
  title:
    "Building Classifit · Gestionale per studio di Pilates",
  description:
    "Come e perché uno sviluppatore e una designer hanno deciso di costruire un gestionale per studi di Pilates o Yoga",
};

export default function Article() {
  return (
    <>
      <ArticleTitle />
      <div className="bg-[url('/blog/building-classifit-inside.png')] h-36 lg:h-72 lg:bg-fixed bg-center bg-no-repeat bg-cover" />
      <div className="bg-light text-light-foreground">
        <section>
          <div className="lg:w-2/3 mx-auto">
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
