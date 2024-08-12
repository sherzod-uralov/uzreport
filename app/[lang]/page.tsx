import Hero from "@/app/components/Hero";
import Vacations from "@/app/components/vacations/Vacations";
import Education from "@/app/components/education/Education";

export default function Home() {
  return (
    <main>
      <Hero />
        <Vacations/>
        <Education/>
    </main>
  );
}
