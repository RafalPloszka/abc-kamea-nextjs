import { OrderButton } from "./common";

export const Header = () => {
  return (
    <header className="mb-16">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative">
        <div className="h-[30vh] max-w-xl mb-10 sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <h1 className="mb-6 text-6xl text-align-center whitespace-nowrap font-semibold leading-none tracking-tight text-gray-900 sm:text-9xl md:mx-auto">
            ABC KAMEA
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
