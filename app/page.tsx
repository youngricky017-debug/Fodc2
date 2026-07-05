import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import LoveStory from "@/components/LoveStory";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import Venue from "@/components/Venue";
import RSVP from "@/components/RSVP";
import GuestList from "@/components/GuestList";
import FAQ from "@/components/FAQ";
import Particles from "@/components/Particles";

export default function Page() {
  return (
    <>
      <div className='bg' />
      <Particles />
      <Hero />
      <Countdown />
      <LoveStory />
      <Gallery />
      <Timeline />
      <Venue />
      <RSVP />
      <GuestList />
      <FAQ />
    </>
  );
}
