export default function Title({ title }: { title: string | undefined }) {
  return (
    <h1 className="h-16 text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
      {title}
    </h1>
  );
}
