import PartnerHero from '@/components/partners/PartnerHero';
import Problems from '@/components/partners/Problems';
import Solution from '@/components/partners/Solution';
import PartnerTypes from '@/components/partners/PartnerTypes';
import Benefits from '@/components/partners/Benefits';
import MarketData from '@/components/partners/MarketData';
import PilotProgram from '@/components/partners/PilotProgram';
import PartnerCTA from '@/components/partners/PartnerCTA';

export const metadata = {
  title: 'Partners - Trexim',
  description: 'Join Trexim ecosystem and earn additional revenue without marketing costs',
};

export default function PartnersPage() {
  return (
    <main className="bg-white">
      <PartnerHero />
      <Problems />
      <Solution />
      <PartnerTypes />
      <Benefits />
      <MarketData />
      <PilotProgram />
      <PartnerCTA />
    </main>
  );
}
