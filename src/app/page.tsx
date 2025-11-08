import AboutUs from "@/components/ui/AboutUs"
import ContactForm from "@/components/ui/ContactForm"
import BenefitsSection from "@/components/ui/benefits"
import Hero from "@/components/ui/hero"
import SocialProof from "@/components/ui/social-proof"
export default function Home(){
  return(
    <main>
      <Hero/>
      <BenefitsSection/>
      <SocialProof/>
      <AboutUs/>
      <ContactForm/>
    </main>   
  )
}