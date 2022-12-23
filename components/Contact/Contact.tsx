import { ContactItem } from "./ContacItem";

const CONTACT_ITEMS = [
  {
    iconPath: (
      <path d="M12 16.475q2.475-2 3.738-3.85Q17 10.775 17 9.15q0-1.4-.512-2.388-.513-.987-1.263-1.6-.75-.612-1.625-.887T12 4q-.725 0-1.6.275-.875.275-1.625.887-.75.613-1.262 1.6Q7 7.75 7 9.15q0 1.625 1.262 3.475 1.263 1.85 3.738 3.85Zm0 2.175q-.225 0-.425-.063-.2-.062-.375-.187-3.125-2.425-4.662-4.725Q5 11.375 5 9.15q0-1.775.638-3.113Q6.275 4.7 7.275 3.8q1-.9 2.25-1.35Q10.775 2 12 2t2.475.45q1.25.45 2.25 1.35 1 .9 1.638 2.237Q19 7.375 19 9.15q0 2.225-1.538 4.525-1.537 2.3-4.662 4.725-.15.125-.362.187-.213.063-.438.063ZM12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11ZM6 22q-.425 0-.713-.288Q5 21.425 5 21t.287-.712Q5.575 20 6 20h12q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 22 18 22Zm6-12.85Z" />
    ),
    href: "https://www.google.com/maps?ll=52.730194,15.237086&z=16&t=m&hl=pl&gl=PL&mapclient=embed&cid=1553521928163008524",
    label: "Łużycka 31, Gorzów Wlkp.",
    description: "Otwarte od poniedziałku do piątku: 9:00 - 16:00",
    ariaLabel: "Adres",
    openInNewTab: true,
  },
  {
    iconPath: (
      <path d="M19.95 21q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L6.975 10.9q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025.225 1 .65 1.975ZM19 18.95v-2.2l-2.35-.475-1.675 1.675q.975.425 1.988.675 1.012.25 2.037.325Zm-4-1.025ZM6.025 9Z" />
    ),
    href: "tel:602332499",
    label: "602 332 499",
    description: "Odbieramy telefon od poniedziałku do piątku: 8:00 - 17:00",
    ariaLabel: "Numer telefonu",
  },
  {
    iconPath: (
      <path d="M12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12v1.45q0 1.475-1.012 2.512Q19.975 17 18.5 17q-.9 0-1.675-.4t-1.275-1.05q-.675.675-1.587 1.063Q13.05 17 12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12v1.45q0 .725.45 1.137.45.413 1.05.413.6 0 1.05-.413.45-.412.45-1.137V12q0-3.275-2.363-5.638Q15.275 4 12 4 8.725 4 6.362 6.362 4 8.725 4 12t2.362 5.637Q8.725 20 12 20h4q.425 0 .712.288.288.287.288.712t-.288.712Q16.425 22 16 22Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z" />
    ),
    href: "mailto:kamea@pieczatki.gorz.pl",
    label: "kamea@pieczatki.gorz.pl",
    description: "Odpisujemy zawsze tego samego dnia",
    ariaLabel: "Email",
  },
  {
    iconPath: (
      <path d="M3 18.5v-13q0-.55.45-.838.45-.287.95-.087l15.4 6.5q.625.275.625.925t-.625.925l-15.4 6.5q-.5.2-.95-.088Q3 19.05 3 18.5ZM5 17l11.85-5L5 7v3.5l6 1.5-6 1.5Zm0-5V7v10Z" />
    ),
    href: "/zamowienie",
    label: "Formularz",
    description: "Zapraszamy do nowej formy składania zamówień online",
    ariaLabel: "Formularz",
    isNew: true,
  },
];

export const Contact = () => {
  return (
    <section
      id="kontakt"
      className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 text-3xl font-semibold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Kontakt</span>
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Zamówienia przyjmujemy na miejscu, telefonicznie, mailowo oraz przez
          formularz
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          {CONTACT_ITEMS.map((item) => (
            <ContactItem key={item.href} {...item} />
          ))}
        </div>
        <div>
          <iframe
            title="localization"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9664.442977488128!2d15.237086000000001!3d52.730194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x158f37f676efa00c!2sABC%20Kamea.%20Piecz%C4%85tki%2C%20grawerstwo.%20P%C5%82oszka%20P.!5e0!3m2!1spl!2spl!4v1667982637154!5m2!1spl!2spl"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
