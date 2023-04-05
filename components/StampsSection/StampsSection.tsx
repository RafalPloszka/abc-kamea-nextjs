import { CategoryItem } from "@/components/common";
import { StampsCarousel } from "./StampsCarousel";
import { RepairIcon, StarIcon, TimerIcon } from "@/components/icons";

const CATEGORIES_1 = [
  { title: "w automatach: WAGRAF, COLOP, TRODAT" },
  { title: "datowniki i numeratory" },
  { title: "fleszowe" },
  { title: "tabelaryczne" },
];

const CATEGORIES_2 = [
  { title: "w kasetach metalowych i plastikowych" },
  { title: "stemple drewniane" },
  { title: "logo, znaki graficzne, faksymile" },
];

export const StampsSection = () => {
  return (
    <section
      id="pieczatki"
      className="px-4 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:mb-32"
    >
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 text-4xl font-semibold tracking-tight text-gray-800 sm:leading-none">
              Pieczątki
            </h2>

            <h3 className="max-w-lg mb-6 text-xl font-semibold tracking-tight text-gray-800 sm:text-2xl sm:leading-none">
              Szeroki wybór, pełna{" "}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-2 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-indigo-accent-400">
                  personalizacja
                </span>
              </span>
            </h3>
            <p className="text-base text-gray-700 font-light md:text-lg">
              Ponad 50-letnie doświadczenie na rynku łączymy z szerokim wyborem
              asortymentu oraz fachowym doradztwem wyboru modelu i rodzaju
              pieczątki w zależności od indywidualnych potrzeb klienta.
            </p>
          </div>
          <p className="mb-4 text-gray-600 text-sm font-semibold tracking-widest uppercase">
            Oferujemy pieczątki
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 mb-6">
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
          <p className="mb-4 text-gray-600 text-sm font-semibold tracking-widest uppercase">
            Ponadto
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3">
              <CategoryItem title="tusze, tusze specjalistyczne" />
            </ul>
            <ul className="space-y-3">
              <CategoryItem title="poduszki do pieczątek" />
            </ul>
          </div>
        </div>
        <div>
          <StampsCarousel />
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-20 sm:h-20">
              <TimerIcon className="fill-indigo-accent-400" />
            </div>
            <h3 className="mb-2 font-semibold leading-5">Usługi ekpresowe</h3>
            <p className="max-w-md mb-3 text-sm text-gray-700 sm:mx-auto">
              Usługi wykonywane na miejscu w nawet 30 minut
            </p>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-20 sm:h-20">
              <StarIcon className="fill-indigo-accent-400" />
            </div>
            <h3 className="mb-2 font-semibold leading-5">Gwarancja jakości</h3>
            <p className="max-w-md mb-3 text-sm text-gray-700 sm:mx-auto">
              Najwyższa jakość niezmiennie od 1974 roku
            </p>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-20 sm:h-20">
              <RepairIcon className="fill-indigo-accent-400" />
            </div>
            <h3 className="mb-2 font-semibold leading-5">Serwis i naprawa</h3>
            <p className="max-w-md mb-3 text-sm text-gray-700 sm:mx-auto">
              Naprawa pieczątek i wymiana poduszek
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
