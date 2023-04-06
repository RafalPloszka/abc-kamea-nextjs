import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.png";

export const NavbarLogoLink = () => {
  return (
    <Link
      href="/"
      aria-label="Company"
      title="Company"
      className="inline-flex items-center"
    >
      <Image src={logo} alt="logo" width={80} height={80} />
      <span className="ml-4 text-xl font-medium tracking-wide text-gray-800 uppercase">
        ABC Kamea
      </span>
    </Link>
  );
};
