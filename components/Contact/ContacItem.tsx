import Link from "next/link";

interface ContactItemProps {
  icon: React.ReactNode;
  href?: string;
  label: string;
  description: string;
  ariaLabel: string;
  openInNewTab?: boolean;
  isNew?: boolean;
}

export const ContactItem = ({
  icon,
  href,
  label,
  description,
  ariaLabel,
  openInNewTab,
  isNew,
}: ContactItemProps) => {
  return (
    <div className="flex">
      <div className="mr-4">
        <Link
          href={href}
          aria-label={ariaLabel}
          className="flex items-center justify-center w-10 h-10 mb-3 rounded-full border-2 bg-indigo-50 transition-colors duration-300 hover:border-indigo-accent-200"
        >
          {icon}
        </Link>
      </div>
      <div className="w-full">
        <Link
          href={href}
          target={openInNewTab ? "_blank" : "_self"}
          rel={openInNewTab && "noopener noreferrer"}
          aria-label={ariaLabel}
          title={ariaLabel}
          className="transition-colors duration-300 text-indigo-accent-400 hover:text-indigo-700 mb-2 font-medium leading-5"
        >
          {label}
          {isNew && (
            <span className="inline-block mt-0.5 ml-3 px-3 py-px text-xs align-top font-medium tracking-wider text-gray-900 uppercase rounded-full bg-teal-accent-400">
              Nowość
            </span>
          )}
        </Link>
        <p className="text-sm font-normal text-gray-900">{description}</p>
        <hr className="w-full my-6 border-gray-300" />
      </div>
    </div>
  );
};
