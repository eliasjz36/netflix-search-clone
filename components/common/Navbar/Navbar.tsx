import Image from 'next/image';
import Link from 'next/link';

import { IoMdNotifications } from 'react-icons/io';
import { RiArrowDownSFill } from 'react-icons/ri';

import SearchBar from '@common/SearchBar';

import Dropwdown from '@ui/Dropdown';

import navbarLinks from './navbarLinks';

const Navbar = () => {
  return (
    <nav className="z-50 bg-gradient-to-b from-black to-dark-background flex w-full items-center justify-between h-16 px-2 md:px-5 lg:px-12 sticky top-0 mb-28">
      {/* left nav */}
      <div className="flex items-center h-20">
        {/* logo */}
        <Link href="/" passHref>
          <a
            className="h-10 w-16 md:w-28 md:h-20 relative lg:mr-6"
            arial-label="Netflix"
          >
            <Image
              src="/assets/logo.svg"
              alt="netflix logo"
              objectFit="contain"
              layout="fill"
            />
          </a>
        </Link>

        {/* mobile nav items */}
        <ul className="block flex-initial list-none flex-row items-center justify-between text-white lg:hidden">
          <Dropwdown options={navbarLinks} header="Explore" />
        </ul>

        {/* nav items */}
        <ul className="hidden flex-initial list-none flex-row items-center justify-between text-white lg:flex">
          {navbarLinks.map((link) => (
            <li key={link.name} className="mr-5">
              <Link href={link.href} passHref>
                <a className="text-white hover:text-gray-400 transition-all duration-300 text-xs lg:text-sm">
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* right nav */}
      <div className="flex items-center">
        {/* search bar */}
        <SearchBar />

        {/* notifications icon */}
        <button type="button" className="hidden md:block p-2 md:ml-2">
          <IoMdNotifications
            className="h-5 w-5 md:h-6 md:w-6 text-white"
            aria-hidden="true"
          />
        </button>

        {/* profile */}
        <div className="flex items-center ml-1 md:ml-2">
          <button className=" text-gray-700 h-5 md:h-8 relative font-semibold md:py-2 px-4 inline-flex items-center">
            <Image
              src="/assets/profile.svg"
              alt="profile photo"
              objectFit="contain"
              className="rounded-sm"
              layout="fill"
            />
          </button>

          <RiArrowDownSFill
            className="hidden md:block h-5 w-5 text-white md:ml-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
