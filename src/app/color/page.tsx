import type { Metadata } from 'next';
import { PortfolioCategoryPage } from '@/components/PortfolioCategoryPage';

export const metadata: Metadata = {
  title: 'VETHESNAN — Color | LA & UT',
  description:
    'Selected commercial and music-video projects from Vethesnan’s color portfolio.',
};

export default function ColorPage() {
  return <PortfolioCategoryPage category="color" />;
}
