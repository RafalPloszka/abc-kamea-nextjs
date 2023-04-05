import { MarkerIcon } from "@/components/icons";

interface CategoryItemProsps {
  title: string;
}

export const CategoryItem = ({ title }: CategoryItemProsps) => (
  <li className="flex">
    <span className="mr-1">
      <MarkerIcon
        className="w-5 h-5 mt-px text-indigo-accent-400"
        fill="currentColor"
        fontSize={8}
      />
    </span>
    {title}
  </li>
);
