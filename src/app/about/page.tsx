import AboutAwards from "@/components/about/AboutAwards";
import AboutBanner from "@/components/about/AboutBanner";
import AboutCertificates from "@/components/about/AboutCertificates"; 
import KeyFeatures from "@/components/about/KeyFeatures";
import OurStory from "@/components/about/OurStory"; 
import VissonMission from "@/components/about/VissonMIssion";

export default function AboutPage() {
  return (
    <main>
      <AboutBanner />
      <OurStory />
       
      <KeyFeatures />
      <VissonMission/>
     
      <AboutCertificates/>
      <AboutAwards/>
    </main>
  );
}
