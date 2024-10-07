import Image from "next/image";

import { NavConditional } from "./NavConditional";

export const Header = () => {
  return (
    <header className="flex h-14 w-full items-center justify-between border-blue-1 bg-blue-hf px-4 md:h-20 md:justify-around md:px-0 lg:border-b">
      <Image
        width={0}
        height={0}
        className="w-48 md:w-60"
        src="/logoHeader.svg"
        alt="Logo Frontend Fusion"
      />
      <NavConditional />
    </header>
  );
};
