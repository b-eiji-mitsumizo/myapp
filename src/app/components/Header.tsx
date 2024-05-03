import React from "react";
import "../globals.css";

type HeaderProps = {
  name: string;
};

const Header = (props: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full bg-lime-300 text-black text-3xl p-4 text-center shadow-md z-50">
      {props.name}
    </header>
  );
};

export default Header;
