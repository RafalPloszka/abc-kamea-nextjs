import { CategoryItem } from "components/common";
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                className="fill-indigo-accent-400"
              >
                <path d="m25.75 44-.5-5.5h-2q-7.15 0-12.2-5.05Q6 28.4 6 21.25q0-7.15 5.075-12.2Q16.15 4 23.35 4q3.55 0 6.575 1.275Q32.95 6.55 35.2 8.85q2.25 2.3 3.525 5.425T40 21.1q0 6.7-3.775 12.925Q32.45 40.25 25.75 44Zm-2.4-11.15q.8 0 1.35-.55t.55-1.35q0-.8-.55-1.35t-1.35-.55q-.8 0-1.35.55t-.55 1.35q0 .8.55 1.35t1.35.55Zm-.1-6.8q.5 0 .875-.35t.475-.9q.15-.7.625-1.35.475-.65 1.475-1.65 1.35-1.35 1.9-2.475.55-1.125.55-2.425 0-2.25-1.525-3.7-1.525-1.45-4.075-1.45-1.75 0-3.225.775T17.95 14.7q-.3.45-.1.925.2.475.75.725.4.15.85 0 .45-.15.75-.55.55-.8 1.375-1.175t1.825-.375q1.5 0 2.35.725.85.725.85 1.925 0 .95-.55 1.925-.55.975-1.95 2.425-1.05 1.1-1.5 1.825-.45.725-.55 1.725-.05.5.3.875t.9.375Zm5 9.45v3.1q4.1-3.45 6.425-8.125T37 21.1q0-6.2-3.875-10.15T23.35 7q-6 0-10.175 4.175Q9 15.35 9 21.25q0 5.9 4.175 10.075Q17.35 35.5 23.25 35.5ZM23 22.8Z" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold leading-5">Fachowe doradztwo</h3>
            <p className="max-w-md mb-3 text-sm text-gray-700 sm:mx-auto">
              Pomoc w doborze metody i czcionki
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
                <path d="M11.3 40q-1.4 0-2.35-.95Q8 38.1 8 36.7q0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95ZM24 40q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35Q25.4 40 24 40Zm12.7 0q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95ZM11.3 27.3q-1.4 0-2.35-.95Q8 25.4 8 24q0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95Zm12.7 0q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95Zm12.7 0q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95ZM11.3 14.6q-1.4 0-2.35-.95Q8 12.7 8 11.3q0-1.4.95-2.35Q9.9 8 11.3 8q1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95Zm12.7 0q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35Q22.6 8 24 8q1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95Zm12.7 0q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35Q35.3 8 36.7 8q1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95Z" />
              </svg>
            </div>

            <h3 className="mb-2 font-semibold leading-5">Szeroki wybór</h3>
            <p className="max-w-md mb-3 text-sm text-gray-700 sm:mx-auto">
              Czcionki oraz techniki na każdą okazję
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
                <path d="m21.1 26 2.9-2.15L26.85 26q.45.35.9.05t.3-.85l-1.1-3.55L30 19.3q.4-.35.225-.85-.175-.5-.725-.5h-3.65l-1.15-3.7q-.15-.55-.675-.55t-.725.55l-1.2 3.7h-3.6q-.55 0-.725.5-.175.5.225.85l3.05 2.35-1.1 3.55q-.15.55.3.85.45.3.85-.05Zm-6.9 19.35q-.7.25-1.35-.2-.65-.45-.65-1.25V30.8q-2.25-2.35-3.225-5.15Q8 22.85 8 20q0-6.8 4.6-11.4Q17.2 4 24 4q6.8 0 11.4 4.6Q40 13.2 40 20q0 2.85-.975 5.65-.975 2.8-3.225 5.15v13.1q0 .8-.65 1.25-.65.45-1.35.2l-9.8-3.3ZM24 33q5.45 0 9.225-3.775Q37 25.45 37 20q0-5.45-3.775-9.225Q29.45 7 24 7q-5.45 0-9.225 3.775Q11 14.55 11 20q0 5.45 3.775 9.225Q18.55 33 24 33Zm-8.8 8.8 8.8-2.75 8.8 2.75v-8.55q-2 1.45-4.3 2.1-2.3.65-4.5.65t-4.5-.65q-2.3-.65-4.3-2.1Zm8.8-4.3Z" />
              </svg>
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
