import type { Metadata } from 'next';
import { PortfolioCategoryPage } from '@/components/PortfolioCategoryPage';

export const metadata: Metadata = {
  title: 'VETHESNAN — Cinematography | LA & UT',
  description:
    'Selected narrative projects from Vethesnan’s cinematography portfolio.',
};

export default function CinematographyPage() {
  return <PortfolioCategoryPage category="cinematography" />;
}
