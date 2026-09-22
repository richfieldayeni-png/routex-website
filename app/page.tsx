import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import WhyRouteX from '@/components/WhyRouteX'
import RoutesPreview from '@/components/RoutesPreview'
import Solutions from '@/components/Solutions'
import HowItWorks from '@/components/HowItWorks'
import PreLaunchCTA from '@/components/PreLaunchCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyRouteX />
        <RoutesPreview />
        <Solutions />
        <HowItWorks />
        <PreLaunchCTA />
      </main>
      <Footer />
    </div>
  )
}
