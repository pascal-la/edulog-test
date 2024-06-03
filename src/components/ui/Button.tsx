import Link from "next/link";
import React from "react";

export default function Button({
  text,
  href,
  color = "indigo",
  onClick,
}: {
  text: string;
  href?: string;
  color?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`block rounded-md bg-${color}-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {href ? <Link href={href}>{text}</Link> : text}
    </button>
  );
}
