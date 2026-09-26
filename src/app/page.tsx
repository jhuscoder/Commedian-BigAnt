import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import PunchlineReveal from '@/components/PunchlineReveal'
import Events from '@/components/Events'
import JokeTicker from '@/components/JokeTicker'
import Media from '@/components/Media'
import CurtainCall from '@/components/CurtainCall'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory-light" id="main-content">
      <Navbar />
      <Hero />
      <About />
      {/* <PunchlinInceReveal /> */}
      <Media />
      <Events />
      <JokeTicker />
      {/* <CurtainCall /> */}
      <Footer />
      <BackToTop />
    </main>
  )
}
