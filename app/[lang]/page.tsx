import Hero from "@/app/components/Hero";
import Vacations from "@/app/components/vacations/Vacations";
import Education from "@/app/components/education/Education";
import WhuUs from "@/app/components/whyUs/WhuUs";

export default function Home() {
  return (
    <main>
      <Hero />
        <Vacations/>
      <WhuUs/>
        <Education/>
    </main>
  );
}
