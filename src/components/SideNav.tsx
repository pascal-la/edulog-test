"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import { logout } from "@/app/store";

import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";

const links = [
  {
    name: "Utilisateurs",
    href: "/users",
  },
  {
    name: "Formulaires",
    href: "/forms",
  },
  {
    name: "Fichiers",
    href: "/attachments",
  },
];

export default function SideNav() {
  const pathname = usePathname();

  const SideNavClass = classNames(
    "fixed top-0 bottom-0 flex flex-col justify-between w-64 p-6 bg-indigo-600 text-gray-50",
    {
      ["hidden"]: pathname === "/login" || pathname === "/front-office",
    }
  );

  return (
    <nav className={SideNavClass}>
      <div className="flex flex-col gap-8">
        <Title title="Établissement" />
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="p-3 rounded-md hover:bg-indigo-500"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Button text="Se déconnecter" onClick={logout} color="purple" />
    </nav>
  );
}
