import React from "react";
import "../globals.css";
import Link from "next/link";

type HeaderProps = {
  name: string;
};

const Header = (props: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full bg-lime-300 text-black text-3xl p-4 text-center shadow-md z-50">
      {props.name}
      <Link
        href="https://github.com/b-eiji-mitsumizo/stateManageLibCompare"
        className="absolute right-4 top-2 font-bold py-2 px-4 rounded hover:text-gray-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        To GitHub
      </Link>
    </header>
  );
};

export default Header;
