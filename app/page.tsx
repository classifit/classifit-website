import Feature from '@/components/sections/feature'
import Hero from '@/components/sections/hero'
import Navbar from '@/components/sections/navbar'
import Packages from '@/components/sections/packages'
import Portfolio from '@/components/sections/portfolio'
import ContactButton from '@/components/ui/contact-button'

export default function Home() {
  return (
    <>
    <Navbar />
    <ContactButton />
    <Hero />
    <Feature />
    <Packages />
    <Portfolio cta={true} />
    </>
  )
}
