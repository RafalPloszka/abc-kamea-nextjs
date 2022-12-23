import Image from "next/image";
import Link from "next/link";

export const NavbarLogoLink = () => {
  return (
    <Link
      href="/"
      aria-label="Company"
      title="Company"
      className="inline-flex items-center"
    >
      <Image src="/Logo.png" alt="logo" width={50} height={50} />
      <span className="ml-2 text-xl font-semibold tracking-wide text-gray-800 uppercase">
        ABC Kamea
      </span>
    </Link>
  );
};
