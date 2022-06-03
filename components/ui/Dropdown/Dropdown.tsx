import Link from 'next/link';
import { useState } from 'react';

import { RiArrowDownSFill } from 'react-icons/ri';

interface DropdownProps {
  options: { name: string; href: string }[];
  header: string;
}

const Dropdown = ({ options, header }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="group inline-block relative">
      <button
        className="bg-dark-gray text-white font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="text-xs">{header}</span>

        <RiArrowDownSFill
          className="h-5 w-5 text-white ml-1"
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul className="bg-dark-gray opacity-95 w-36 text-center absolute text-white pt-1 border-[1px] border-t-2 rounded-md border-t-gray-200 border-gray-700 top-12">
          {options.map((link) => (
            <li key={link.name}>
              <Link href={link.href} passHref>
                <a className="py-2 bg-transparent block whitespace-no-wrap text-xs">
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
