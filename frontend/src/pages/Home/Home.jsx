import HeroSection from "../../components/home/HeroSection";
import PrizePool from "../../components/home/PrizePool";
import TournamentDetails from "../../components/home/TournamentInfo";
import Announcements from "../../components/home/Announcements";
import Sponsors from "../../components/home/Sponsors";
import GalleryPreview from "../../components/home/Gallery";
import ContactSection from "../../components/home/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PrizePool />
      <TournamentDetails />
      <Announcements />
      <Sponsors />
      <GalleryPreview />
      <ContactSection />
    </>
  );
}