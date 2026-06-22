export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">
          🏏 NG Hulkur Cricketers
        </h1>

        <ul className="hidden md:flex gap-6 font-medium">
          <li>Home</li>
          <li>Tournament</li>
          <li>Teams</li>
          <li>Fixtures</li>
          <li>Sponsors</li>
          <li>Gallery</li>
        </ul>
      </div>
    </nav>
  );
}