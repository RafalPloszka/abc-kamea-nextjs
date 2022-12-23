import Link from "next/link";

export const OrderButton = () => (
  <Link
    href="/order"
    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-accent-400 hover:bg-indigo-accent-700 focus:shadow-outline focus:outline-none"
  >
    Zamów
  </Link>
);
