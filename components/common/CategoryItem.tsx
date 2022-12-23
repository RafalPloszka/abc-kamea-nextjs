interface CategoryItemProsps {
  title: string;
}

export const CategoryItem = ({ title }: CategoryItemProsps) => (
  <li className="flex">
    <span className="mr-1">
      <svg
        className="w-5 h-5 mt-px text-indigo-accent-400"
        fill="currentColor"
        fontSize={8}
      >
        <path d="m4.229 13.146 2-3.146-2-3.146q-.541-.875-.062-1.781.479-.906 1.521-.906H12.5q.417 0 .781.187.365.188.615.542L16.792 9q.312.458.312 1t-.312 1l-2.875 4.104q-.229.354-.615.542-.385.187-.802.187H5.688q-1.042 0-1.521-.906-.479-.906.062-1.781Zm1.479.937h6.813-.021L15.354 10 12.5 5.917H5.708L8.354 10ZM8.354 10 5.708 5.917 8.354 10l-2.646 4.083Z" />
      </svg>
    </span>
    {title}
  </li>
);
