export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="font-bold text-xl">
          🏏 NG HULKUR CRICKETERS
        </h1>

        <div className="space-x-4">
          <button>Home</button>
          <button>Tournament</button>
          <button>Teams</button>
          <button>Sponsors</button>
        </div>

      </div>
    </nav>
  );
}