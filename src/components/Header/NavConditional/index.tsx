"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import useWindowSize from "@/hooks/useWindowSize";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

export const NavConditional = () => {
  const pathname = usePathname();

  const { width } = useWindowSize();
  return (
    <>
      {pathname === "/" && width > 767 && (
        <Button variant="secondary">Faça parte</Button>
      )}
      {pathname === "/register" && (
        <Link className="text-neutral-1" href="/">
          <Icon.close size={38} />
        </Link>
      )}
    </>
  );
};
