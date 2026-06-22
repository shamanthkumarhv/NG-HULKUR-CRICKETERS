import Button from "../ui/Button";
import { tournament } from "../../constants/tournament";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-green-700 via-green-800 to-red-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>

            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
              🏆 {tournament.season}
            </span>

            <h1 className="text-5xl md:text-6xl font-black mt-6">
              {tournament.name}
            </h1>

            <p className="text-xl mt-4">
              {tournament.tagline}
            </p>

            <p className="mt-4 text-lg">
              {tournament.title}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex gap-4 mt-8">
  <Button variant="danger">
    Register Team
  </Button>

  <Button variant="gold">
    View Fixtures
  </Button>
</div>
            </div>

          </div>

          {/* Right */}
          <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h2 className="text-3xl font-bold mb-6">
              Tournament Highlights
            </h2>

            <div className="space-y-4 text-lg">

              <p>💰 Prize Pool : ₹65,000</p>

              <p>🥇 Winner : ₹30,000</p>

              <p>🥈 Runner-up : ₹20,000</p>

              <p>🥉 Third Prize : ₹10,000</p>

              <p>🏅 Fourth Prize : ₹5,000</p>

              <p>📍 Venue : {tournament.venue}</p>

              <p>🎟 Entry Fee : ₹{tournament.registrationFee}</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}