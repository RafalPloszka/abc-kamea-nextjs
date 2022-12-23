import Link from "next/link";
import Image from "next/image";
import { FooterColumn } from "./FooterColumn";
import logo from "../../public/logo.png";

const STAMPS_COLUMN = {
  title: { href: "#pieczatki", label: "Pieczątki" },
  elements: [
    "Automaty WAGRAF, COLOP, TRODAT",
    "Datowniki i numeratory",
    "Pieczątki fleszowe",
    "Pieczątki w kasetach metalowych i plastikowych",
    "Stemple drewniane",
    "Loga, znaki graficzne, faksymile",
  ],
};

const ENGRAVER_COLUMN = {
  title: { href: "#grawerowanie", label: "Grawerowanie" },
  elements: [
    "Grawerowanie mechaniczne: frez, diament",
    "Referentki",
    "Tabliczki znamionowe",
    "Tabliczki okolicznościowe",
  ],
};

export const Footer = () => {
  return (
    <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border-t border-slate-200">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 lg:row-gap-8">
        <div className="sm:col-span-1">
          <Link
            href="/"
            aria-label="Go home"
            title="ABC Kamea"
            className="inline-flex items-center"
          >
            <Image src={logo} alt="logo" width={50} height={50} />
            <span className="ml-2 text-xl font-semibold tracking-wide text-gray-800 uppercase">
              ABC Kamea
            </span>
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-700">
              ABC Kamea to firma z ugruntowaną pozycją, obecna na rynku od 1974
              roku. Wieloletnie doświadczenie łączymy z indywidualnym podejściem
              do każdego klienta.
            </p>
            <p className="mt-4 text-sm text-gray-700">
              Zapraszamy do kontaktu w wybranej formie.
            </p>
          </div>
        </div>
        <FooterColumn
          title={STAMPS_COLUMN.title}
          elements={STAMPS_COLUMN.elements}
        />
        <FooterColumn
          title={ENGRAVER_COLUMN.title}
          elements={ENGRAVER_COLUMN.elements}
        />
        <div className="space-y-2 text-sm">
          <p className="text-base font-semibold tracking-wide text-gray-900">
            Kontakt
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Telefon:</p>
            <Link
              href="tel:602332499"
              aria-label="Numer telefonu"
              title="Telefon"
              className="transition-colors duration-300 text-indigo-accent-400 hover:text-indigo-800"
            >
              602 332 499
            </Link>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <Link
              href="mailto:kamea@pieczatki.gorz.pl"
              aria-label="Email"
              title="Email"
              className="transition-colors duration-300 text-indigo-accent-400 hover:text-indigo-800"
            >
              kamea@pieczatki.gorz.pl
            </Link>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Adres:</p>
            <Link
              href="https://www.google.com/maps?ll=52.730194,15.237086&z=16&t=m&hl=pl&gl=PL&mapclient=embed&cid=1553521928163008524"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adres"
              title="Adres"
              className="transition-colors duration-300 text-indigo-accent-400 hover:text-indigo-800"
            >
              ul. Łużycka 31, Gorzów Wlkp.
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2022 Created by:{" "}
          <Link
            href="https://www.linkedin.com/in/rafa%C5%82-p%C5%82oszka-2750071ab/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Created by"
            title="Created by"
            className="transition-colors duration-300 text-indigo-accent-400 hover:text-indigo-800"
          >
            Rafał Płoszka
          </Link>
        </p>
      </div>
    </footer>
  );
};
