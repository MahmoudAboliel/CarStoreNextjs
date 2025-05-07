'use server'

import Hero from "@/components/sections/Hero"
import { slides } from "@/lib/utils"
import LatestCars from "@/components/sections/LatestCars"
import ReviewsSection from "@/components/sections/ReviewsSction"
import AdsSection from "@/components/sections/AdsSection"
import AboutSection from "@/components/sections/AboutSection"
import RegistrationPrompt from "@/components/sections/RegistrationPrompt"

// export const dynamic = 'force-dynamic'

export default async function Home() {
 

  return (
    <main className="w-full">
      <Hero slides={slides} interval={3000} />
      <LatestCars />
      <AboutSection />
      <RegistrationPrompt />
      <AdsSection />
      <ReviewsSection />
    </main>
  );
}
