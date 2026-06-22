import HeroSection from "../../components/home/HeroSection";
import PrizePool from "../../components/home/PrizePool";
import TournamentInfo from "../../components/home/TournamentInfo";
import Announcements from "../../components/home/Announcements";
import Sponsors from "../../components/home/Sponsors";
import Gallery from "../../components/home/Gallery";
import Contact from "../../components/home/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PrizePool />
      <TournamentInfo />
      <Announcements />
      <Sponsors />
      <Gallery />
      <Contact />
    </>
  );
}