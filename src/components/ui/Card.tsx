export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-indigo-600 rounded-md p-4">{children}</div>
  );
}
