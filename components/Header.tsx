import Image from "next/image";

import hero from "../public/header/heroImage.webp";

export const Header = () => {
  return (
    <header>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative">
        <div className="max-w-xl sm:text-center md:mx-auto lg:max-w-2xl">
          <h1 className="mb-6 text-6xl text-center whitespace-nowrap font-semibold leading-none tracking-tight text-gray-900 sm:text-9xl md:mx-auto">
            ABC KAMEA
          </h1>
          <p className="text-center text-base text-gray-700 md:text-lg">
            Pieczątki • Grawer
          </p>
        </div>

        <div className="h-[40vh] overflow-hidden relative">
          <Image
            src={hero}
            alt="Stempel firmowy"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 400px,
          (max-width: 1440px) 600px,
          800px"
          />
        </div>
      </div>
    </header>
  );
};
