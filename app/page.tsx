import About from '@/components/sections/about'
import Feature from '@/components/sections/feature'
import Footer from '@/components/sections/footer'
import Hero from '@/components/sections/hero'
import Navbar from '@/components/sections/navbar'
import Packages from '@/components/sections/packages'
import Portfolio from '@/components/sections/portfolio'

export default function Home() {
  return (
    <>
    <Hero />
    <Feature />
    <Packages />
    <Portfolio cta={true} />
    <About />
    </>
  )
}
