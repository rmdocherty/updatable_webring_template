import { FC } from "react";

type SearchProps = {
  searchText: string;
  setSearchText: (e: string) => void;
};

export const SearchElement: FC<SearchProps> = ({ searchText, setSearchText }) => {
  return (
    <div>
      <form role="search">
        <input name="search" type="search" placeholder="Search" />
        <input type="submit" value="Browse all!" />
      </form>
    </div>
  );
};
