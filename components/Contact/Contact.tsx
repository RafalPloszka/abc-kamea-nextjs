import {
  AddressIcon,
  EmailIcon,
  PhoneIcon,
  SendIcon,
} from "@/components/icons";

import { ContactItem } from "./ContacItem";

const CONTACT_ITEMS = [
  {
    icon: <AddressIcon className="fill-indigo-accent-400" />,
    href: "https://www.google.com/maps?ll=52.730194,15.237086&z=16&t=m&hl=pl&gl=PL&mapclient=embed&cid=1553521928163008524",
    label: "Łużycka 31, Gorzów Wlkp.",
    description: "Otwarte od poniedziałku do piątku: 9:00 - 16:00",
    ariaLabel: "Adres",
    openInNewTab: true,
  },
  {
    icon: <PhoneIcon className="fill-indigo-accent-400" />,
    href: "tel:602332499",
    label: "602 332 499",
    description: "Odbieramy telefon od poniedziałku do piątku: 9:00 - 20:00",
    ariaLabel: "Numer telefonu",
  },
  {
    icon: <EmailIcon className="fill-indigo-accent-400" />,
    href: "mailto:kamea@pieczatki.gorz.pl",
    label: "kamea@pieczatki.gorz.pl",
    description: "Odpisujemy zawsze tego samego dnia",
    ariaLabel: "Email",
  },
  {
    icon: <SendIcon className="fill-indigo-accent-400" />,
    href: "/order",
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
