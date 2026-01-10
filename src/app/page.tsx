import Hero from '@/components/sections/Hero'
import Comparison from '@/components/sections/Comparison'
import Features from '@/components/sections/Features'
import Ecosystem from '@/components/sections/Ecosystem'
import Tools from '@/components/sections/Tools'



export default function Home() {
  return (
    <main>
      <Hero />
      <Comparison /> 
      <Features /> 
      <Ecosystem />
      <Tools /> {/* ← добавьте здесь */}
      {/* остальные секции... */}
    </main>
  )
}

