export default function Card({ children }) {
  return (
    <div className="rounded-2xl bg-white shadow-lg p-6">
      {children}
    </div>
  );
}