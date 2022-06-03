import Link from 'next/link';

import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import footerLinks from './footerLinks';

const Footer = () => {
  return (
    <footer className="bg-dark-background max-w-4xl mx-auto p-5 mt-28">
      {/* social media icons */}
      <div
        data-testid="social-media-links"
        className="flex mt-4 space-x-6 sm:justify-start md:mt-0"
      >
        <Link href="/" passHref>
          <a className="text-white" title="Facebook">
            <FaFacebookF className="h-5 w-5" aria-hidden="true" />
          </a>
        </Link>

        <Link href="/" passHref>
          <a className="text-white" title="Instagram">
            <BsInstagram className="h-5 w-5" aria-hidden="true" />
          </a>
        </Link>

        <Link href="/" passHref>
          <a className="text-white" title="Twitter">
            <BsTwitter className="h-5 w-5" aria-hidden="true" />
          </a>
        </Link>

        <Link href="/" passHref>
          <a className="text-white" title="Youtube">
            <BsYoutube className="h-5 w-5" aria-hidden="true" />
          </a>
        </Link>
      </div>

      {/* links */}
      <div>
        <ul className="grid grid-rows-4 my-6 grid-cols-2 md:grid-cols-4 text-sm">
          {footerLinks.map((link) => (
            <li key={link.name} className="mb-4">
              <Link href={link.href} passHref>
                <a className="text-gray-500 hover:underline">{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* copyright */}
      <div className="mb-5 md:flex md:items-center md:justify-between">
        <span className="text-xs text-gray-500 sm:text-center">
          © 1997-2022 Netflix, Inc. 437076b3-c324-4d32-aa86-f40df9dc1d08
        </span>
      </div>
    </footer>
  );
};

export default Footer;
