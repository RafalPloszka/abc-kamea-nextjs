import Image from "next/image";
import { OrderButton } from "./common";
import heroStampLeft from "../public/header/heroStamp2.svg";
import heroStampRight from "../public/header/heroStamp1.svg";

export const Header = () => {
  return (
    <header className="mb-16">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative">
        <div className="h-[30vh] max-w-xl mb-10 sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <Image
            src={heroStampLeft}
            alt="Pieczątka na dokumencie"
            className="hidden lg:block absolute bottom-0 left-0 z-[-1]"
            width={500}
          />
          <Image
            src={heroStampRight}
            alt="Stempel i długopis na dokumencie"
            className=" absolute bottom-0 right-0 z-[-1]"
            width={500}
          />
          <h1 className="mb-6 text-6xl text-align-center font-semibold leading-none tracking-tight text-gray-900 sm:text-9xl md:mx-auto">
            ABC Kamea
          </h1>
          <p className="text-base text-gray-700 mb-40 md:text-lg lg:mb-10">
            Pieczątki • Grawerowanie
          </p>
          <OrderButton />
        </div>
        <div className="flex items-center sm:justify-center"></div>
      </div>
    </header>
  );
};
