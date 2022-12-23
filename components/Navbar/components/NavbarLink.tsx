import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  label: string;
  title?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export const NavbarLink = ({
  href,
  label,
  title,
  ariaLabel,
  onClick,
}: NavbarLinkProps) => (
  <Link
    href={href}
    aria-label={title ?? label}
    title={ariaLabel ?? label}
    className="font-normal tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-accent-400"
    scroll={false}
    onClick={onClick}
  >
    {label}
  </Link>
);
