import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import ForBusiness from '@/components/ForBusiness'
import About from '@/components/About'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <HowItWorks />
        <Features />
        <ForBusiness />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
