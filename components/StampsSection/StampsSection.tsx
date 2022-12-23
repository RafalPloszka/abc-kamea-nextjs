import { CategoryItem } from "components/common";
import { StampsCarousel } from "./StampsCarousel";

const CATEGORIES_1 = [
  { title: "w automatach: WAGRAF, COLOP, TRODAT" },
  { title: "datowniki i numeratory" },
  { title: "fleszowe" },
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
              Ponad 30-letnie doświadczenie na rynku łączymy z szerokim wyborem
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                className="fill-indigo-accent-400"
              >
                <path d="M18 5V2h12v3Zm4.5 22.35h3v-11.5h-3Zm1.5 16.6q-3.7 0-6.975-1.425Q13.75 41.1 11.3 38.65q-2.45-2.45-3.875-5.725Q6 29.65 6 25.95q0-3.7 1.425-6.975Q8.85 15.7 11.3 13.25q2.45-2.45 5.725-3.875Q20.3 7.95 24 7.95q3.35 0 6.3 1.125 2.95 1.125 5.25 3.125l2.55-2.55 2.1 2.1-2.55 2.55q1.8 2 3.075 4.85Q42 22 42 25.95q0 3.7-1.425 6.975Q39.15 36.2 36.7 38.65q-2.45 2.45-5.725 3.875Q27.7 43.95 24 43.95Zm0-3q6.25 0 10.625-4.375T39 25.95q0-6.25-4.375-10.625T24 10.95q-6.25 0-10.625 4.375T9 25.95q0 6.25 4.375 10.625T24 40.95ZM24 26Z" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold leading-5">Usługi ekpresowe</h3>
            <p className="max-w-md mb-3 text-sm text-gray-700 sm:mx-auto">
              Usługi wykonywane na miejscu w nawet 30 minut
            </p>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-20 sm:h-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                className="fill-indigo-accent-400"
              >
                <path d="m16.15 37.75 7.85-4.7 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L24 13.7l-3.55 8.35-9.1.8 6.9 6Zm7.85-1.2-9.3 5.6q-.4.25-.85.225-.45-.025-.8-.275-.35-.25-.525-.65-.175-.4-.075-.9l2.45-10.6-8.2-7.15q-.4-.35-.475-.775-.075-.425.025-.825.1-.4.45-.675t.85-.325l10.85-.95 4.2-10q.2-.45.6-.675.4-.225.8-.225t.8.225q.4.225.6.675l4.2 10 10.85.95q.5.05.85.325t.45.675q.1.4.025.825-.075.425-.475.775l-8.2 7.15 2.45 10.6q.1.5-.075.9t-.525.65q-.35.25-.8.275-.45.025-.85-.225Zm0-10.3Z" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold leading-5">Gwarancja jakości</h3>
            <p className="max-w-md mb-3 text-sm text-gray-700 sm:mx-auto">
              Najwyższa jakość niezmiennie od 1974 roku
            </p>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-20 sm:h-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                className="fill-indigo-accent-400"
              >
                <path d="M36.55 41.15q-.85 0-1.625-.325T33.5 39.85L22.35 28.6q-1.15.4-2.3.65t-2.35.25q-4.85 0-8.25-3.375-3.4-3.375-3.4-8.225 0-1.55.4-3.025.4-1.475 1.15-2.775l7.25 7.25 4.6-4.3L12 7.6q1.3-.75 2.75-1.175Q16.2 6 17.7 6q4.95 0 8.425 3.475Q29.6 12.95 29.6 17.9q0 1.2-.25 2.35-.25 1.15-.65 2.3L39.75 33.6q.65.65.975 1.475.325.825.325 1.725 0 .9-.35 1.725-.35.825-1.05 1.425-.7.6-1.475.9-.775.3-1.625.3Zm-.9-3.4q.4.4 1 .4t1-.4q.4-.4.4-1t-.4-1L25 23.1q.8-1.05 1.2-2.475.4-1.425.4-2.725 0-3.75-2.775-6.35Q21.05 8.95 17.5 8.9l5.05 5.15q.45.45.45 1.1 0 .65-.45 1.1l-6.6 6.2q-.45.45-1.1.45-.65 0-1.1-.45l-4.85-4.8q.15 3.85 2.725 6.35 2.575 2.5 6.075 2.5 1.25 0 2.65-.4t2.45-1.2ZM23.55 23.6Z" />
              </svg>
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
