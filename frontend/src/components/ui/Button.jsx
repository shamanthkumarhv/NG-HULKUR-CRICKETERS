export default function Button({
  children,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-6 py-3 font-semibold transition hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}