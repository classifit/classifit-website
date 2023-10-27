import About from '@/components/sections/about'
import Feature from '@/components/sections/feature'
import Hero from '@/components/sections/hero'
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
