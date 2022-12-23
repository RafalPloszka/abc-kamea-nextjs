import Link from "next/link";
import { OrderTutorialStep } from "./OrderTutorialStep";

export const OrderTutorial = () => (
  <>
    <Link href="/" className="absolute top-2 left-2 sm:top-4 sm:left-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        className="fill-gray-700 inline align-top mr-2"
      >
        <path d="M8 19q-.425 0-.713-.288Q7 18.425 7 18t.287-.712Q7.575 17 8 17h6.1q1.575 0 2.737-1Q18 15 18 13.5T16.837 11q-1.162-1-2.737-1H7.8l1.9 1.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L4.7 9.7q-.15-.15-.213-.325Q4.425 9.2 4.425 9t.062-.375Q4.55 8.45 4.7 8.3l3.6-3.6q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L7.8 8h6.3q2.425 0 4.163 1.575Q20 11.15 20 13.5q0 2.35-1.737 3.925Q16.525 19 14.1 19Z" />
      </svg>
      <span className="text-gray-700">Powrót</span>
    </Link>
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-medium tracking-wider text-gray-900 uppercase rounded-full bg-teal-accent-400">
          Nowość
        </p>
      </div>
      <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
              width="52"
              height="24"
            />
          </svg>
          <h1 className="relative">Zamówienia</h1>
        </span>{" "}
        online
      </h2>
      <p className="text-base text-gray-700 md:text-lg">
        Zapraszamy do korzystania z nowej formy składania zamówień. Po
        przesłaniu formularzu kontakujemy się w kwestii wyceny i szczegółów
        zamówienia.
      </p>
    </div>
    <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2">
      <OrderTutorialStep
        title="Formularz online"
        text="Wypełnij podstawowe informacje w polach poniżej."
      />
      <OrderTutorialStep
        title="Potwierdzenie i wycena"
        text="Odezwiemy się do Ciebie, aby potwierdzić szczegóły zamówienia oraz przedstawić wycenę"
      />
      <OrderTutorialStep
        title="Wysyłka lub odbiór własny"
        text="Gotowe! Poinformujemy Cię o wysyłce gotowego zamówienia lub możliwości odbioru na miejscu."
        isFinal
      />
    </div>
  </>
);
