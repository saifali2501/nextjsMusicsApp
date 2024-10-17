
  // Fixed the typo
import ClientInfintyCard from "@/components/ClientInfintyCard";
import FeatureCourses from "@/components/FeatureCourses";
import Footer from "@/components/Footer";
import Hero_Section from "@/components/Hero_Section";
import Insctruter from "@/components/Insctruter";
import UpComming from "@/components/UpComming";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero_Section />
      <FeatureCourses />
      <ClientInfintyCard /> 
      <UpComming/>
      <Insctruter/>
      <Footer/>
    </div>
  );
}

