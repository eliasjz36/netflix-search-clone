import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';

import { FaSearch } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    router.push({ pathname, query: { q: search } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const searchReset = () => setSearch('');

  return (
    <div className="hidden border-[1px] bg-dark-background border-solid border-gray-100 md:flex">
      {/* search icon */}
      <button disabled className="px-2">
        <FaSearch
          className="h-4 w-4 text-white bg-dark-gray"
          aria-hidden="true"
        />
      </button>

      {/* search input */}
      <input
        data-testid="search-input"
        type="text"
        name="search"
        className="w-48 p-1 text-sm bg-black text-white focus:outline-none"
        placeholder="Titles, actors, genres"
        value={search}
        onChange={searchChangeHandler}
      />

      {/* close icon */}
      <button type="button" className="px-2" onClick={searchReset}>
        <RiCloseFill
          className="h-5 w-5 text-white bg-dark-gray"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default SearchBar;
