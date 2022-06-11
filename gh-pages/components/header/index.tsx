import { NextPage } from "next";

import GitHubIcon from "./GitHubIcon";

export const Header: NextPage = () => {
  return (
    <header className="sticky top-0 z-30 h-12 bg-gray-900 bg-opacity-50 backdrop-blur backdrop-filter border-b border-gray-800">
      <div className="mx-auto max-w-7xl h-full sm:px-8">
        <div className="flex items-center justify-between h-full">
          <a className="block" href="./">
            <span className="text-gray-400 hover:text-white uppercase text-lg font-medium">
              web tools
            </span>
          </a>
          <a
            className="block text-gray-400 hover:text-white"
            target="_blank"
            href="./"
          >
            <span className="sr-only"> GitHub Reponsitory</span>
            <GitHubIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
