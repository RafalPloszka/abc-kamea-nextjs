import Link from "next/link";

interface FooterColumnProps {
  title: {
    href: string;
    label: string;
  };
  elements: string[];
}

export const FooterColumn = ({ title, elements }: FooterColumnProps) => (
  <div>
    <Link
      href={title.href}
      className="font-semibold tracking-wide text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
      scroll={false}
    >
      {title.label}
    </Link>
    <ul className="mt-2 space-y-2">
      {elements.map((element) => (
        <li key={element}>
          <span className="text-gray-600 text-xs">{element}</span>
        </li>
      ))}
    </ul>
  </div>
);
