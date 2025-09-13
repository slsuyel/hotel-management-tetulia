import {HeroSection} from "@/components/pages/home/hero-section";
import TouristPlaces from "@/components/pages/home/tourist-places";

export default function Home() {
  return (
    <div className="w-full ">
      <HeroSection />
      <TouristPlaces/>
    </div>
  );
}
