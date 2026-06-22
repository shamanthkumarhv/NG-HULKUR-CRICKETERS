export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-green-700 text-white text-center py-16">
        <h1 className="text-5xl font-bold">
          🏏 NG HULKUR CRICKETERS
        </h1>

        <p className="mt-4 text-xl">
          Our Village • Our Cricket • Our Pride
        </p>

        <p className="mt-2">
          Village Level Tennis Ball Cricket Tournament
        </p>
      </section>

      {/* Prize Pool */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          🏆 Prize Pool
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="font-bold">🥇 1st Prize</h3>
            <p className="text-2xl font-bold">₹30,000</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="font-bold">🥈 2nd Prize</h3>
            <p className="text-2xl font-bold">20000</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="font-bold">🥉 3rd Prize</h3>
            <p className="text-2xl font-bold">₹10,000</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="font-bold">🏅 4th Prize</h3>
            <p className="text-2xl font-bold">₹5,000</p>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          📢 Latest Updates
        </h2>

        <div className="bg-white shadow rounded-xl p-6">
          <ul className="space-y-3">
            <li>✅ Prize pool finalized</li>
            <li>✅ House-to-house contribution drive started</li>
            <li>✅ Tournament planning committee formed</li>
            <li>⏳ Sponsor confirmations in progress</li>
          </ul>
        </div>
      </section>

    </div>
  );
}