import Hero from '@/components/sections/Hero';
import Comparison from '@/components/sections/Comparison';
import Features from '@/components/sections/Features';
import Ecosystem from '@/components/sections/Ecosystem';
import Tools from '@/components/sections/Tools';

export const metadata = {
  title: 'Trexim - AI Logistics OS',
  description: 'Automate 70% of routine operations with AI-driven logistics platform',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Comparison />
            <Features />
      <Ecosystem />
      <Tools />
    </main>
  );
}
