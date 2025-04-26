

import Hero from "@/components/sections/Hero";
import { slides } from "@/lib/utils";
import LatestCars from "@/components/sections/LatestCars";
import ReviewsSection from "@/components/sections/ReviewsSction";
import AdsSection from "@/components/sections/AdsSection";
import AboutSection from "@/components/sections/AboutSection";
import RegistrationPrompt from "@/components/sections/RegistrationPrompt";
import { cookies } from "next/headers";
import { fetchUser } from "@/lib/apiCalls/authApiCalls";
import { ProfileInfoApiResponse } from "@/lib/Dto";

export default async function Home() {

  const token = (await cookies()).get('token')?.value;
  if (token) {
    console.log(token)
    const user = await fetchUser(token) as ProfileInfoApiResponse;
    console.log(user.data)
  }
 

  return (
    <main className="w-full min-h-[200vh]">
      {/* <Hero slides={slides} interval={3000} />
      <LatestCars />
      <AboutSection />
      <RegistrationPrompt />
      <AdsSection />
      <ReviewsSection /> */}
    </main>
  );
}
