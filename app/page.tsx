import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Benefits } from "@/components/benefits"
import { HowItWorks } from "@/components/how-it-works"
import { Stores } from "@/components/stores"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFab } from "@/components/whatsapp-fab"

const Home = () => (
  <>
    <SiteHeader />
    <main id="main">
      <Hero />
      <Products />
      <Benefits />
      <HowItWorks />
      <Stores />
      <FinalCta />
    </main>
    <SiteFooter />
    <WhatsappFab message="Olá! Vim pelo site e gostaria de atendimento na" />
  </>
)

export default Home
