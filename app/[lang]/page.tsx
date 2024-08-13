"use client";

import Hero from "@/app/components/Hero";
import Vacations from "@/app/components/vacations/Vacations";
import Education from "@/app/components/education/Education";
import WhuUs from "@/app/components/whyUs/WhuUs";
import Contact from "@/app/components/contact/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Vacations />
      <WhuUs />
      <Education />
      <Contact />
    </main>
  );
}
