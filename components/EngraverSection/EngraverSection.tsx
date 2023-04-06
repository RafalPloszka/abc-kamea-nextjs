import { CategoryItem } from "@/components/common";
import { ChoiceIcon, HelpIcon, QualityIcon } from "@/components/icons";

import { EngraverCarousel } from "./EngraverCarousel";

const CATEGORIES_1 = [
  {
    title: "Grawerowanie mechaniczne: frez, diament",
  },
  { title: "Tabliczki znamionowe na drzwi, puchary, trofea" },
];

const CATEGORIES_2 = [
  { title: "Referentki" },
  {
    title: "Tabliczki okolicznościowe na chrzty, komunie, śluby, jubileusze",
  },
];

export const EngraverSection = () => {
  return (
    <section
      id="grawerowanie"
      className="px-4 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:mb-32"
    >
      <div className="grid gap-12 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center lg:order-2">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 text-4xl font-semibold tracking-tight text-gray-800 sm:leading-none">
              Grawerowanie
            </h2>

            <h3 className="max-w-lg mb-6 text-xl font-semibold tracking-tight text-gray-800 sm:text-2xl sm:leading-none">
              Solidne wykonanie, na{" "}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-2 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-indigo-accent-400">
                  każdą okazję
                </span>
              </span>
            </h3>
            <p className="text-base text-gray-700 font-light md:text-lg">
              Dzięki zastosowaniu profesjonalnego sprzętu i wieloletniemu
              doświadczeniu gwarantujemy wykonanie grawerunku w najwyższej
              jakości w oparciu o wymagania klienta. Grawerujemy na materiałach:
              stal, mosiądz, aluminium, srebro, złoto i innych.
            </p>
          </div>
          <p className="mb-4 text-sm font-semibold tracking-widest uppercase">
            Oferujemy
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3">
              {CATEGORIES_1.map((category) => (
                <CategoryItem key={category.title} title={category.title} />
              ))}
            </ul>
            <ul className="space-y-3">
              {CATEGORIES_2.map((category) => (
                <CategoryItem key={category.title} title={category.title} />
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:order-1">
          <EngraverCarousel />
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-20 sm:h-20">
              <HelpIcon className="fill-indigo-accent-400" />
            </div>
            <h3 className="mb-2 font-semibold leading-5">Fachowe doradztwo</h3>
            <p className="max-w-md mb-3 text-sm text-gray-700 sm:mx-auto">
              Pomoc w doborze metody i czcionki
            </p>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-20 sm:h-20">
              <ChoiceIcon className="fill-indigo-accent-400" />
            </div>

            <h3 className="mb-2 font-semibold leading-5">Szeroki wybór</h3>
            <p className="max-w-md mb-3 text-sm text-gray-700 sm:mx-auto">
              Czcionki oraz techniki na każdą okazję
            </p>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-20 sm:h-20">
              <QualityIcon className="fill-indigo-accent-400" />
            </div>
            <h3 className="mb-2 font-semibold leading-5">Najwyższa jakość</h3>
            <p className="max-w-md mb-3 text-sm text-gray-700 sm:mx-auto">
              Certyfikowany sprzęt klasy premium
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
