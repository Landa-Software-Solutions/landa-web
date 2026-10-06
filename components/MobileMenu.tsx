"use client";

import { useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";

type MobileMenuProps = {
  links: { href: string; label: string }[];
  label: string;
};

export function MobileMenu({ links, label }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="rounded-md p-1.5 text-white"
      >
        {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
      </button>

      {open && (
        <nav className="absolute inset-x-0 top-full border-b border-white/10 bg-navy px-4 pb-6 pt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-base font-medium text-white/90 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
