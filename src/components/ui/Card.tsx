import classNames from "classnames";

export default function Card({
  children,
  clickable = false,
}: {
  children: React.ReactNode;
  clickable?: boolean;
}) {
  const CardClass = classNames("border border-indigo-600 rounded-md p-4", {
    ["hover:bg-indigo-100"]: clickable,
  });

  return <div className={CardClass}>{children}</div>;
}
