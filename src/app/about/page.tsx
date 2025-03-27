import AboutBanner from "@/components/about/AboutBanner";
import KeyFeatures from "@/components/about/KeyFeatures";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeam";

export default function AboutPage() {
  return (
    <main>
      <AboutBanner />
      <OurStory />
      <KeyFeatures />
      <OurTeam/>
    </main>
  );
}
